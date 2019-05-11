## 项目具体的流程与经过

## webpack

> 当时做这个项目的时候没有学习vue的脚手架，都是自己学着视频看文档配置的
>
> webpack配置的时候 需要有一个webpack.config.js文件
>
> ```javascript
> module.exports = {
>     entry: '',
>     output: '',
>     plugins: [],
>     module:{
>         rules:[
>             {test:/\.css$/}
>         ]
>     }
> }
> ```
>
> 
>
> 导出一共有四部分
>
> > entry  入口文件  待打包的文件
> >
> > 问题 如何打包多个文件
> >
> > > 应该是一个数组把它们包裹起来
> >
> > output  输出文件  输出到什么地方(dist发行版本)
> >
> > plugins:[]  接受一个数组  
> >
> > 这里边配置了 htmlwebpackplugins 把 index.html配置到内存中，加快运行的速度
> >
> > 还有一个 vue-loader的配置，当时看视频做这个项目的时候vue-loader版本还不高，不用配置这个就能够使用，但是我现在做 ，npm的vue-loader 是最新版的，需要vueloaderplugin 
> >
> > mudule: 是一个对象 其中的rules 是一个数组， 是对加载器使用限制的规则 主要有
> >
> > style-loader css-loader less-loader sass-loader
> >
> > sass-loader一直安装错误  后来用 cnpm sass-loader@latest 才安装成功
> >
> > 还有 url-loader 它后边可以 跟 limit 和hash
> > limit=4371&name=[hash:8]-[name].[ext]limit 
> > 限制字节，在这个字节范围内的图片都会转变成base64的形式,它还可以解析 font字体 
> >
> > babel-loader 来解析es6以及更高的语言 vue-loader来解析vue文件
>
> package.json里边   json里边不可以有注释！！！
>
> > ```json
> > "dev": "webpack-dev-server --open --port 3000 --hot"
> > ```

## 项目开始 app.vue

> app.vue 头部用的是mint-ui的 header头
>
> 中间部分是实现跳转 有一个 router-view
>
> 下方是一个tabbar 有首页 会员  购物车 搜索 四项
>
> 问题  动画效果
>
> 平时写 .v-enter .v-leave-to 写习惯了  这次这么写 在下方tabbar 实现首页到会员的跳转的时候会内容一个在上一个在下  以为用mode: out-in 可以解决 但是还是体验不好，后来通过查阅文档才知道  .v-enter 和 .v-leave-to分别代表的刚进入和离开后两种状态，如果设置为一样的话比如 tranlateX(100%) 进入的时候从右往左，出去的时候从左到右，而另一个进入的是从右到左导致发生了这种偏差，可以把 v-leave-to设置为translateX(-100%) 这样出去的时候就从左到右了 ，并且为了让他们在同一高度 还需要离开状态时是 position:absolute