## vue4

## 组件

> 组件化
>
> > 简单的概念
> >
> > > 组件的出现就是为了拆分Vue实例的代码量，能够让我们以不同组件来拆分不同模块，将来需要
> > > 啥功能直接调用就可以
> >
> > 组件化和模块化的不同
> >
> > > + 模块化是从代码逻辑角度进行划分，方便代码分层开发，保证每个功能模块单一
> > > + 组件化是从ui界面角度进行划分，方便ui组件重用
> > >
> > > ### **注意 **   组件的模板只能有一个根元素
>
> 创建组件的方式
>
> > ```javascript
> > // 通过 template 属性，指定了组件要展示的HTML结构
> > // 使用 Vue.component('组件的名称', 创建出来的组件模板对象)
> > // 定义组件时使用了驼峰命名（如 myCom1） 用时应该是 <my-com1>
> > Vue.component('mycom1', Vue.extend({
> >       template: '<h3>这是使用 Vue.extend 创建的组件</h3>'
> > }))
> > ```
> >
> > ```html
> > <div id="app">
> >     <!-- 如果要使用组件，直接，把组件的名称，以 HTML 标签的形式，引入到页面中，即可 -->
> >     <mycom1></mycom1>
> >   </div>
> > ```
> >
> >  
> >
> > ```html
> > <!-- 在 被控制的 #app 外面,使用 template 元素,定义组件的HTML模板结构  -->
> > <template id="tmpl">
> >     <div>
> >       <h1>这是通过 template 元素,在外部定义的组件结构</h1>
> >     </div>
> >   </template>
> > ```
> >
> > ```javascript
> >  Vue.component('mycom3', {
> >       template: '#tmpl'
> >  })
> > ```
>
> 私有组件
>
> > ```javascript
> > //在vue的app实例内部 是对象
> > components: { // 定义实例内部私有组件的
> >         login: {
> >           template: '#tmpl2'
> >         }
> > }
> > ```
>
> 私有组件的方法和data属性
>
> > ```javascript
> > /*
> > 1. 组件可以有自己的 data 数据
> > 2. 组件的 data 和 实例的 data 有点不一样,实例中的 data 可以为一个对象,但是 组件中的 data 必须是一个方法
> > 3. 组件中的 data 除了必须为一个方法之外,这个方法内部,还必须返回一个对象才行;
> > 4. 组件中 的data 数据,使用方式,和实例中的 data 使用方式完全一样!!!
> > */
> >    Vue.component('mycom1', {
> >       template: '<h1>这是全局组件 --- {{msg}}</h1>',
> >       data: function () {
> >         return {
> >           msg: '这是组件的中data定义的数据'
> >         }
> >       }
> >     })
> > 
> > //注意 data必须是一个方法，并且返回一个对象，这样做的好处是只作用于自己的那一片区域，如果是一个全局对象的时候，控制它就等于控制了多个，达不到想要的那种效果
> > ```
> >
> >  
>
> 组件切换1
>
> > ```html
> > <div id="app">
> >     <a href="" @click.prevent="flag=true">登录</a>
> >     <a href="" @click.prevent="flag=false">注册</a>
> >     <login v-if="flag"></login>
> >     <register v-else="flag"></register>
> >   </div>
> > 
> >   <script>
> >     Vue.component('login', {
> >       template: '<h3>登录组件</h3>'
> >     })
> >     Vue.component('register', {
> >       template: '<h3>注册组件</h3>'
> >     })
> >     // 创建 Vue 实例，得到 ViewModel
> >     var vm = new Vue({
> >       el: '#app',
> >       data: {
> >         flag: false
> >       },
> >       methods: {}
> >     });
> >   </script>
> > ```
> >
> >  
>
> 组件切换2
>
> > ```html
> > <div id="app">
> >     <a href="" @click.prevent="comName='login'">登录</a>
> >     <a href="" @click.prevent="comName='register'">注册</a>
> >     <!-- Vue提供了 component ,来展示对应名称的组件 -->
> >     <!-- component 是一个占位符, :is 属性,可以用来指定要展示的组件的名称 -->
> >     <component :is="comName"></component>
> > 
> >     <!--学习的几个 Vue 提供的标签 -->
> >     <!-- component,  template,  transition,  transition-group  -->
> >   </div>
> > <!-- comName在vue实例中的data中需要定义-->
> > ```
> >
> >  
>
> 组件动画效果
>
> > ```html
> > <div id="app">
> > <a href="" @click.prevent="comName='login'">登录</a>
> > <a href="" @click.prevent="comName='register'">注册</a>
> > 
> > <!-- 通过 mode 属性,设置组件切换时候的 模式 
> > 	out-in 设定的是先出去再进入
> > -->
> > <transition mode="out-in">
> >     <!--占位符-->
> > <component :is="comName"></component>
> > </transition>
> > </div>
> > <!--
> > 	只需要把要切换的html用transition包裹就行了
> > -->
> > ```
> >
> > 

