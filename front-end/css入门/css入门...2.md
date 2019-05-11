## css入门...2

## 行高单位

> > 单位        文字大小		行高值
> > 20px          20px              20px   
> > 2em           20px   * 2       40px
> > %150          20px  （150%）    30px
> > 2             20px              40px
> > 总结：单位除像素以外，都是行高与文字大小乘积
>
> > 单位       父集文字大小   子集大小  行高
> > 20px          20px         30px     20px
> > 2em           20px         30px     40px
> > %150         20px        30px      30px   2             20px         30px     60px
> > 总结：不带单位和子集相乘，带单位和父集相乘
> > 写像素就是规定的像素
> > 推荐行高使用像素为单位

## 盒子模型

> border    边框
> border-top-style   solid | dotted |dashed
> 实线 |点线 | 虚线   边框线型
> border-top-color    边框颜色
> border-top-width    边框粗细
> border-top ： 简写  顺序无关 线型不可少
>
> 边框合并         border-collapse:collapse;
>
> 取消边框     border:0 none; 兼容性更好   outline-style: none; 

## label标签

> <label for="one">用户名：&nbsp;</label>
> <input type="text" class="one" id="one">
> 光标焦点也在那

## 内边距

> padding-left|right|bottom|top
> padding: 20px  上右下左都是20px
> padding: 20px 30px 上下20 左右30
> padding:20px 30 40   上20 左右30 下40
> padding: 20 30 40 50   上20 右30 下40 左50
>
> 内边距会撑大盒子
> 影响盒子宽度的因素
> 内边距影响盒子的宽度
> 边框也影响盒子的宽度
> 盒子的宽度=定义的宽度+边框宽度+左右内边距
> 让里边盒子居中
> .box{width: 300px;
>    height: 150px;
>   background-color: pink;
>      padding: 75px 100px;}
> .box2{width:300px;
>     height: 150px;
>     background-color: red;}
>
> 继承的盒子一般不会被撑大
> 包含（嵌套）的盒子如果子盒子没有定义宽度，给子盒子设置左右内边距，一般不会撑大盒子（水平方向），给子盒子上下内边距，会撑大盒子
> margin:0 auto 盒子居中    
>
> **在a里边定义行高 不然会出来一小块**

## 外边距

> margin-left| right| top| bottom
> margin连写 margin 连写顺序和padding一样
>
> 垂直方向外边距合并
> 两个盒子垂直一个设置上外边距，一个设置下外边距，取的设置较大的值。
>
> ### 塌陷问题要注意
>
> 嵌套的盒子外边距塌陷
> 解决方法:给父盒子设置边框（不推荐）给父盒子overflow:hidden;   bfc   格式化上下文

## 行内元素

> 左右内外边距可以被定义，上下会被忽略

## Fireworkscs6基本使用

> 新建文件   ctrl+n
> 打开文件  ctrl+o 
> 调出和隐藏标尺 ctrl+r
> 清除辅助线：  视图---辅助线----清除辅助线
> 放大镜  z   放大镜状态下alt+鼠标左键 缩小
> 抓手   快捷键   空格
> 测量距离    ★先拉出2根辅助线
>  		 ★切换到指针工具
>           	★将光标放到2根辅助线之间，按住shift键

