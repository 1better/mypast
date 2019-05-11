## jquery

## 入口函数

> ```javascript
> //文档准备好了，再来执行入口函数里面的代码
> $(document).ready(){}
> 
> //上边方式的简写
> $(function(){})
> 
> ```
>
>  

## jquery和原生js的转换

> ```javascript
> //dom转换为jquery对象
> var $btn = $(btn);
> 
> //jquery转换为dom对象
> var btn = $btn[0] //推荐使用
> var btn2 = $btn.get(0)
> ```
>
>  

## jquery选择器

> ```javascript
> //#    id选择器
> //.    class选择器
> //element 标签选择器
> 
> //空格 后代选择器
> //>  子代选择器
> 
> //:eq(index) 选择匹配到的索引号为index的元素（index从0开始）
> $('li:eq(2)') //选择li元素为2的一个元素
> 
> //:odd  选择为奇数 的所有元素
> //:even 选择为偶数 的所有元素
> 
> /*筛选选择器*/
> //find  查找所有后代元素
> $('ul').find('li')
> //children  查找指定元素的直接子元素
> 
> //siblings 查找兄弟元素（不包括自己）
> 
> //parent() 查找父元素（亲的）
> 
> //eq(index) 查找指定元素的第几个
> $('li').eq(2) //查找所有li元素的第二个
> ```
>
>  

## 样式和类操作

> ```javascript
> //设置单个样式
> $(selector).css('width','100px')
> 
> //设置多个样式
> $(se..).css({
>     'color':'red',
>     'font-size':'100px'
> })
> ```
>
> 类操作
>
> ```javascript
> //添加删除
> addClass()
> removeClass()
> //判断
> hasClass()
> //切换
> toggleClass()
> ```
>
>  动画操作
>
> ```javascript
> //显示隐藏
> //time为时间  可以直接写600  也可以'slow'(slow:600ms normal:400 fast:200)
> //fun 为回调函数
> show(time,function(){})
> hide()
> 
> //滑入滑出
> slideDown(speed,callback)
> slideOut(speed,callback)
> 
> //淡入淡出
> //speed  时长
> //callback 回调函数
> fadeIn(speed,callback)
> fadeOut(speed,callback)
> fadeToggle(speed,callback)
> //指定元素不透明度的具体值
> fadeTo(1000,.5)
> 
> //自定义动画
> $().animate({参数},speed,callback)
> 
> //停止动画
> $().stop()
> $().stop(clearQueue,jumpToEnd)
> //默认为false false
> //第一个表示是否清空后续动画 第二个表示是否立即执行完当前动画
> ```
>
>  

## 节点操作

> ```javascript
> var $spanNode = $('<span>我是一个span</span>')
> //添加
> append()
> appendTo() //添加到
> prepend() //第一个子元素前面追加内容
> after()   //被选元素后面作为兄弟元素插入
> before()  //被选元素前面作为兄弟元素插入
> ```
>
> ```javascript
> //html创建元素
> $('').html('<span></span>')
> //获取
> $('').html()
> //清空
> $().empty()
> $().html() //推荐
> $().remove() //把自己也给清空
> 
> //复制元素
> $().clone()
> 
> ```
>
>  

## 属性操作

> ```javascript
> $().attr('title')
> $().removeAttr('title')
> //注意 checked selected 以及 disable要使用prop()方法
> //prop方法通常用来影响dom元素的动态特性，而不改变html属性
> 
> val()//表单方法
> //值和内容
> $().val()
> //设置
> $().val('')
> 
> text()//文本方法 相当于innerText
> ```
>
>  

## 尺寸操作

> ```javascript
> //获取或者设置宽高
> $().height()
> $().height(200)
> //注意是一个数值，而css返回一个200px，是字符串
> 
> ```
>
>  

## 坐标值操作

> ```javascript
> offset() //距离页面最顶端或最左侧
> //获取或者设置元素相对于文档的位置
> //可以设置值，设置后，如果元素没有定位，就设置 为 relative
> 
> position()
> //获取相对于最近的具有定位的父元素的位置
> //只可以获取，不能设置
> 
> scrollTop()
> //获取卷去的头部
> //可以设置偏移
> scrollLeft()
> ```
>
>  

## jquery事件

> ```javascript
> click         单击
> blur         失去焦点
> mouseenter   鼠标进入
> mouseleave   鼠标离开
> dbclick		 双击
> change       改变事件
> focus
> keydown      鼠标按下
> ```
>
> ```javascript
> //绑定事件
> on方式
> $().on( 1,2,3,4)
> //1 事件 可以有多个（空格分开）
> //2 后代元素
> //3 传递的数据
> //4 事件处理函数
> 
> //解绑
> $().off()
> //解绑所有事件
> $().off('click')
> //解绑click事件
> 
> ```
>
>  事件对象
>
> > ```javascript
> > event.data          传递给事件处理程序的额外数据
> > event.currentTarget  等同于this，当前dom对象
> > event.pageX         鼠标相对于文档左部边缘位置
> > event.stopPropagation 阻止冒泡
> > ~.prventDefault       阻止默认行为
> > ~.type               事件类型
> > ~.which				鼠标按键类型
> > ~.keyCode            键盘按键代码
> > ```
> >
> >  

## jquery补充

> 链式编程 
>
> > end()结束当前链的一次过滤操作，并且返回匹配元素之前的状态
>
> 隐式循环
>
> > 会为匹配到的所有元素进行遍历
>
> each方法
>
> > $().each(function(index,element))
> >
> > **element是一个js对象，需要转化为jquery对象**
>
> 多库共存
>
> > $.nonConflict()    //true ，两个都交出来，返回值是新调用方法
>
> 插件机制
>
> > jquery.color.js
> >
> > jquery.lazyload.js(懒加载插件)
> >
> > 制作插件
> >
> > > 全局jquery对象扩展
> > >
> > > > ```javascript
> > > > $.pluginName = function(){
> > > >     
> > > > }
> > > > ```
> > > >
> > > >  
> > >
> > > jquery对象扩展
> > >
> > > > ```javascript
> > > > $.fn.pluginName = function(){
> > > >     
> > > > }
> > > > ```
> > > >
> > > >  
> >
> > jquery UI 插件

