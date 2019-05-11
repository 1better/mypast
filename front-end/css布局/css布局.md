## 圣杯布局

> 主要方式  float，margin负值  两边padding以及relative
>
> 代码
>
> > ```
> > <style>
> >     /*<!--圣杯布局-->*/
> >     * {
> >         margin: 0;
> >         padding: 0;
> >     }
> >     .box {
> >         padding: 0 200px;
> >         /*height: 200px;*/
> >     }
> >     .left,.right,.middle {
> >         float: left;
> >         height: 100px;
> >         background-color: red;
> >     }
> >     .left {
> >         width: 200px;
> >         position: relative;
> >         /*margin-right: -200px;*/
> >         left: -200px;
> >         margin-left: -100%;
> >     }
> >     .right {
> >         width: 200px;
> >         /*position: relative;*/
> >         margin-right: -200px;
> >         /*margin-left: 100%;*/
> > 
> >     }
> >     .middle{
> >         width: 100%;
> >         background-color: #00cc99;
> >     }
> > </style>
> > ```

```
<div class="box">
    <div class="middle">双飞翼双飞翼双飞翼</div>
    <div class="left">leftleftleftleftleft</div>
    <div class="right">rightrightrightrightright</div>
</div>
```

## 双飞翼布局

> 没有padding，用了4个div来做
>
> 代码
>
> > ```
> > <style>
> >     <!--双飞翼布局-->
> >     * {
> >         margin: 0;
> >         padding: 0;
> >     }
> >     div {
> >         height: 200px;
> >     }
> >     .middle {
> >         float: left;
> >         width: 100%;
> >     }
> >     .middle .main {
> >         margin: 0 200px;
> >         height: 100%;
> >         background-color: #00cc99;
> >     }
> >     .left {
> >         float: left;
> >         width: 200px;
> >         background-color: red;
> >         margin-left: -100%;
> >     }
> >     .right {
> >         float: left;
> >         width: 200px;
> >         background-color: red;
> >         margin-left: -200px;
> >     }
> > </style>
> > ```

```
<div class="middle">
    <div class="main">
        双飞翼双飞翼双飞翼
    </div>
</div>
<div class="left">leftfanifainfaif</div>
<div class="right">afajwfiahgajf】</div>
```

## Flex弹性布局

> order flex-basis  flex-grow用法
>
> 代码
>
> > ```
> > /*flex布局*/
> > * {
> >     margin: 0;
> >     padding: 0;
> > }
> > .box {
> >     width: 100%;
> >     display: flex;
> >     height: 300px;
> > }
> > .main {
> >     flex-grow:1;
> >     background-color: blue;
> > }
> > .left {
> >     order: -1;
> >     flex-basis: 200px;
> >     background-color: green;
> > }
> > .right{
> >     flex-basis: 300px;
> >     background-color: red;
> > }
> > ```

```
<div class="box">
    <div class="main"></div>
    <div class="left"></div>
    <div class="right"></div>
</div>
```

## 两栏自适应布局

> 利用bfc特性来实现布局
>
> 即一边用浮动，一边overflow:hidden