## vue3

## 动画

> 基本使用
>
> > ```html
> > <!--
> >   注意要用transition包裹起来
> > -->
> > <transition>
> >       <h3 v-if="flag">这是一个H3</h3>
> > </transition>
> > 
> > <style>
> >     /* v-enter 【这是一个时间点】 是进入之前，元素的起始状态，此时还没有开始进入 */
> >     /* v-leave-to 【这是一个时间点】 是动画离开之后，离开的终止状态，此时，元素 动画已经		结束了 */
> >      .v-enter,
> >     .v-leave-to {
> >       opacity: 0;
> >       transform: translateX(150px);
> >     }
> > 
> >     /* v-enter-active 【入场动画的时间段】 */
> >     /* v-leave-active 【离场动画的时间段】 */
> >     .v-enter-active,
> >     .v-leave-active{
> >       transition: all 0.8s ease;
> >     }
> > </style>
> > ```
>
> 第三方类实现动画
>
> > ```html
> > <!-- 引入包-->
> > <link rel="stylesheet" href="../../lib/animate.css">
> >  
> > <transition>
> >     enter-active-class="bounceIn" 
> >     leave-active-class="bounceOut" 
> >     :duration="{ enter: 200, leave: 400 }">
> >       <h3 v-if="flag" class="animated">这是一个H3</h3>
> > </transition> 
> > <!-- 
> > 	enter-active-class leave-active-class 为进入和离开时的类名
> > （可以在这两个上边加入 animated 也可以在下边操作元素上加上animated）
> > 	animated 不可省略
> > 	duration 为持续时间（注意前边有: 这是一个 属性）
> > -->
> > ```
>
> **钩子函数模拟小球动画**
>
> > ```html
> > <transition
> >    @before-enter="beforeEnter"
> >    @enter="enter"
> >    @after-enter="afterEnter">
> >    <div class="ball" v-show="flag"></div>
> >  </transition>
> > <!-- @开头的为绑定的方法，需要在methods中定义-->
> > ```
> >
> > ```javascript
> > //在操作的app区域中的methods方法添加这几个方法
> > methods: {
> >      // 注意： 动画钩子函数的第一个参数：el，表示 要执行动画的那个DOM元素，是个原生的 JS DOM对象
> >      // 大家可以认为 ， el 是通过 document.getElementById('') 方式获取到的原生JS DOM对象
> >      beforeEnter(el){
> >        // beforeEnter 表示动画入场之前，此时，动画尚未开始，可以 在 beforeEnter 中，设置元素开始动画之前的起始样式
> >        // 设置小球开始动画之前的，起始位置
> >        el.style.transform = "translate(0, 0)"
> >      },
> >      enter(el, done){
> >        // 这句话，没有实际的作用，但是如果不写出不来动画效果；
> >        // 可以认为 el.offsetWidth 会强制动画刷新
> >        el.offsetWidth
> >        // enter 表示动画 开始之后的样式，这里，可以设置小球完成动画之后的，结束状态
> >        el.style.transform = "translate(150px, 450px)"
> >        el.style.transition = 'all 1s ease'
> > 
> >        // 这里的 done， 起始就是 afterEnter 这个函数，也就是说：done 是 afterEnter 函数的引用
> >        done()
> >      },
> >      afterEnter(el){
> >        // 动画完成之后，会调用 afterEnter
> >        // console.log('ok')
> >        this.flag = !this.flag
> >      }
> >     
> >     //注意 虽然没有指定后半场动画，后半场动画仍会执行
> >     //（以opacity=0.5这样验证的）
> > ```
> >
> > 
> >
> > 完整生命周期
> >
> > ```javascript
> > //在 enter 和 leave 中必须使用 done 进行回调,否则，它们将被同步调用，过渡会立即完成
> > v-on:before-enter="beforeEnter"
> > // 与 CSS 结合时使用
> > v-on:enter="enter"
> > v-on:after-enter="afterEnter"
> > v-on:enter-cancelled="enterCancelled"
> > v-on:before-leave="beforeLeave"
> > v-on:leave="leave"
> > v-on:after-leave="afterLeave"
> > // leaveCancelled 只用于 v-show 中
> > v-on:leave-cancelled="leaveCancelled"
> > ```
> >
> > 
>
> 列表动画
>
> > ```html
> > <transition-group appear tag="ul">
> >      <li v-for="(item, i) in list" :key="item.id" @click="del(i)">
> >        {{item.id}} --- {{item.name}}
> >      </li>
> > </transition-group>
> > <!-- 
> > 	需要使用 transitionGroup包裹
> > 	要为 v-for 循环创建的元素设置动画，必须为每一个 元素 设置 :key 属性
> > 	添加 appear 属性，实现页面刚展示出来时候，入场时候的效果
> > 	tag属性是 把标签变为ul(初始为span)
> > 	设定position为absolute后 宽度默认最小值
> > -->
> > 
> > <style>
> >  /* 下面的 .v-move 和 .v-leave-active 配合使用，能够实现列表后续的元素，渐渐地漂上来的效果 */
> >  /* 这是固定写法 */
> >  .v-move {
> >        transition: all 0.6s ease;
> >      }
> >  .v-leave-active{
> >        position: absolute;
> >  }
> > </style>
> > ```
> >
> > 