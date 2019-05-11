## 出错点

> **注意**：v-for="item in search(keywords)" item只有一个参数（没有index索引时加括号出错）
>
> v-for 遍历得到的使用插值表达式才会显示信息

## 一些es6用法

> some()  forEach()  findIndex()  filter()
>
> String 中的 includes()   padStart() 
>
> > **在js（方法）里边都有介绍**

## 过滤器

> 概念: 所谓的全局过滤器，就是所有的VM实例都共享的
>
> > 全局过滤器以及私有过滤器
> >
> > 模板 `${yy}-${mm}-${dd}`
>
> 私有过滤器
>
> > **filters**: {  定义私有过滤器    过滤器有两个 条件  【过滤器名称 和 处理函数】
> >  过滤器调用的时候，采用的是就近原则，如果私有过滤器和全局过滤器名称一致了，这时候 优先调用私有过滤器
>
> **注意**
>
> > 全局是filter  私有是filters
>
> 例子：
>
> ```
> <div id="app">
>     <p>{{msg|msgFilter('皮卡丘','123')|msgFilter2()}}</p>
> </div>
> <script>
>     //使用全局过滤器
>     Vue.filter('msgFilter',function(msg,arg1,arg2) {
>         return msg.replace(/一闪/g,arg1+arg2);
>     });
>     Vue.filter('msgFilter2',function(msg) {
>         return msg+'+++++++++'
>     })
>     var vue = new Vue({
>         el:'#app',
>         data:{
>             msg:"一闪一闪亮晶晶，一闪又一闪"
>         },
>         methods:{
> 
>         }
>     })
> ```

## 指令

> >全局指令和私有指令
>
> Vue.directive('color',{
>
> ```javascript
>  bind: function (el) { // 每当指令绑定到元素上的时候，会立即执行这个 bind 函数，只执行一次
>     // 注意： 在每个 函数中，第一个参数，永远是 el ，表示 被绑定了指令的那个元素，这个 el 参数，是一个原生的JS对象
>     // 在元素 刚绑定了指令的时候，还没有 插入到 DOM中去，这时候，调用 focus 方法没有作用
>     //  因为，一个元素，只有插入DOM之后，才能获取焦点
>     // el.focus()
>   },
>   inserted: function (el) {  // inserted 表示元素 插入到DOM中的时候，会执行 inserted 函数【触发1次】
>     el.focus()
>     // 和JS行为有关的操作，最好在 inserted 中去执行，放置 JS行为不生效
>   },
>   updated: function (el) {  // 当VNode更新的时候，会执行 updated， 可能会触发多次
> 
>   }
> ```
> })
>
> 私有
>
> >  'fontsize': function (el, binding) { // 注意：这个 function 等同于 把 代码写到了 bind 和 update 中去
> >           el.style.fontSize = parseInt(binding.value) + 'px'
> >         }
>
> **注意**
>
> > 全局是directive 私有是directives

## 自定义全局按键修饰符

> Vue.config.keyCodes.f2 = 113
>
> > 引用： @keyup.f2='方法'

## 生命周期

> + beforeCreate
>
>   > 这是我们遇到的第一个生命周期函数，表示实例完全被创建出来之前，会执行它
>   >
>   > 在 beforeCreate 生命周期函数执行的时候，data 和 methods 中的 数据都还没有没初始化
>
> + created
>
>   > 在 created 中，data 和 methods 都已经被初始化好了！
>   >
>   > **如果要调用 methods 中的方法，或者操作 data 中的数据，最早，只能在 created 中操作**
>
> + beforeMount
>
>   > 是遇到的第3个生命周期函数，表示 模板已经在内存中编辑完成了，但是尚未把 模板渲染到 页面中
>   >
>   > 在 beforeMount 执行的时候，页面中的元素，还没有被真正替换过来，只是之前写的一些模板字符串
>
> + mounted
>
>   > 这是遇到的第4个生命周期函数，表示，内存中的模板，已经真实的挂载到了页面中，用户已经可以看到渲染好的页面了
>   >
>   > 实例已经被完全创建好了，此时，如果没有其它操作的话，这个实例，就静静的 在内存中，一动不动
>
> + beforeUpdate（此时数据已经更新了才触发beforeUpdate和updated两个方法）
>
>   >  当执行 beforeUpdate 的时候，页面中的显示的数据，还是旧的，此时 data 数据是最新的，页面尚未和 最新的数据保持同步
>
> + updated
>
>   >  updated 事件执行的时候，页面和 data 数据已经保持同步了，都是最新的
>
> + beforeDestory
>
> + destoryed

## JSONP原理解析

> 我的做法
>
> > 用node开启了两个端口的服务器，其中一个渲染app.html用到了script标签的src属性，在上边定义了一个方法
> >
> > ```html
> > <script>
> >         function showInfo(data){
> >             console.log(data);
> >         }
> > </script>
> > <script src='http://127.0.0.1:3000/getscript?callback=showInfo'></script>
> > ```
> >
> > 另一个接受并处理
> >
> > ```javascript
> > server.on('request',function (req,res) {
> >     //这是es6的解构对象方法
> >     const {pathname:url,query} = urlModel.parse(req.url,true);
> >     if(url === '/getscript'){
> >         var data = {
> >             name: 'xjj',
> >             age: 18,
> >             gender: '女孩子'
> >         }
> >         var scriptStr = `${query.callback}(${JSON.stringify(data)})`
> >         // res.end 发送给 客户端， 客户端去把 这个字符串，当作JS代码去解析执行
> >         res.end(scriptStr)
> >     }else {
> >         res.end(404)
> >     }
> > })
> > ```
>
> 总结
>
> > 学了node的一点知识后，才发现jsonp也不是想象中的那么难 ，应该是之前没有接触过服务端的知识造成的吧



