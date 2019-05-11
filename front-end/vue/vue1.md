# 出错点

	src文件引入错误，el：#app后边的#app没有加引号就不起作用

## v-指令

> v-cloak   解决插值表达式闪烁问题（页面加载时会显示出{{msg}}）
>
> > 注意：要在style里设定属性[v-cloak]{display:none;}
>
> v-text   没有闪烁问题，但是会覆盖原本内容,插值表达式只是替换括号里边的内容，相当于innerText
>
> v-html  是将内容变成dom元素操作，相当于innerHTML
>
> > ## 跑马灯效果
> >
> > > substring的用法 str.substring(0，1)
> > >
> > > > 截取0和1之间的字母
> > > >
> > > > 如果只有一个值，就截取值以后的数值（包括此值）
>
> v-bind   为值绑定属性
>
> > 示例 v-bind:title="mytitle + '123'"  data里边有个mytitle的val值  显示此mytitle的值
> >
> > 简写为：
>
> v-on
>
> > 事件绑定机制，v-on:click(相当于onclick)
> >
> > 简写为@

## 事件修饰符

> .stop
>
> > 阻止事件冒泡
>
> .prevent
>
> > 阻止默认行为  a.prevent
>
> .capture
>
> > 事件捕获，即让事件变成由父-->子元素进行
>
> .self
>
> > 只允许事件本身进行
>
> .once
>
> > 只允许事件进行一次

### 	注意点  .self只会阻止自身事件不冒泡（添加到本身元素上），而.stop会不允许冒泡（添加到子元素上）

## 双向数据绑定

> v-model
>
> > 只会作用于表单元素，可以实现v-m两边的数据（双边都操作）,而v-bind只会实现单项数据绑定
> >
> > 案例
> >
> > > 简易计算机
> > >
> > > > 注意  要绑定v-model才会和下方的data才会进行数据的更改
> > > >
> > > > selection绑定v-model="opt",data.opt="+",需要option里边有个value值为“+”
> > > >
> > > > data里边的val是字符串，进行加减计算需要转化 parseInt
> > > >
> > > > > 小技巧：可以用eval() 转换为js代码并运行

## vue中的样式添加Class

> 1. 直接添加 class=“active thin”
> 2. 添加属性方式（v-bind ）:class="['active','thin']"(注意数组里边也要都加冒号)
> 3. 三元表达式 :class="['active','thin'，flag？'active’:' ']", flag是data里边的key，可以不加冒号
> 4. 对象的方式  :class="['active',{'active':flag}]"

## vue中的样式添加 style

> 1. h1 :style="styleObj1"
> 2. h1 :style="[ styleObj1, styleObj2 ]"

## for循环遍历数组

> for循环遍历普通数组
>
> > v-for="(item, i) in list"    
> >
> > item为数组元素，i为索引值
>
> for循环遍历对象数组
>
> > v-for="(user, i) in list">Id：{{ user.id }} --- 名字：{{ user.name }} --- 索引：{{i}}
> >
> > user为对象数组中的对象元素，i为索引值
>
> for循环遍历对象
>
> > v-for="(val, key, i) in user"
> >
> > val 为value值，键是key
>
> for循环迭代数字
>
> >  v-for="count in 10"
> >
> > 注意count从1开始一直到10
>
> key的注意点
>
> > v-for="item in list" :key="item.id"
> >
> > 使用v-for循环的时候，或者在一些特殊情况中，如果 v-for 有问题，
> >
> > 必须 在使用 v-for 的同时，指定 唯一的 字符串/数字 类型 :key 值(如checkbox里边勾选对号是，添加后才会不改变，动画transition-group时必须有)

## v-if和v-show

> v-if 的特点：
>
> >  每次都会重新删除或创建元素
> >
> > 有较高的切换性能消耗
>
> v-show的特点：
>
> > 每次不会重新进行DOM的删除和创建操作，只是切换了元素的 display:none 样式
> >
> > 有较高的初始渲染消耗
>
> 用法
>
> > 如果元素涉及到频繁的切换，最好不要使用 v-if, 而是推荐使用 v-show
> >
> > 如果元素可能永远也不会被显示出来被用户看到，则推荐使用 v-if

# 补充点

> ## mvc和mvvm的区别 
>
> 

