### 01_fotm表單預設事件
- 發現特性，單一 input type="text" ，沒有submit一樣可以送出，只要focus在input上，按下enter沒有submit一樣可以送出。。
- [[偷米騎巴哥]15分鐘系列 - 原來HTML表單也有的淺規則](https://www.youtube.com/watch?v=o6kp41bXZdo)

### 02_HTML form表單送出預設行為和javaScript交互作用
- 用javaScript送出表單，用name="submir" 或 id="submit" 命名會送不出去
- 用onsubsit或事件監聽的方式，用javaScript把表單送出，不會call onsubsit的事件(用原生html input type="submit" 可以)
- [[偷米騎巴哥]15分鐘系列 - form表單踩雷經驗分享](https://www.youtube.com/watch?v=OJYROyE0ak0&t=612s)