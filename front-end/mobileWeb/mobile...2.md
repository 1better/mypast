## moblie...2

## 触摸事件touch  

>  touch是移动端的触摸事件 而且是一组事件
>
> > + touchstart   当手指触摸屏幕的时候触发
> > + touchmove    当手指在屏幕来回的滑动时候触发
> > + touchend     当手指离开屏幕的时候触发
> > + touchcancel  当被迫终止滑动的时候触发（来电，弹消息）
>
> 利用touch相关事件实现移动端常见滑动效果和移动端常见的手势事件
>
> ### 使用touch
>
> > 绑定事件：box.addEventListener('touchstart',function () { });
> >
> > 事件对象：
> >
> > > TouchList------触摸点   (一个手指触摸就是一个触发点，和屏幕的接触点的个数）的集合
> > >
> > > changedTouches    改变后的触摸点集合
> > >
> > > targetTouches     当前元素的触发点集合
> > >
> > > touches           页面上所有触发点集合
> >
> > 触摸点集合在每个事件触发的时候会不会去记录触摸
> >
> > > changedTouches 每个事件都会记录
> > >
> > > targetTouches，touches 在离开屏幕的时候无法记录触摸点
>
> 滑动实现原理
>
> > 1. 就是让触摸的元素随着手指的滑动做位置的改变
> > 2. 位置的改变：需要当前手指的坐标
> > 3. 在每一个触摸点中会记录当前触摸点的坐标 e.touches[0] 第一个触摸点
> > 4. clientX clientY      基于浏览器窗口（视口）
> > 5. pageX   pageY        基于页面（视口）
> > 6. screenX screenY      基于屏幕

## 手势事件源代码实现

> swipe swipeLeft  swipeRight swipeUp swipeDown
>
> 左滑和右滑手势怎么实现
>
> code
>
> > ```javascript
> > var bindSwipeEvent = function (dom,leftCallback,rightCallback) {
> >     var start = 0,distance = 0,isMove = false;
> >     dom.addEventListener('touchstart',function (e) {
> >         start = e.touches[0].clientX;
> >     });
> >     dom.addEventListener('touchmove',function (e) {
> >         isMove = true;
> >         distance = e.touches[0].clientX - start;
> >     });
> >     dom.addEventListener('touchend',function (e) {
> >         if(isMove && Math.abs(distance) > 50){
> >             if(distance > 0){
> >                 rightCallback && rightCallback.call(this,e);
> >             }else{
> >                 leftCallback && leftCallback.call(this,e);
> >             }
> >         }
> >         /*重置参数*/
> >         isMove = false;
> >         start = 0;
> >         distance = 0;
> >     })
> > }
> > bindSwipeEvent(div,function () {
> >     console.log('左滑');
> > },function () {
> >     console.log('右滑');
> > })
> > ```

## tap事件

> tap事件  轻击 轻触  （响应速度快）
>
> 移动端也有click事件 （在移动为了区分是滑动还是点击，click点击延时300ms）
>
> 影响用户体验 响应太慢了。
>
> 解决方案
>
> > 使用tap事件（不是移动端原生事件，通过touch相关事件衍生过来） （zepto.js tap事件）了解其原理
> >
> > > code
> > >
> > > ```javascript
> > > var bindSwipeEvent = function (dom,callback) {
> > >     var start = 0,time = 0,isMove = false;
> > >     dom.addEventListener('touchstart',function (e) {
> > >         start = Date.now();
> > >     });
> > >     dom.addEventListener('touchmove',function (e) {
> > >         isMove = true;
> > >     });
> > >     dom.addEventListener('touchend',function (e) {
> > >         time = Date.now() - start;
> > >         if(!isMove && time < 150){
> > >            callback && callback.call(this,e);
> > >         }
> > >         /*重置参数*/
> > >         isMove = false;
> > >         start = 0;
> > >         time = 0;
> > >     })
> > > }
> > > ```
> >
> > 使用一个叫：fastclick.js 提供移动端click响应速度的
> >
> > > code
> > >
> > > ```javascript
> > > <script src="../js/fastclick.min.js"></script>
> > > <script>
> > >  /*当页面的dom元素加载完成*/
> > >  document.addEventListener('DOMContentLoaded', function() {
> > >      /*初始化方法*/
> > >      FastClick.attach(document.body);
> > >  }, false);
> > >  /*正常使用click事件就可以了*/
> > > </script>
> > > ```
> > >
> > > 

## 两栏自适应

> 让这个元素绝对绝缘 
> 不让其他浮动元素影响自己
> 不让自己的浮动去影响别的元素
>
> > ### 在css布局中有