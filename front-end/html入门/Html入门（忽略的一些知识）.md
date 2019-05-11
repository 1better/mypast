## Html入门...1（忽略的一些知识）

## Html结构标准

> <!doctype html>  //声明文档类型
> <html>           //根标签
>
> <head>           //头标签
>    <title>相信自己</title>   //标题标签
> </head> 
> <body>            //主题标签
> 我能学会！
> </body>
> </html>

## 单标签

> （也叫空元素） 
>
> + br   换行
> + hr    水平线
> + img   图片标签
> + input   文本
> + link   
> + meta 

## 超链接优化（head下面）

> //<base target="_blank">

## 特殊字符

>  空格 &nbsp ; <&lt ;> &gt ; 人民币 &yen ;

## 列表

> ul   无序列表
>
> ol   有序列表
>
> dl    dt  dd   自定义列表

## 音乐标签

> embed (为单标签)       src     hidden

## 滚动标签

> marquee    /marquee           behavior  direction   height  (已被废弃)

## meta用法*

> ```  html 
> <meta name="keywords" content="相信自己"> 关键字
> <meta name="description" content="你要相信自己能学好">  网页描述
> <meta http-equiv="refresh" content="5,http://www.mi.com"> 重定向
> ```

## link添加小图标

> ```
> <link rel="icon" type="text/css" href="../示例图片/fire.ico">
> ```

## 表格行与列

> //<table border="1" width="500" height="300" cellspacing="0" cellpadding="10" align="center"> 
>
> > border="1" 边框
> > width="500" 宽度 height="300" 长度
> > cellspacing="2" 单元格与单元格距离
> > cellpadding  内容距边框的距离
> > align="left|right|center" 
> > 如果直接给表格用align="center" 表格居中  如果给tr或者td使用,tr或td 内容居中
> > bgcolor="yellow" 背景颜色
>
> 标准结构
>
> > thead tbody tfoot
>
> 单元格合并
>
> > <caption>表头</caption>
> > 同一列合并 colspan
> > 同一行合并 rowspan       row是行行行！！！
>
> 表格标题
>
> > <th></th> 表格标题（和td用法一样）
> >
> > bordercolor="yellow" 边框颜色
> >
> > <td align="bottom">张三</td>
> >
> > >  内容垂直对齐 top|middle|bottom
>
> 细线表格
>
> > 给个背景色 设定cellspacing为1，然后再给tr或者td背景色 就出现细线表格
>

## 表单*

> 作用是收集信息
>
> 组成  提示信息，表单控件，表单域
>
> > /<form action="" method="get">
> > 属性 action 处理信息 method 提交方式
> > get通过地址栏提交信息,安全性差
> > post通过文件处理信息,安全性高
> > </form>
>
> 文本输入框
>
> > <input type="text">   
> >
> > 属性
> >
> > > maxlength   限制输入字符长度
> > > readonly     将输入框设为只读（无法编辑）
> > > disable        输入框未激活
> > > name          输入框的名称
> > > value          将输入框的内容传给处理文件
>
> 密码输入框
>
> > <input type="password" name="password">
> >
> > 文本输入框对密码输入框的内容都有效
>
> 单选框
>
> > <input type="radio">
> >
> > <input type="radio" name="gender">男
> > <input type="radio" name="gender">女
> > checked     选中哪个
> > name         值要相同才能实现单选效果 
>
> 下拉列表
>
> > //<select multiple="multiple">
> > 	<option >河北</option>
> > <option selected="selected">北京</option>
> > 	<option >山东</option></select> 
> >
> > multiple     多选
> > selected     选中
> > optgroup label="北京"  添加一个标签（html5之前就有了）
>
> 多选框
>
> > <input type="checkbox"checked="checked">喝酒
>
> 多选文本框
>
> ```
> <textarea>cols="30" rows="10"></textarea>
> ```
>
> > cols字符（1汉字2字符） rows 行数  resize = none禁止拉伸
>
> 文件上传控件
>
> > <input type="file">
>
> 文件提交
>
> > <input type="submit">
>
> 按钮
>
> > <input type="button" value="1">配合js使用
>
> 图片按钮
>
> > <input type="image" src="icando.jpg">可以实现信息提交功能
>
> 重置按钮
>
> > <input type="reset">    信息重置到默认状态
>
> 表单信息分组
>
> > <fieldset>
> > <legend>分组信息</legend>
> > </fieldset>
> >
> > fieldset     对表单信息分组
> > legend      表单信息分组名称
>
> 多个较为简单的控件
>
> > <input type="url">
> > <input type="date">
> > <input type="time">
> > <input type="email">
> > <input type="number" step="5">
> > <input type="range" step="5">

## 标签语义化（注意作用以及目的！）



