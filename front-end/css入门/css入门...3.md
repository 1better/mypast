## css入门...3

## 文档流

> 元素自上而下，自左而右，块元素独占一行，行内元素在一行显示，碰到父集元素的边框换行

## 浮动

> folat:left | right
> 特点
> 元素浮动之后不占据原来位置(脱标)
> 浮动的盒子在一行显示
> 行内元素浮动之后转换为行内块元素。（不推荐使用，最好用display：inline-block）
>
> 浮动的作用
>
> > 文本绕图
> > 制作导航
> > 网页布局
>
> 清除浮动
>
> > 当父盒子没有定义高度，嵌套的盒子浮动之后，下边的元素发生位置错误
> > 清除浮动不是不用浮动，清除浮动产生的不利影响
>
> 清除浮动的方法
>
> > clear: left | right | both
> > 工作用的最多的是clear: both
> > 额外标签法(一般用不上)
> > 在最后一个浮动元素后添加标签
>
> > overflow:hidden; bfc
> > 有内容出了盒子，不能使用这个方法
>
> > 伪元素清除浮动（减少渲染负担） （推荐使用）
> > .clearfix:after{
> >     	     content: ".";
> >     	     display: block;
> >     	     height: 0;
> >     	     line-height: 0;
> >     	     visibility: hidden;
> >     	     clear: both;
> >     }
> > /*兼容ie浏览器*/
> >     .clearfix{
> >     		zoom:1;
> >     } 
> >
> > **zoom有啥用也需要看**
>
> > overflow ：visible 默认值，内容不会被修剪
> > hidden  内容会被修剪，并且其余内容不可见
> > scoll   内容会被修剪，但有滚动条显示（一直会有滚动条）
> > auto    如果内容被修剪，浏览器会滚动

## 定位

> position:    absolute
>
> > 特点
> >
> > 元素使用绝对定位之后不占据原来的位置（脱标）
> > 元素使用绝对定位，位置从浏览器出发
> > 嵌套的盒子，父盒子没有使用定位，子盒子绝对定位，是从浏览器出发；父盒子使用定位，子盒子绝对定位，子盒子是从父盒子位置出发
> > 给行内元素使用绝对定位之后，转换为行内块（不推荐）
>
> position:relative
>
> > 特点
> >
> > 使用相对定位，位置从自身出发
> > 占据原来的位置
> > （常用 ）子绝对定位父元素相对定位
> >   行内元素使用相对定位不能转行内块
>
> position:fixed
>
> > 特点
> >
> > 固定定位之后，不占据原来位置（脱标）
> > 位置从浏览器出发（背景定位 fixed类似）
> > 行内元素使用固定定位转换为行内块
>
> 定位的盒子居中显示
>
> > magin: 0 auto 只能让未脱标的盒子居中对齐
> > 可以先左走父元素盒子的一半 50%
> > 再向左走子盒子的一半（用magin-left：负值）
> > **z-index 控制元素的层叠顺序**

## 小知识点

> div可以包含所有的标签
> p标签不能包含div h1等标签
> h1可以包含p div等标签
> 行内元素不推荐包含行内元素

> 规避脱标流
> margin-left:auto 
> 向右冲直到右边结束
> margin:0 auto 居中 左右都冲一半

> 图片和文字垂直居中对齐
> vertical-align 对 inline-block最敏感 
> 默认属性：baseline(基线)
> vertical-align: middle |bottom| top

> css可见性
> overflow:hidden;溢出隐藏
> visibility:hidden; 隐藏元素 隐藏之后占据原来位置
> display:none;     隐藏元素 隐藏之后不占据原来的位置
> display:block;     元素可见

> display： none 和display：block 常配合js使用
> 小应用     锚点和overflow应用 

> **css值内容移除（对seo更友好）**
> 使用text-indent
> .logo a{display: inline-block;
> 	width: 143px;
> 	height: 76px;
> 	text-indent: -2000em;}

> 使用overflow和padding 
> .logo{width: 143px;
>       height: 0;
>       padding-top: 76px;
>       background:red;
> 	overflow: hidden;}

## 精灵图  

> 属性选择器
> input[type=text][id]
> input[type=text][class="pwd"]

## emmet语法

> #id+tab
> 类名+tab
> 生成子类标签
> div>ul>li*9>a[#]{...}+Tab
> .search>.logo>img[src=""]+.ssh>input+Tab
> .search>.logo>img[src=""]+^.ssh>input+Tab
> ^往上走一级
> li[abc$]*3
> <li abc1=""></li>
> <li abc2=""></li>
> <li abc3=""></li>



