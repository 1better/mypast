## javaScript6缓存（jquery缓存）沙箱模式以及构造函数概念



## JS单线程

> 线程:一个线程一次只能处理一件事情，多个线程同时进行
>
> Js单线程
>
> Js分了三个任务
>
> > 渲染任务
> >
> > js代码执行任务
> >
> > 事件处理任务（包括setTimeout,setInterval,onclick。。。）
> >
> > > **setTimeout,setInterval**
> > >  至少在指定的时间后执行指定回调函数
> > >  因为要等主任务中的代码执行完毕之后，才回去检查，setTimeOut的回调函数，没到执行时间
> > >
> > > 用闭包来解决回调函数在调用的时候访问的是全局的变量
> > >
> > > > 在闭包中创建一个变量，来单独存储当前的回调函数需要的数据，
> > > > 在调用的时候就会去使用这个单独的数据，而不是去访问全局变量
> > > >
> > > > 注册点击事件的时候
> > > >     点击事件再触发的时候访问的是全局的变量
> > > >     在闭包中创建一个变量，来单独存储当前的事件处理函数需要的数据，
> > > >     在调用的时候就会去使用这个单独的数据，而不是去访问全局变量

## 闭包缓存

> 缓存：将常用的数据进行存储，以提升性能
>
> 硬件缓存
>     浏览器缓存
>     CDN
>     内存型数据库
>
> > 闭包实现缓存
> >
> >  function createCache(){
> >             //cache对象中以键值对的形式存储我们的缓存数据
> >             var cache = {};
> >             //index数组中该存储键，这个键是有顺序，可以方便我们做超出容量的处理
> >             var index = [];
> >             return function (key, value) {
> >                 //如果传了值，就说明是设置值
> >                 if(value !== undefined){
> >                     //将数据存入cache对象，做缓存
> >                     cache[key] = value;
> >                     //将键存入index数组中，以和cache中的数据进行对应
> >                     index.push(key);
> >
> >                     //判断缓存中的数据数量是不是超出了限制
> >                     if(index.length >= 50){
> >                         //如果超出了限制
> >                         //删除掉最早存储缓存的数据
> >                         //最早存入缓存的数据的键是在index数组的第一位
> >                         //使用数组的shift方法可以获取并删除掉数组的第一个元素
> >                         var tempKey = index.shift();
> >                         //获取到最早加入缓存的这个数据的键，可以使用它将数据从缓存各种删除
> >                         delete cache[tempKey];
> >                     }
> >                 }
> >                 //如果没有传值，只穿了键，那就是获取值
> > //                else{
> > //                    return cache[key];
> > //                }
> >                 return cache[key];
> >             }
> >         }

## jquery缓存

> function createCache() {
>             var keys = [];
>             function cache( key, value ) {
>                 // 使用(key + " ") 是为了避免和原生（本地）的原型中的属性冲突
>                 if ( keys.push( key + " " ) > 3 ) {
>                     // 只保留最新存入的数据
>                     delete cache[ keys.shift() ];
>                 }
>                 // 1 给 cache 赋值
>                 // 2 把值返回
>                 return (cache[ key + " " ] = value);
>             }
>             return cache;
>         }

## 沙箱模式

>**函数自调用**
>
>> (    function(){ var a = 123;}   )    ();
>
>为什么要使用立即执行函数表达式（IIFE）
>
>> 因为IIFE不会再外界暴露任何的全局变量，但是又可以形成一个封闭的空间,刚好可以实现沙箱模式
>
>沙箱模式一般应用在书写第三方框架或者为第三方框架书写插件或者书写功能独立的一些组件
>
>> 优势 ：不会再外界暴露任何的全局变量，也就不会造成全局变量污染
>>
>> 沙箱中的所有数据，都是和外界完全隔离的，外界无法对其进行修改，也就保证了代码的安全性
>
>jQuery当中的沙箱模式
>
>>    (function(win){
>>    var itcast = {
>>              getEle:function () {
>>
>>              }
>>          }
>>          win.itCast = win.$ = itcast;
>>          })(window)

## 函数调用的四种方式

> 1. 函数模式     this指向window全局对象
>
> 2. 方法模式     this指向调用这个方法的对象
>
> 3. 构造函数模式    this 使用new创建出来的对象
>
> 4. 上下文模式     apply call
>
>    > sayHello.apply(obj,arr)
>    >
>    > Math.max.apply(null, arr)
>    >
>    > [].join.apply(arguments,["-"]);
>    >
>    > ​     arr.push.apply(arr,divs);
>    > ​     arr.push.apply(arr,ps);



​	