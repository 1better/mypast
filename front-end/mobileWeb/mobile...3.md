## mobile...3

## 媒体查询

>  写法   @media screen and (max-width:xxxpx) and (min-width:xxxpx)
>
> 简写   @media(max-width:xxx px)
>
> 分类
>
> > > 大于1200px   大屏(width设为1192px 居中)
> > >
> > > 小于1200px大于992px  中屏(width 设为970px，居中)
> > >
> > > 大于768px小于992px    小屏(width 设为750px 居中)
> > >
> > > 小于768px    超小屏  (width设为100%)

## bootstrap解释

> 文档语言申明  en  zh-CN  zh-tw 
>
> > <html lang="zh-CN">
>
> 文档编码申明
>
> > <meta charset="utf-8">
>
> **要求当前网页使用浏览器最高版本的内核来渲染**
>
> >  <meta http-equiv="X-UA-Compatible" content="IE=edge">
>
> 视口的设置：视口的宽度和设备一致，默认的缩放比例和PC端一致，用户不能自行缩放
>
> > <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=0">

## 上述3个meta标签*必须*放在最前面，任何其他内容都*必须*跟随其后！优先加载和浏览器解释 

> 在 IE 9 以下引入
>
> > [if lt IE 9]

## normalize和reset区别

> 共同点：都是重置样式库，增强浏览器的表现一致性
>
> 不同点：
>
> 举个例子：ul
> reset.css   list-style:none ---因为需求
> normalize.css 不会重置ul样式 ---本身已经在每个浏览器表现一致的元素
>
> 一句话：都是增强浏览器的表现一致性但是normalize不会重置已经一致的元素

## bootstrap基本样式

> 响应式布局容器
>
> > class="container"
>
> 流式布局容器
>
> > class="container-fluid"
>
> **栅格系统**
>
> > 其实就是行和列的布局，网格状布局
> >
> > 行：row
> >
> > .container容器默认有15px的左右内间距  .row 填充父容器的15px的左右内间距   margin-left,margin-right -15px拉伸
> >
> > 列：col-*-*  *不确定（参数）
> >
> > > col：列样式
> > >
> > > > 第一个*：屏幕的大小
> > > > 大屏设备     lg   大屏设备以上生效包含本身
> > > > 中屏设备     md   中屏设备以上生效包含本身
> > > > 小屏设备     sm   小屏设备以上生效包含本身
> > > > 超小屏设备   xs   超小屏设备以上生效包含本身
> > > > 第二个：每一行的分等份，默认分成12等份 ，数字代表的是占多少份
> >
> > 扩展功能
> >
> > > 栅格嵌套
> > >
> > > >  <div class="col-xs-4">
> > > >             <div class="row">
> > > >                 <div class="col-xs-6"></div>
> > > >                 <div class="col-xs-6"></div>
> > > >             </div>
> > > >  </div> 
> > >
> > > 列的偏移
> > >
> > > > <div class="col-xs-4">
> > > >             <div class="row">
> > > >                 <div class="col-xs-3"></div>
> > > >                 <div class="col-xs-6 col-xs-offset-1"></div>
> > > >             </div>
> > > >         </div>
> > >
> > > 列的排序         push 往后推        pull 往前拉
> > >
> > > > <div class="col-xs-4">
> > > >             <div class="row">
> > > >                 <div class="col-xs-3 col-xs-push-9"></div>
> > > >                 <div class="col-xs-9 col-xs-pull-3"></div>
> > > >             </div>
> > > >    </div>

## bootstrap部分工具

> nav导航
>
> > 类名：collapsed  样式
> > 属性：
> > data-toggle="collapse"  申明是什么组件=折叠组件(下拉样式)
> > data-target="#bs-example-navbar-collapse-1" 控制的目标元素=选择器
> > 其他：
> >
> > aria-expanded="false"  aria-* 代表提供给屏幕阅读器使用的（盲人阅读器）
> > class="sr-only" screen read only  代表提供给屏幕阅读器使用的（盲人阅读器）
> >
> > 代码模板设定为(webstorm中)bs_nav
>
> 轮播图
>
> > 代码模板设定为bs_banner
>
> 点击切换
>
> > 代码模板为bs_toggle

