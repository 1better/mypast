## vue5

## 父子组件之间的传值

> 父组件向子组件传值
>
> > 1. 组件实例定义方式，注意：一定要使用`props`属性来定义父组件传递过来的数据
> >
> > ```html
> > <script>
> >  // 创建 Vue 实例，得到 ViewModel
> >  var vm = new Vue({
> >    el: '#app',
> >    data: {
> >      msg: '这是父组件中的消息'
> >    },
> >    components: {
> >      son: {
> >        template: '<h1>这是子组件 --- {{finfo}}</h1>',
> >        props: ['finfo']
> >      }
> >    }
> >  });
> > </script>
> > ```
> >
> > 2. 使用`v-bind`或简化指令，将数据传递到子组件中：
> >
> > ```html
> > <div id="app">
> >    <!--注意传值 是在组件中定义 :finfo='msg'  msg是父组件中的data数据 finfo为props数组的参数-->
> >  <son :finfo="msg"></son>
> > </div>
> > ```
> >
> > 
>
> 子组件向父组件传值
>
> > 1. 原理：父组件将方法的引用，传递到子组件内部，子组件在内部调用父组件传递过来的方法，同时把要发送给父组件的数据，在调用方法的时候当作参数传递进去；
> > 2. 父组件将方法的引用传递给子组件，其中，`getMsg`是父组件中`methods`中定义的方法名称，`func`是子组件调用传递过来方法时候的方法名称
> > 3. 子组件内部通过`this.$emit('方法名', 要传递的数据)`方式，来调用父组件中的方法，同时把数据传递给父组件使用
> >
> > code 
> >
> > ```html
> > <div id="app">
> > <!-- 引用父组件
> > 	方法是用@ getMsg是父组件的方法  func 是$emit()时用到的参数
> > -->
> > <son @func="getMsg"></son>
> > <!-- 组件模板定义 -->
> > <script type="x-template" id="son">
> > <div>
> >   <input type="button" value="向父组件传值" @click="sendMsg" />
> > </div>
> > </script>
> > </div>
> > <script>
> > // 子组件的定义方式
> > Vue.component('son', {
> > template: '#son', // 组件模板Id
> > methods: {
> >     //这个sendMsg是子组件的方法
> >   sendMsg() { // 按钮的点击事件
> >     this.$emit('func', 'OK'); // 调用父组件传递过来的方法，同时把数据传递出去
> >   }
> > }
> > });
> > // 创建 Vue 实例，得到 ViewModel
> > var vm = new Vue({
> > el: '#app',
> > data: {},
> > methods: {
> >   getMsg(val){ // 子组件中，通过 this.$emit() 实际调用的方法，在此进行定义
> >     alert(val);
> >   }
> > }
> > });
> > </script>
> > ```
> >
> > 
>
> **注意**
>
> > 组件中的props中的数据都是通过父组件传递过来
> >
> > props中的数据都是只读的，无法重新赋值

## this.$refs （类似于document.getElementById）

> 获取元素和组件
>
> ```html
> <div id="app">
>  <div>
>     	<!--注意属性是 ref 不再是id，class什么的了-->
>    <input type="button" value="获取元素内容" @click="getElement" />
>    <!-- 使用 ref 获取元素 -->
>    <h1 ref="myh1">这是一个大大的H1</h1>
>    <hr>
>    <!-- 使用 ref 获取子组件 -->
>    <my-com ref="mycom"></my-com>
>  </div>
> </div>
> 
> <script>
>  Vue.component('my-com', {
>    template: '<h5>这是一个子组件</h5>',
>    data() {
>      return {
>        name: '子组件'
>      }
>    }
>  });
> //注意 引用时 时 this.$refs (s表示复数，是多个)
>  // 创建 Vue 实例，得到 ViewModel
>  var vm = new Vue({
>    el: '#app',
>    data: {},
>    methods: {
>      getElement() {
>        // 通过 this.$refs 来获取元素
>        console.log(this.$refs.myh1.innerText);
>        // 通过 this.$refs 来获取组件
>        console.log(this.$refs.mycom.name);
>      }
>    }
>  });
> </script>
> ```
>
> 

## 路由

> 1. 后端路由：**对于普通的网站，所有的超链接都是URL地址，所有的URL地址都对应服务器上对应的资源；
> 2. **前端路由：**对于单页面应用程序来说，主要通过URL中的hash(#号)来实现不同页面之间的切换，同时，hash有一个特点：HTTP请求中不会包含hash相关的内容；所以，单页面程序中的页面跳转主要用hash实现；
> 3. 在单页面应用程序中，这种通过hash改变来切换页面的方式，称作前端路由（区别于后端路由）；
> 4. 前端路由类似于a连接中的锚点
>
> vue中使用vue-router
>
> > 1. 导入 vue-router 组件类库：
> > 2. 使用 router-link 组件来导航
> > 3. 使用 router-view 组件来显示匹配到的组件
> > 4. 创建使用`Vue.extend`创建组件
> > 5. 创建一个路由 router 实例，通过 routers 属性来定义路由匹配规则
> > 6. 使用 router 属性来使用路由规则
> >
> > ```javascript
> > //这个是在path路径中 有/:id/login  用params参数来获取就可以了
> > // 如果是在router-link中 有to = '/login?id=3'
> > // 此时的值需要用到 $route.query.id 这样获取(类似于express框架接受get请求数据后的query）
> > var login = {
> >          template: '<h1>登录 --- {{ $route.params.id }} --- {{ $route.params.name }}</h1>',
> >          created(){
> >              console.log(this.$route.params)
> >          }
> >      }
> > 
> > var router = new VueRouter({
> >          routes:[
> >              {path:'/',redirect:'/login'},
> >              {path:'/login/:id/:name',component:login},
> >              {path:'/register',component:register}
> >          ],
> >          linkActiveClass: 'mylink',
> > 
> >      })
> > ```
> >
> > 
> >
> > 
>
> 路由嵌套
>
> > 使用children属性
> >
> > ```javascript
> > var router = new VueRouter ({
> >          routes:[
> >              {
> >                  path:'/account',
> >                  component:account,
> >                  //注意 前边没有'/'这个了 如果有的话 还是会找/login,不再是 			                  //    /account/login了
> >                  children:[
> >                      {path:'login',component:login},
> >                      {path:'register',component:register}
> >                  ]
> >              }
> >          ]
> >      })
> > ```
> >
> > ```html
> > <div id="app">
> >  <router-link to="/account">Account</router-link>
> >  <router-view></router-view>
> > </div>
> > <template id="tmpl">
> >  <div>
> >    <h1>这是 Account 组件</h1>
> >    <router-link to="/account/login">登录</router-link>
> >    <router-link to="/account/register">注册</router-link>
> >    <router-view></router-view>
> >  </div>
> > </template>
> > ```
> >
> > 
>
> 命名视图实现经典布局
>
> > ```javascript
> > var router = new VueRouter ({
> >     routes:[
> >         {
> >             path:'/',
> >             components:{
> >                 'default': header,
> >                 'left': leftBox,
> >                 'right': mainBox
> >             }
> > 
> >         }
> >     ]
> > })
> > 
> > ```
> >
> > ```html
> > <div id="app">
> >         <router-view ></router-view>
> >         <div class="container">
> >             <router-view name='left'></router-view>
> >             <router-view name='right'></router-view>
> >         </div>
> >     </div>
> > ```
> >
> > 