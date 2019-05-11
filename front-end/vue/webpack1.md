## webpack1

## webpack安装以及使用流程

> 安装
>
> ```shell
> ########## 好像已删除东西 node-sass就不好使，下载东西现在最好用 cnpm吧############
> npm init -y
> #安装jquery
> npm i jquery -S
> #安装webpack
> npm i webpack -D
> npm i webpack
> #安装webpack-dev-server
> npm i webpack-dev-server -D
> #安装html-webpack-plugins插件
> npm i html-webpack-plugin --save-dev
> #安装vue，将vue安装为运行依赖
> npm i vue -S
> 
> #安装style，css，less，sass加载器
> npm i style-loader css-loader --save-dev
> npm i less-loader less -D
> npm i sass-loader node-sass -D
> #安装url加载器
> npm i url-loader file-loader -D
> #安装babel
> ###主题 babal随之更新，还是用时多读一些官网api文档，就因为安装了8所以阴沟里翻船了！
> npm i babel-core@7 babel-loader babel-plugin-transform-runtime --save-dev
> npm i babel-preset-env babel-preset-stage-0 --save-dev
> ###安装 插件方便mint-ui的使用
> npm install babel-plugin-component -D
> #安装vue-loader，将解析转换vue的包安装为开发依赖
> npm i vue-loader vue-template-compiler -D
> 
> #安装vue-router vue-resource 
> npm i vue-router vue-resource -S
> ```
>
> 配置package.json
>
> ```json
> //package.json中（注意json里边没有注解，这句话只是为了说明加的，不可以有注解！）
> "dev": "webpack-dev-server --open --hot --port 3000 "
> //此时可以用npm run dev来启动
> // --open  一开启就打开网页
> // --hot   热重载  异步刷新
> // --port  3000 端口号3000
> // --contentBase src  默认打开src下边的文件
> ```
>
> 配置webpack.config.js
>
> ````javascript
> const path = require('path');
> const webpack = require('webpack');
> // 只要是插件，都一定要 放到 plugins 节点中去
> // 这个插件的两个作用：
> //  1. 自动在内存中根据指定页面生成一个内存的页面
> //  2. 自动，把打包好的 bundle.js 追加到页面中去
> var htmlWebpackPlugin = require('html-webpack-plugin');
> //vue-loader 15.*版本需要这个插件，不然会报错
> const VueLoaderPlugin = require('vue-loader/lib/plugin');
> module.exports = {
> //入口函数
> //注意是path.resolve
> entry: path.resolve(__dirname, 'src/js/main.js'),
> //输出函数
> output: {
> path: path.resolve(__dirname, 'dist'),
> filename: 'bundle.js'
> },
> /*这里和在package.json里边配置的一样
> 	deServer: { // 这是配置 dev-server 命令参数的第二种形式，相对来说，这种方式麻烦一些
> //  --open --port 3000 --contentBase src --hot
> open: true, // 自动打开浏览器
> port: 3000, // 设置启动时候的运行端口
> contentBase: 'src', // 指定托管的根目录
> hot: true // 启用热更新 的 第1步
> },
> */
> plugins: [
> //为了能够使用vue-loader
> new VueLoaderPlugin(),
> /*w webpack.HotModuleReplacementPlugin(), // new 一个热更新的 模块对象， 这是 启用热更新的第 3 步*/
> //把index.html加到内存中，加快运行速度
> new htmlWebpackPlugin({
> template: path.resolve(__dirname, 'src/index.html'),
> filename: 'index.html'
> })
> ],
> //配置第三方模块
> module: {
> rules: [
> {test: /\.css$/, use: ['style-loader', 'css-loader']},
> {test: /\.less$/, use: ['style-loader', 'css-loader','less-loader']},
> //注意是scss，然后是sass-loader
> {test: /\.scss$/, use: ['style-loader', 'css-loader','sass-loader']},
> //加载font字体
> { test: /\.(ttf|eot|svg|woff|woff2)$/, use: 'url-loader' },
> { test: /\.(png|jpg|gif)$/, use: 'url-loader' }
> // use: 'url-loader?limit=4371&[hash:8]-[name].[ext]'
> // hash哈希表最多32位  name是用原来名字 .[ext]是后缀名
> ]
> }，
> /* 导入的vue 功能不完整，只提供了 runtime-only 的方式 ，可以通过下面方式改，或者直接render渲染一个这样做
> resolve: {
> alias: { // 修改 Vue 被导入时候的包的路径
> // "vue$": "vue/dist/vue.js"
> }
> }*/
> 
> }
> 
> // 当我们在 控制台，直接输入 webpack 命令执行的时候，webpack 做了以下几步：
> //  1. 首先，webpack 发现，我们并没有通过命令的形式，给它指定入口和出口
> //  2. webpack 就会去 项目的 根目录中，查找一个叫做 `webpack.config.js` 的配置文件
> //  3. 当找到配置文件后，webpack 会去解析执行这个 配置文件，当解析执行完配置文件后，就得到了 配置文件中，导出的配置对象
> //  4. 当 webpack 拿到 配置对象后，就拿到了 配置对象中，指定的 入口  和 出口，然后进行打包构建；
> ````
>
> 配置.babelrc 
>
> ```json
> //注意  这只是babel使用的一种方法而已，也可以不这样做！
> {
> "presets":["env", "stage-0"],
> "plugins":["transform-runtime"]
> }
> ```
>
> 
>
> 使用
>
> ```javascript
> import $ from 'jquery';
> 
> import '../css/main.css';
> // 不写 node_modules 这一层目录 ，默认 就会去 node_modules 中查找
> import 'bootstrap/dist/css/bootstrap.css';
> 
> $(function(){
> $('li:odd').css('backgroundColor','red');
> $('li:even').css('backgroundColor','blue');
> })
> 
> // class 关键字，是ES6中提供的新语法，是用来 实现 ES6 中面向对象编程的方式
> // 使用 static 关键字，可以定义静态属性
> // 所谓的静态属性，就是 可以直接通过 类名， 直接访问的属性
> // 实例属性： 只能通过类的实例，来访问的属性，叫做实例属性
> class Person{
> static info = '你好'
> }
> console.log(Person.info)
> ```
>
> 使用mint-ui (**一定要引入包**)
>
> ```vue
> <template>
> <div>
>  <h1>这是app组件</h1>
>    <mt-button type="danger" icon="more" @click="show">default</mt-button>
>    <mt-button type="primary" size='large' @click="show">default</mt-button>
> </div>
> </template>
> <script>
> // 按需导入 Toast 组件
> import { Toast } from "mint-ui";
> export default {
> data() {
>  return {
>    toastInstanse: null
>  };
> },
> created() {
>  this.getList();
> },
> methods: {
>  getList() {
>    // 模拟获取列表的 一个 AJax 方法
>    // 在获取数据之前，立即 弹出 Toast 提示用户，正在加载数据
>    this.show();
>    setTimeout(() => {
>      //  当 3 秒过后，数据获取回来了，要把 Toast 移除
>      this.toastInstanse.close();
>    }, 3000);
>  },
>  show() {
>    // Toast("提示信息");
>    this.toastInstanse = Toast({
>      message: "这是消息",
>      duration: -1, // 如果是 -1 则弹出之后不消失
>      position: "top",
>      iconClass: "glyphicon glyphicon-heart", // 设置 图标的类
>      className: "mytoast" // 自定义Toast的样式，需要自己提供一个类名
>    });
>  }
> }
> }
> </script>
> ```
>
> 