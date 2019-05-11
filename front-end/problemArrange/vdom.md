## vdom

> 概念
>
> > + virtual dom 虚拟dom
> > + 用js模拟dom结构
> > + dom变化的对比，放在js层来做
> > + 提高重绘性能
>
> 原因
>
> > + dom操作时'昂贵'的,js运行效率高
> > + 尽量减少dom操作
> > + 项目越复杂，影响越严重
> > + vdom可以解决这个问题
>
> 基本使用
>
> > ```html
> >  <!--引入包-->
> > <script src="https://cdn.bootcss.com/snabbdom/0.7.0/snabbdom.js"></script>
> >     <script src="https://cdn.bootcss.com/snabbdom/0.7.0/snabbdom-class.js"></script>
> >     <script src="https://cdn.bootcss.com/snabbdom/0.7.0/snabbdom-props.js"></script>
> >     <script src="https://cdn.bootcss.com/snabbdom/0.7.0/snabbdom-style.js"></script>
> >     <script src="https://cdn.bootcss.com/snabbdom/0.7.0/snabbdom-eventlisteners.js"></script>
> >     <script src="https://cdn.bootcss.com/snabbdom/0.7.0/h.js"></script>
> >  <!--重要使用方法-->
> > <script>
> >  function render(data) {
> >             var newVnode = h('table', {}, data.map(function (item) {
> >                 var tds = []
> >                 var i
> >                 for (i in item) {
> >                     if (item.hasOwnProperty(i)) {
> >                         tds.push(h('td', {}, item[i] + ''))
> >                     }
> >                 }
> >                 return h('tr', {}, tds)
> >             }))
> > 
> >             if (vnode) {
> >                 // re-render
> >                 patch(vnode, newVnode)
> >             } else {
> >                 // 初次渲染
> >                 patch(container, newVnode)
> >             }
> >            // 存储当前的 vnode 结果
> >             vnode = newVnode
> >         }
> >         // 初次渲染
> >         render(data)
> >         var btnChange = document.getElementById('btn-change')
> >         btnChange.addEventListener('click', function () {
> >             data[1].age = 30
> >             data[2].address = '深圳'
> >             // re-render
> >             render(data)
> >         })
> > </script>
> > ```
> >
> > > 两个图来理解vdom
> > >
> > >  ![](C:\Users\Administrator\Desktop\front-end\problemArrange\images\01.jpg)
> > >
> > >  ![](C:\Users\Administrator\Desktop\front-end\problemArrange\images\02.jpg)
> > >
> > >  
> >
> > 重做demo
> >
> > > 使用data生成vnode
> > >
> > > 第一次渲染，将vnode渲染到#contanier并将vnode缓存下来
> > >
> > > 修改数据后，用新datas生成newVnode，将vnode和newVnode对比 
>
> ### **核心API **
>
> > + h(‘<标签名>’, {…属性…}, […子元素…])
> > + h(‘<标签名>’, {…属性…}, ‘….’)
> > + patch(container, vnode) 
> > + patch(vnode, newVnode)  
>
>  

## diff算法

> 为何使用
>
> > DOM操作是'昂贵'的，因此尽量减少dom操作
> >
> > 找出本次dom必须更新的节点来更新，其他的不更新
> >
> > ’找出‘的过程就需要diff算法  
>
> code
>
> ```javascript
> //creatElement
> function creatElement(vnode){
>   var tag = vnode.tag
>   var attrs = vnode.attrs||{}
>   var childrenNode = vnode.children || []
>   var ele = document.createElement(tag)
>   var attrName
>   for(attrName in attrs){
>     if(attrs.hasOwnProperty(attrName)){
>       ele.setAttribute(attrName,attrs[attrName])
>     }
>   }
>   childrenNode.forEach(item=>{
>     //递归添加
>     ele.appendChild(creatElement(childredNode))
>   })
>   return ele
> }
> ```
>
> ```javascript
> function updateElement(vnode,newVnode){
>   var children = vnode.children || []
>   var newChildren = newVnode.children || []
>   children.forEach((item,index)=>{
>     if(item.tag === newChildren[index].tag){
>       updateElement(item,newChildren[index])
>     }else {
>       replaceElement(item,newChildren[index])
>     }
>   })
> }
> function replaceNode(vnode, newVnode) {
>   var elem = vnode.elem  // 真实的 DOM 节点
>   var newElem = createElement(newVnode)
> 
>   // 全部替换掉,类似上边的creatElement
> }
> ```
>
> 

