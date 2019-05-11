## javaScript dom和bom操作...

## 事件三步

> 1. 获取事件源
> 2. 绑定事件
> 3. 书写事件驱动程序

## 一些事件

> + onclick
> + onload
> + ondbclick
> + onmousemove
> + onmouseenter
> + onmouseout
> + onmouseleave
> + onfocus
> + onblur
> + oninput
> + 鼠标按下onmousedown   
> + 鼠标弹起:onmouseup

## 节点操作

> 1. nodeName : 节点的名称
> 2.  nodeValue ：节点的值
> 3. nodeType ：节点的类型
>
> >   　　1. 元素节点的 nodeName 与标签名相同
> >   　　2. 属性节点的 nodeName 是属性的名称
> >   　　3. 文本节点的 nodeName 永远是 #text
> >   　　4. 文档节点的 nodeName 永远是 #document
> >
> > 1. 元素节点的 nodeValue 是 undefined 或 null
> >   2. 文本节点的 nodeValue 是文本自身
> >   3. 属性节点的 nodeValue 是属性的值
> >
> > 元素类型 节点类型
> > 　　元素 　　　　1
> > 　　属性　　　　 2
> > 　　文本　　　　 3
> > 　　注释　　　　 8
> > 　　文档 　　　　9
>
> 获取元素
>
> > ```javascript
> > //查
> > document.getElementById
> > document.getElementsByClassName
> > document.getElementsByTagName
> > //通过name属性来获取元素
> > document.getElementsByName
> > document.querySelector()
> > document.querySelectorAll()
> > ```
>
> ### 增删改查
>
> > ```javascript
> > //创建
> > //创建一个dom片段，不会引起页面回流
> > createDocumentFragment()
> > createElement()
> > createTextNode()
> > 
> > //增删改
> > appendChild()
> > removeChild()
> > replaceChild()
> > insertBefore()
> > 
> > //复制节点
> > //深层复制
> > oldNode.cloneNode(true)
> > //浅复制
> > oldNode.cloneNode(false)
> > ```
>
> 节点访问关系
>
> > ```javascript
> > nextElementSibling
> > previousElementSibling
> > firstElementSibling
> > lastElementSibling
> > 
> > //所有子节点
> > childNodes
> > 1    元素节点
> > 2    属性节点
> > 3    文本节点
> > 
> > parentNode 父节点
> > children   获取元素
> > 
> > ```
>
> innerText和textContent(选择题目)
>
> > 老版本火狐不支持innerText,支持textContent
>
> innerHtml和value区别
>
> > innerHTML是指标签内的html，value是form控件当前的值
> >
> > innerHtml是<div>标签内的文本，输入输出到该DOM内部纯HTML代码（获得td、div等html元素时，他们没有value或是text属性，只能用innerHtml）;value是表单元素特有的属性，输入输出的是字符串。
>
> > document.write();不常用，因为容易覆盖原来的页面。
> > innerHTML;用的比较多。绑定属性和内容比较方便。(节点套节点)
> > document.createElement;也是比较多的，指定数量的时候一般用它。

## 属性操作

> getAttribute
>
> setAttrbute
>
> removeAttribute

## bom

> window是bom的顶级对象,通常情况可以省略
>
> + close
> + onload
> + alert confirm
>
> + open
>
> > 新窗口 = window.open(地址,是否开新窗口,新窗口的参数)
> >
> > code
> >
> > > ```javascript
> > > var json = {"name":"helloworld","fullscreen":"no","location":"no","width":"100px","height":"100px","top":"100px","left":"100px"};
> > > // var newWin = window.open("demo.html","_self",json);
> > > var newWin = window.open("demo.html","_blank",json);
> > >  newWin.moveTo(500,500);
> > > ```
>
> + location 
>
> > - ​     **console.log(location.href    )  **  
> > - ​     console.log(location.hash    )    //    返回url中#后面的内容，包含#
> > - ​     console.log(location.host    )    // 主机名，包括端口
> > - ​     console.log(location.hostname)    // 主机名
> > - ​     console.log(location.pathname)    // url中的路径部分
> > - ​     console.log(location.protocol)    // 协议 一般是http、https
> > - ​     console.log(location.search)     // 查询字符串
>
> + navigator
>
> > 窗口
> >
> > console.log(navigator.userAgent);
> > console.log(navigator.platform);
>
> + history
>
> > 历史记录
> >
> > ```javascript
> >  history.go(-1);
> >   history.back();
> > ```
>
> setInterval ,setTimeout(后边整理)

## 内置对象知识

> url编码和解码
>
> > encodeURIComponent() 函数把字符串作为uri组件进行编码
> >
> > decodeURIComponent() 函数把字符串作为uri组件进行解码
>
> 特殊方法
>
> > trim()  去除字符串前后的空格
> >
> > replace()  替换  
> >
> > ```javascript 
> > str.replace(/aaa/gi,'bbb')
> > /g 全部替换   /i 不区分大小写
> > ```
> >
> > split 字符串变成数组
>
> addEventListenner
>
> > addEventListenner 后者的事件不会覆盖前者  onclick会覆盖
> >
> > .onclick
> >
> > .addEventListenner
> >
> > .detachEvent(ie678)



