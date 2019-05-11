## vue-resource

## Vue-resource的用法

> 注意
>
> > 发送ajax要尽早（在created(){}中）
>
> 引入
>
> > ```javascript
> > <script src="./lib/vue-2.4.0.js"></script>
> >   <!-- 注意：vue-resource 依赖于 Vue，所以先后顺序要注意  -->
> >   <!-- this.$http.jsonp -->
> > <script src="./lib/vue-resource-1.3.4.js"></script>
> > ```
>
> 使用
>
> > ```javascript
> > //get
> > this.$http.get('http://vue.studyit.io/api/getlunbo').then(function (result) {
> >       // 通过 result.body 拿到服务器返回的成功的数据
> >     console.log(result.body)
> > }                                                                                    
> > ```
> >
> > ```javascript
> > //post
> > //设置表单格式 为application/x-www-form-urlencoded
> > // 设置{ emulateJSON: true }即设置表单格式
> > this.$http.post('http://vue.studyit.io/api/post', {}, { emulateJSON: true }).then(result => {
> >             console.log(result.body)
> >           })
> > 
> > //this.$http.post() 中接收三个参数：
> > /* 第一个参数： 要请求的URL地址
> >    第二个参数： 要提交给服务器的数据 ，要以对象形式提交给服务器 { name: this.name }
> >    第三个参数： 是一个配置对象，要以哪种表单数据类型提交过去， { emulateJSON: true }, 以普通表单格式，将数据提交给服务器 application/x-www-form-urlencoded
> >     在 post 方法中，使用 .then 来设置成功的回调函数，如果想要拿到成功的结果，需要 result.body*/
> > ```
> >
> > ```javascript
> > //jsonp
> >  this.$http.jsonp('http://vue.studyit.io/api/jsonp').then(result => {
> >             console.log(result.body)
> > })
> > ```
> >
> > ```javascript
> > //使用小知识
> > 
> > //配置全局路径，此时配置好之后每次发起http请求应该以相对路径开头，前边不能有/，否则 不会启用根路径做拼接
> > Vue.http.options.root = 'http://vue.studyit.io/';
> > 
> > // 全局启用 emulateJSON 选项
> >   Vue.http.options.emulateJSON = true;
> > 
> > ```
> >
> > 