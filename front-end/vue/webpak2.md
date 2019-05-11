## webpak2

## node sass-loader老是出错

> 解决
>
> ```shell
> cnpm i sass-loader
> #不行就下边
> cnpm i sass-loader@latest
> ```
>
> mint-ui使用（搭配vue-router）
>
> ```vue
> <template>
> <div class='app-container'>
>  <!-- 
> 顶部header区域 
> 注意mt-header这样 (button这样mt-button )
> 	-->
>    
>  <mt-header title='我喜欢前端哦哦哦'></mt-header>
>  <!-- 路由部分 -->
>  <router-view></router-view>
> 
>  <footer class=""></footer>
> </div>
> </template>
> <script>
> export default {
> 
> }
> </script>
> <style lang="scss" scoped>
> .app-container{
> 
> }
> </style>
> ```
>
> ```javascript
> //按需导入，以及vue-router的use
> import Vue from 'vue';
> import VueRouter from 'vue-router';
> Vue.use(VueRouter);
> 
> import '../../lib/mui/css/mui.min.css';
> 
> import app from '../app.vue';
> 
> 
> import { Header, Swipe, SwipeItem } from 'mint-ui';
> 
> Vue.component(Header.name,Header);
> Vue.component(Swipe.name,Header);
> Vue.component(SwipeItem.name,Header);
> import router from './router.js'
> var vm = new Vue({
> el:'#app',
> data:{
> 
> },
> methods:{
> 
> },
> render:c=>c(app),
> router
> })
> ```
>
> router.js
>
> ```javascript
> //别忘了import vueRouter组件！
> import VueRouter from 'vue-router'
> //导入对应组件
> import HomeContainer from '../../components/tabbar/HomeContainer.vue'
> import MemberContainer from '../../components/tabbar/MemberContainer.vue'
> import ShopcarContainer from '../../components/tabbar/ShopcarContainer.vue'
> import SearchContainer from '../../components/tabbar/SearchContainer.vue'
> 
> var router = new VueRouter({
> routes:[
>  {path:'/',redirect:'/home'},
>  {path:'/home',component:HomeContainer},
>  {path:'/member',component:MemberContainer},
>  {path:'/shopcar',component:ShopcarContainer},
>  {path:'/search',component:SearchContainer}
> ]
> })
> 
> export default router
> 
> ```
>
>  

## nodeJS中处理时间

> ```shell
> cnpm i moment -S
> ```
>
> ```javascript
> //导入
> import moment from 'moment'
> 
> //使用
> Vue.filter('dataFor',function(data,pattern='YYYY-MM-DD hh:mm:ss'){
>     return moment(data).format(pattern);
> })
> ```
>
> 