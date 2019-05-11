### vue-购物  （第一个项目）

## app.vue 

> + 头部  使用了 mint-ui 的 mt - header  
> + 中间部分  router-view  来实现路由跳转之后的界面
> + 底部使用  mui的 tabbar（div默认模式）   依照此改为想要的样式

## HomeContainer.vue

> + 使用了 mint-ui 的轮播图 mt-swipe  依照这个修改自己样式
>
> + 内容部分   使用了 mui的 grid（九宫格） 依照此改为想要的样式
>
>   

## HomeContainer.vue  跳转  new.vue

> + 图文列表   使用了 mui的 media list (图文列表) 缩略图居左   依照此改为想要样式
>
>   也用了 icon的扩展图标

## new.vue 跳转 newsinfo.vue

> + 自己添加样式
> + 为了达到可复用 添加了一个子组件的评论组件**comment.vue**

## HomeContainer.vue 跳转  photoList.vue

> + 滑动条 使用了 mui的  pull-torefresh 的 选项卡切换
> + 图片懒加载使用的 mint-ui 的 v-lazy

## photoList.vue 跳转  photoInfo.vue

> + 使用了 vue-preview 来实现 图片的放缩查看
> + 下方添加了子组件的评论组件 comment.vue

## HomeContainer.vue 跳转 goodsList.vue

> + 采用了flex布局 
> + 用到了 mint-ui 的  mt-button

## goodsList.vue 跳转到  goodsInfo.vue 

> + 使用了 子组件的 swiper.vue  
> + 和HomeContainer.vue 共用了一个组件  但是 图片的限制不同，需要父子间传值来改正
>
> ```vue
> goodsList :swiperList="goodsSwiperList"
> HomeContainer :isfull="true"  :swiperList="homeSwiper"
> 在 swiper 中
>  <mt-swipe :auto="4000" >
>       <!-- 这里本来应该用vue-resource获取数据的，但是没有，就写死了 -->
>       <mt-swipe-item v-for='item in swiperList' :key='item.img'>
>         <img :src="item.img" alt="" :class="{'full':isfull}">
>       </mt-swipe-item>
> </mt-swipe>
> ```
>
> + 使用了  mui的 card-view 的 页眉页脚 
> + 使用了 mint-ui 的 plain   按钮样式（里边透明，文字有颜色） 
> + 加入购物车部分 使用了小球的半场动画

##   goodsInfo.vue  跳转到 goodsDec.vue 和 goodsComment.vue

> + 练习了一下编程式导航 this.$router.push({name:'goodsComment'})
> + goodsComment.vue  添加了 一个 comment的子组件

## shopContianer 

> + 使用了 mui 的 card-view 的 第一个卡片 

## 学到的知识点

> 使用 router.js 来配置路由  路由的连接不光 router-link ，也可以 编程式导航来实现页面的跳转
>
> > { path: '/home/goodsdec', component: goodsDec,name:'goodsDec'}
>
>  

## 遇到的问题以及解决

> + mui 中 引入 购物车时 是mui-icon-extra-cart 里边的内容 ，当时没有引用，导致样式出错
>
> + 设置路由高亮的时候   忘记了 linkActiveClass:'mui-active' 这样来配置
>
> + 评论，轮播 组件 都应该封装为 子组件  以达到组件的复用 
>
> + 制作滑动滚动条时遇到很多问题
>
>   > 1. slider 区域的 mui-fullscreen 类去掉 不然页面显示不正常
>   > 2. 滑动条无法正常触发滑动，通过检查官方文档，发现这是JS组件，需要被初始化一下
>   > 3. 在初始化 滑动条 的时候，导入的 mui.js ，但是，控制台报错： `Uncaught TypeError: 'caller', 'callee', and 'arguments' properties may not be accessed on strict mode`
>   > 4. 需要 mui 的 非严格模式去掉 不现实，就采用了第二种方法  安装`babel-plugin-transform-remove-strict-mode`插件 来移除 webpack 打包的严格模式
>   > 5. 刚进入 图片分享页面的时候， 滑动条无法正常工作，分析之后发现要等页面的元素加载完毕才可以初始化滑动条 ，需要在 mounted 生命周期函数中执行
>   > 6. 滑动条 调试OK后，发现， tabbar 无法正常工作了，需要把 每个 tabbar 按钮的 样式中  `mui-tab-item` 重新改一下名字 
>
> + v-lazy的引入 不能正常工作 按需导入出问题，但是import整个mint-ui就没有错误了
>
> + v-preivew插件的引入，但是显示图片(缩小的时候不能正常设置样式) 我以为是这个插件的问题，就引入了vue-preview2 结果问题更大了 它需要脚手架，我的是自己搭建的 删除的时候 结果node-sass加载器又报错了，自己重新用 cnpm node-sass@latest  重新下载了一遍才好 看文档也自己实验才发现不是这个插件的问题，是设置了 scoped  属性的问题，改了之后就能设置样式了
>
> + 加入购物车之后小球的半场动画
>
>   > 主要有三个类  beforeEnter enter afterEnter

