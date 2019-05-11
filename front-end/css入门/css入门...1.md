## css入门...1

## 选择器

> 标签选择器，类选择器，id选择器，通配符选择器，交集选择器，并集选择器，子代选择器，后代选择器
>
> 相邻选择器 属性选择器  伪类选择器  伪元素选择器（在后边h5和c3里边统一整理）~选择器
>
> ### 权重问题
>
> >  !important  >  内联  >  id  >  class  >  标签
> >

## 一些属性

> text-align:left|center|right            内容的水平对齐方式
>
> text-indent:2em;       首行缩进
>
> text-decoration    
>
> > none|underline|line-through     下划线
>
> 文本元素
>
> > font-size :16 px; 文字大小
> >
> > font-weight:700 ; 文字粗细（100-900）
> >
> > font-family:楷体; 文字字体
> >
> > font-style:normal|italic     文字风格
> >
> > line-height    ;  行高
> >
> > 连写
> >
> > > font: italic 700  16px/40px 微软雅黑;
> > >  风格 粗细 大小 行高 字体 （顺序）
> > > 大小和字体必须写
> >
> > 小知识
> >
> > > unicode编码
> > > 方法  在浏览器f12，
> > > 找到console，escape("宋体")回车 
> > > 注意：括号 ""是英文 百分号改成/就是编码

## 书写css方式

> 内嵌式写法
>
> > head元素中 写style
>
> 外链式写法
>
> > 写在head里边
> > <link rel="stylesheet" href="">
>
> 行内式
>
> > 在标签里边写样式
>
> @import方法
>
> ### 注意@improt和link外链式的区别，后面会整理

## 标签分类

> 块元素
>
> > div h1-h6  p ul，li
> >
> > 独占一行,可以设置宽高 ,嵌套（包含）下，子块元素宽度（未定义）和父块元素一致
>
> 行内元素
>
> > span a strong del ins em i 
> >
> > 在一行显示 不能直接定义宽高
>
> 行内块元素(内联元素)
>
> > input img
> >
> > 在一行显示 可以设置宽高
>
> display属性
>
> > + inline
> > + block
> > + inline-block
> > + list-item     和li样式一样
> > + inherit       继承父元素
> > + none       不显示
> > + table      块级表格

## css三大特性

> 层叠性
>
> > 当多个样式作用于同一个标签，样式发生了冲突
> > 总是执行后边代码
>
> 继承性
>
> > 继承性发生的前提是包含（嵌套关系）
> > 文字颜色，文字粗细，文字风格，文字大小，行高，字体可以继承
> > 文字的所有属性都可以继承
> >
> > 特殊情况：
> >    h1不能继承文字大小，2倍来显示
> >    a标签不继承文字颜色
>
> 优先级(权重)

## 链接伪类(部分)

> a:link  a:active  a:visited    a:hover    a:focus   
>
> a:link{属性:值;}  a{属性:值} 效果一样
> a:link{属性:值;}   链接默认状态 
> a:visited{属性:值；} 链接访问之后状态      a:hover{属性:值；} 鼠标放到链接显示的状态
> a:active{属性:值；}  链接激活的状态（长按） :focus{属性:值;} 

## 背景属性

> background-color   背景颜色
> background-image:url("路径")   背景图片
> background-repeat (默认平铺)
> no-repeat|repeat-x|repeat-y    背景平铺
> background-position  
> left|right|center|top|bottom  背景方位
> 方位值只写一个，另外一个默认居中
> 方位值写两个    顺序没有要求
> 写具体值（20px 30px）先水平后垂直
> background-attachment: 背景是否滚动
> scoll|fixed    
> scoll center 基于选择器中间     
> fixed center 基于浏览器中间
>
> 背景属性连写
> background: red url("") no-repeat ...
> 顺序没问题 但是图片（url必须写)不可省
> list_style:none  清除列表项符号
> 滚动 scorll  -24px -1px 向左滚动24 上 1





