## MVVM

## 从jquery到框架

> 数据和视图的分离，解耦（开放封闭原则)
>
> 以数据驱动视图，只关心数据变化，dom操作被封装

## MVVM

> mvc
>
> > + m - Model  数据
> > + V - View    视图，界面
> > + C - Controller  控制器
>
> #### mvvm
>
> > Model - ViewModel -View  模板，数据   视图模板    连接model和view （各自的功能）
> >
> > 其中的ViewModel是一种创新
> >
> > 真正结合前端场景应用的创建 

## MVVM框架的三要素

> + 响应式：vue 如何监听到 data 的每个属性变化？
> + 模板引擎：vue 的模板如何被解析，指令如何处理？
> + 渲染：vue 的模板如何被渲染成 html ？以及渲染过程

## 响应式

> 概念
>
> > 修改 data 属性之后，vue 立刻监听到
> > data 属性被代理到 vm 上
>
> 原理
>
> > Object.defineProperty   get和set监听
> >
> > ```javascript
> > var vm = {}
> > var data = {
> >   name:'zs',
> >   age: 18
> > }
> > for(var i in data){
> >   (function(i)
> >   {
> >     Object.defineProperty(vm,i,{
> >       get(){
> >         console.log('get')
> >         return data[i]
> >       },
> >       setInterval(value){
> >         console.log('set',value)
> >         return data[i]
> >       }
> >     })
> >   }
> >   )(i)
> > }
> > ```
> >
> > 

##  vue 中如何解析模板

> 模板
>
> > + 本质：字符串
> > + 有逻辑，如 v-if v-for 等
> > + 与 html 格式很像，但有很大区别
> > + 最终还要转换为 html 来显示
>
> 模板最终必须转换成 JS 代码，因为：
>
> > + 有逻辑（v-if v-for），必须用 JS 才能实现（图灵完备）
> > + 转换为 html 渲染页面，必须用 JS 才能实现
> > + 因此，模板最重要转换成一个 JS 函数（render 函数)
>
> ### render函数
>
> > 
> >
> >  ```javascript
> > function render(){
> >   with(this){
> >     return _c(
> >       'div',
> >       {
> >         attrs: {id:'app'}
> >       },
> >       [
> >         _c('p',[_v(_s(price))])
> >       ]
> >     )
> >   }
> > }
> > /* 
> >   <div id ='app'>
> >     <p>{{price}}<</p>
> >   </div>
> > */
> > var vm = new Vue({
> >   el:'#app',
> >   data:{
> >     price:100
> >   }
> > })
> >  ```
> >
> > 
>
> 模板中所有信息都包含在了 render 函数中
>
> > + this 即 vm
> > + price 即 this.price 即 vm.price，即 data 中的 price
> > + c 即 this._c 即 vm._c
>
> render和vdom的关系
>
> > vm._c 其实就相当于 snabbdom中的h函数
> >
> > render函数执行之后，返回的是vnode 
> >
> > ![](C:\Users\Administrator\Desktop\front-end\problemArrange\images\05.jpg)
> >
> > updateComponent 中实现了 vdom 的 patch
> > 页面首次渲染执行 updateComponent
> > data 中每次修改属性，执行 updateComponent 

## Vue的整体流程（多看多记）

> 1. 解析模板成 render 函数
>
>    ![](C:\Users\Administrator\Desktop\front-end\problemArrange\images\06.jpg)
>
>    ![](C:\Users\Administrator\Desktop\front-end\problemArrange\images\07.jpg)
>
>    > + with的用法
>    > + 模板中的所有信息都被render函数渲染
>    > + 模板用到的data中的属性，都变成了js变量
>    > + v-model v-for v-on 都变成了js逻辑
>    > + render函数返回vnode
>
> 2. 响应式开始监听
>
>    > Object.defineProperty
>    >
>    > 将 data 的属性代理到 vm 上
>
> 3. 首次渲染，显示页面，且绑定依赖
>
>    > 1. 初次渲染 执行updateComponert,执行vm._render()
>    > 2. 执行render函数,会访问到vm.list vm.title
>    > 3. 会被响应式的 get 方法监听到
>    > 4. 执行 updateComponent ，会走到 vdom 的 patch 方法
>    > 5. patch 将 vnode 渲染成 DOM ，初次渲染完成
>    >
>    > **小知识**
>    >
>    > > 为何要监听get，不监听set
>    > >
>    > > data中有很多属性，有的被用到，有的可能不被用到
>    > >
>    > > 被用到的会走到get，不用的不走get
>    > >
>    > > 为走get的时候，走set也无需关心
>    > >
>    > > 可以避免不必要的的重复渲染
>
> 4. data 属性变化，触发 rerender
>
>    > 1. 修改属性，被响应式的 set 监听到
>    > 2. set 中执行 updateComponent
>    > 3. updateComponent 重新执行 vm._render()
>    > 4. 生成的 vnode 和 prevVnode ，通过 patch 进行对比
>    > 5. 渲染到 html 中
>    >
>    > 

