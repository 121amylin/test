
function createHTML(arr){
    let listHTML =""
    arr.forEach(item => {
      listHTML +=`<li><span>${item.id}  --   </span>${item.name}</li>`
    });
    $('#list').html(listHTML)
}
function getAJAX(){
  $.ajax({
    url:'http://localhost:3000/list',
    method:'get',
    dataType:'json',data:{}
  }).done(function(res){
    data=res
    createHTML(res)
  }).fail(function(err){
    console.log(err)
  })
}

function addAJAX(){
  if(!$('#add').val().trim()){
    $('#add').val("")
    return
  }
  $.ajax({
    url:'http://localhost:3000/list',
    method:'post',
    dataType:'json',
    data:{
      id:Math.floor(Math.random()*1000),
      name:$('#add').val()
    }
  }).done(function(res){
    data.push(res)
    console.log('新增成功')
    $('#add').val("")
    createHTML(data)
  }).fail(function(){
    console.log('新增失敗')
    $('#add').val("")
  })
}

function delAJAX(){
  $.ajax({
    url:`http://localhost:3000/list/${$('#delid').val()}`,
    method:'delete',
    dataType:'json',
    data:{}
  }).done(function(){
    let point=0
    let val=$('#delid').val()
    data.forEach(item=>{
      if(item.id!==val){
        point++
      }
    })
    data.splice(point,1)
    createHTML(data)
    console.log('刪除成功')
    $('#delid').val("")
  }).fail(function(){
    console.log('刪除失敗')
    $('#delid').val("")
  })
}

function revisedAJAX(){
  $.ajax({
    url:`http://localhost:3000/list/${$('#revisedid').val()}`,
    method:'put',
    dataType:'json',
    data:{
      name:$('#revisedtext').val()
    }
  }).done(function(){
    data.forEach(item=>{
      if(item.id==$('#revisedid').val()){
        item.name=$('#revisedtext').val()
      }
    })
    console.log('修改成功')
    $('#revisedid').val('')
    $('#revisedtext').val('')
    createHTML(data)
  }).fail(function(){
    console.log('修改失敗')
    $('#revisedid').val('')
    $('#revisedtext').val('')
  })
}
let data=null
getAJAX()

$('#addbtn').on("click",addAJAX)
$('#delbtn').on("click",delAJAX)
$('#revisedbtn').on("click",revisedAJAX)

