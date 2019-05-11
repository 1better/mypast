## vue6

## 传值

> ### methods事件传值
>
> ```javascript
> <div id="app">
>         first<input type="text" v-model='f' @keyup='$f'>
>         last<input type="text" v-model='l' @keyup='$f'>
>         all <input type="text" v-model='a'>
>     </div>
>     <script>
>         var vm = new Vue({
>             el:'#app',
>             data:{
>                 f:'',
>                 l:'',
>                 a:''
>             },
>             methods:{
>                 $f(){
>                     this.a = this.f + '-' +this.l;
>                 }
>             }
>         })
>     </script>
> ```
>
> ###  watch传值
>
> ```javascript
>  <div id="app">
>         first<input type="text" v-model='f' >
>         last<input type="text" v-model='l' >
>         all <input type="text" v-model='a'>
>     </div>
>     <script>
>         var vm = new Vue({
>             el:'#app',
>             data:{
>                 f:'',
>                 l:'',
>                 a:''
>             },
>             methods:{
>             },
>             watch:{
>                 f:function (newValue,oldValue) {
>                     this.a = newValue + '-' + oldValue
> 
>                 }
> 
>             }
>         })
>     </script>
> ```
>
> (watch也可以监视虚拟dom)
>
> ```javascript
> watch: {
>         '$route': function (newVal, oldVal) {
>           if (newVal.path === '/login') {
>             console.log('这是登录组件');
>           }
>         }
>       }
> ```
>
> ###  computed计算属性
>
> 默认只有`getter`的计算属性：
>
> ```javascript
> <div id="app">
>         first<input type="text" v-model='f' >
>         last<input type="text" v-model='l' >
>         all <input type="text" v-model='a'>
>             //下边的值已经被缓存，不用重新计算
>         <p>{{a}}</p>
>         <p>{{a}}</p>
>         <p>{{a}}</p>
>     </div>
>     <script>
>         var vm = new Vue({
>             el:'#app',
>             data:{
>                 f:'',
>                 l:'',
>             },
>             methods:{
>             },
>             computed:{
>                 a:function () {
>                     console.log('ok')
>                    return  this.f + '-' + this.l;
>                 }
>             }
>         })
>     </script>
> ```
>
> getter和setter
>
> ```javascript
>  computed: {
>         fullName: {
>           get: function () {
>             return this.firstName + ' - ' + this.lastName;
>           },
>           set: function (newVal) {
>             var parts = newVal.split(' - ');
>             this.firstName = parts[0];
>             this.lastName = parts[1];
>           }
>         }
>       }
> ```
>
>  

## watch`、`computed`和`methods之间的对比

> 1. computed`属性的结果会被缓存，除非依赖的响应式属性变化才会重新计算。主要当作属性来使用；
> 2. `methods`方法表示一个具体的操作，主要书写业务逻辑；
> 3. `watch`一个对象，键是需要观察的表达式，值是对应回调函数。主要用来监听某些特定数据的变化，从而进行某些具体的业务逻辑操作；可以看作是`computed`和`methods`的结合体；

## nrm的安装使用

> ```shell
> # 用nrm切换下载镜像的（淘宝，cnpm都有）
> npm i nrm
> nrm ls
> nrm use taobao
> ```
>
> 

##  静态资源

> - JS
>
> - .js  .jsx  .coffee  .ts（TypeScript  类 C# 语言）
>
> - CSS
>
> - .css  .less   .sass  .scss
>
> - Images
>
> - .jpg   .png   .gif   .bmp   .svg
>
> - 字体文件（Fonts）
>
> - .svg   .ttf   .eot   .woff   .woff2
>
> - 模板文件
>
> - .ejs   .jade  .vue【这是在webpack中定义组件的方式，推荐这么用】

## 静态资源多了的问题

> 1. 网页加载速度慢， 因为 我们要发起很多的二次请求；
> 2. 要处理错综复杂的依赖关系

## 解决

> 1. 合并、压缩、精灵图、图片的Base64编码
> 2. 可以使用之前学过的requireJS、也可以使用webpack可以解决各个包之间的复杂依赖关系

## webpack

> 概念
>
> > webpack 是前端的一个项目构建工具，它是基于 Node.js 开发出来的一个前端工具；
> >
> > 借助于webpack这个前端自动化构建工具，可以完美实现资源的合并、打包、压缩、混淆等诸多功能。
>
> 解决问题的完美方案
>
> > 1. 使用Gulp， 是基于 task 任务的；
> > 2. 使用Webpack， 是基于整个项目进行构建的；

## webpack安装

> 1. 运行`npm i webpack -g`全局安装webpack，这样就能在全局使用webpack的命令
> 2. 在项目根目录中运行`npm i webpack --save-dev`安装到项目依赖中

## export与export default

> export导入
>
> > + 使用 export 向外暴露的成员，只能使用 { } 的形式来接收，这种形式，叫做 【按需导出】
> > + export 可以向外暴露多个成员， 同时，如果某些成员，我们在 import 的时候，不需要，则可以 不在 {}  中定义
> > +  使用 export 导出的成员，必须严格按照 导出时候的名称，来使用  {}  按需接收；
> > +  使用 export 导出的成员，如果 就想 换个 名称来接收，可以使用 as 来起别名；
> >
> > ```javascript
> > export var a = '小星星';
> > export var content = {name:"zs",age:18};
> > 
> > import {a,content as con1} from './test';
> > ```
> >
> >  
>
> export default导入
>
> > +  export default 向外暴露的成员，可以使用任意的变量来接收
> > + 在一个模块中，export default 只允许向外暴露1次
> > + 在一个模块中，可以同时使用 export default 和 export 向外暴露成员

