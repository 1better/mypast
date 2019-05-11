## javaScript texiao...

## offset家族

> 组成
>
> > + offsetWidth
> > + offsetHeight
> > + offsetLeft
> > + offsetTop
> > + offsetParent
>
> offsetWidth和...height
>
> > offsetHeight和offsetWidth: 可以检测盒子的宽高。
> > 包括宽高本身，padding，border。不包括margin
>
> offsetLeft和...Top
>
> > 返回上级（带有定位s）的位置
> > 没有定位以body为准
> > 从父亲padding开始算，border不算
> >
> > 父盒子有定位情况下
> > offsetLeft + 'px'  = style.left
>
> offsetParent
>
> > 父元素无定位，为body
> > 有定位，为最近的父级元素
>
> 匀速运动和缓速运动的原生js封装（后边会有）

## Scroll家族

> 组成
>
> > + scrollWidth
> > + scrollHeight
> > + scrollTop
> > + scrollLeft
>
> scrollWidth和...Height（不包括border）
>
> > 检测盒子宽高
> > 盒子内容的宽高（内容超出，显示内容的高度）
>
> ScrollTop 和 ScrollLeft
>
> > 被遮挡的头部和左边部分
> > 被卷去的头部和左边部分
> >
> > 兼容性问题
> >
> > > 未声明DTD  document.body.scrollTop(谷歌)
> > >
> > > 已声明DTD  document.document.scrollTop(ie678)
> > >
> > > window.pageYOffset(谷歌/火狐/ei9+)
> >
> > 获取title,body,html,head标签
> >
> > > document.title(body,title,head)
> > >
> > > **document.documentElement**:表示html标签
>
> 判断有没有DTD
>
> > document.compatMode === 'BackCompat'
> >
> > BackCompat 已经声明
> >
> > CSS1Compat 未声明

## 小知识

> onscroll事件
>
> > ```javascript
> > window.onscroll = function (){
> >     
> > }
> > //只要页面滚动，都会触发这个事件
> > ```
>
> 屏幕跳转
>
> > ```javascript
> > scrollTo(x,y)
> > //x,y都是必须的
> > ```
>
> 事件对象
>
> > event  (带参，任意参数)
> > window.event(ie 678)

## event重要内容

> + timeStamp       返回事件生成的日期和时间
> + bubbles            判断事件是否为冒泡事件
> + button              事件触发时，哪个按钮被点击
> + pageX              光标相对该网页的水平位置
> + pageY              垂直位置
> + screenX           相对于该屏幕的水平
> + screenY           垂直
> + target               该事件被传送到的对象
> + type                 事件类型
> + clientX             相对于该网页的水平位置(当前可见区域)
> + clientY             垂直
>
> > 在页面的位置 =  看得见+看不见
> >
> > pageY =  event.clientY + seroll().Top（封装的被卷去的头部）

## client家族

> 组成
>
> > + clientWidth
> > + clientHeight
> > + clientX
> > + clientY
> > + clientTop
> > + clientLeft
>
> clientWidth和..Height
>
> > clientWidth = width + padding
> >
> > offsetWidth = width + padding +border
> >
> > scrollWidth = 内容宽度
>
> clientTop和...Left
>
> > offsetTop 距离父元素定位的距离
> >
> > scrollTop  卷去的头部
> >
> > clientTop     元素上边框的厚度，当没有指定边框厚底时，一般为0
>
> onresize事件
>
> > 只要浏览器的大小改变就会触发

## 事件总结

> window.onscroll	屏幕滚动
>
> window.onresize	浏览器大小变化
>
> window.onload	页面加载完毕
>
> div.onmousemove	鼠标在盒子移动
>
> onmouseup/onmousedown = onclick
>
> **window.screnn.width**	获取屏幕高度

## 冒泡

> w3c          
>
> ```javascript
> event.stopPropagation()
> ```
>
> ie10以下
>
> ```javascript
> event.cancelBubble = true
> ```
>
> addEventListener
>
> > 第三个参数可有可无       默认false（支持），true支持捕获

## 获取任意类型的CSS的样式的属性值

>   **兼容方法获取元素样式**
>
>   > ```javascript
>   >  **function getStyle(ele,attr){
>   >             if(window.getComputedStyle){
>   >                 return window.getComputedStyle(ele,null)[attr];
>   >             }
>   >             return ele.currentStyle[attr];
>   >         }**
>   > //可以获取行内式和内嵌式
>   > ```
>   >
>   >  

## 正则表达式(基础知识)

> 后边整理