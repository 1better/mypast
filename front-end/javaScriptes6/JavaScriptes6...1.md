## JavaScriptes6...1

## es5语法简介

> 使用严格模式 use strict来使javaScript语言更为简洁（
>
> 如果浏览器不支持，就只是一条简单语句
>
> 使用use strict之后
>
> > 语法行为改变:
> >
> > + 必须使用var定义变量
> > + 自定义函数this不可以指向window对象
> > + 创建了eval作用域（eval不安全）
> > + 对象中的属性不可以名称一样（key值唯一）
>
> Json对象扩展
>
> > JSON.stringify(obj/arr)
> >
> > > 将对象或者数组转化成json对象(数组)
> >
> > JSON.parse(json)
> >
> > > 将json对象（数组）转化成js对象（数组）
>
> Object扩展
>
> > Object.creat(prototype,[description])(经典继承)
> >
> > > - 以指定对象为原型创建新的对象
> > >
> > > - 指定新的属性, 并对属性进行描述
> > >   - value : 指定值
> > >   - writable : 标识当前属性值是否是可修改的, 默认为false
> > >   - configurable: 标识当前属性是否可以被删除 默认为false
> > >   - enumerable： 标识当前属性是否能用for in 枚举 默认为false
> > >
> > >   code 
> > >
> > >   > ```
> > >   > var obj = {name:"张三",age:18};
> > >   > var obj1 = Object.create(obj, {
> > >   >     sex :{
> > >   >     value: '男',
> > >   >     writable: true,
> > >   >     configurable: true,
> > >   >     enumerable: true
> > >   > }})
> > >   > console.log(obj1);
> > >   > ```
> >
> > Object.defineProperties(object, descriptors)为指定对象定义扩展多个属性
> >
> > > get ：用来获取当前属性值得回调函数
> > >
> > > set ：修改当前属性值得触发的回调函数，并且实参即为修改后的值
> > >
> > > 存取器属性：setter,getter一个用来存值，一个用来取值
>
> Array扩展
>
> > Array.prototype.indexOf(value):得到值在数组中的第一个下标
> >
> >  Array.prototype.lastIndexOf(value) : 得到值在数组中的最后一个下标
> >
> > Array.prototype.forEach(function(item, index){}) : 遍历数组
> >
> > **Array.prototype.map(function(item, index){})** : 遍历数组返回一个新的数组，返回加工之后的数组
> >
> > Array.prototype.filter(function(item, index){}) : 遍历过滤出一个新的子数组， 返回条件为true的值
>
> Function.prototype.bind(obj) 
>
> 将函数内的this绑定为obj, 并将函数返回
>
> > 面试题: 区别bind()与call()和apply()?
> >
> > 都能指定函数中的this
> >
> > call()/apply()是立即调用函数
> >
> > bind()是将函数返回

## es6部分语法

> let 
>
> > 与var类似，用于声明变量
> >
> > 在块级作用域有效
> >
> > 不能重复声明，变量不会提升
> >
> > 应用
> >
> > > 循环遍历数组 onclick时间绑定
>
> const
>
> > 定义一个变量
> >
> > 不能修改（其他作用和let一样）
> >
> > 用于保存不会改变的数据
>
> **变量的解构赋值**
>
> > 从对象或数组中提取数据, 并赋值给变量(多个)
> >
> > 对象的解构赋值     let {n, a} = {n:'tom', a:12}
> >
> > 数组的解构赋值    let[n,a] = [12,'what']
> >
> > 用于给多个形参赋值
> >
> > 提取json数据
> >
> > > ```
> > > var json = {
> > >     "a":"你好",
> > >     "b":"怎么回事",
> > >     "c":"不知道啊"
> > > }
> > > let {a,b,c} = json;
> > > console.log(a)
> > > ```
>
> 模板字符串
>
> > `${a}-------${b}-------${c}`  (要多用这个)
>
> 简化的对象写法
>
> > 省略同名的属性值  
> >
> > 省略方法的function
> >
> > > let x = 1;
> > > let y = 2;
> > > let point = {
> > > x,
> > > y,
> > > setX (x) {this.x = x}
> > >  };
>
> 箭头函数
>
> > 写法
> >
> > > 没有参数: () => console.log('xxxx')
> > >
> > > 1个         i => i+2
> > >
> > > **>**=2        (x,y) = > x+y
> > >
> > > 函数体不用大括号: 默认返回结果（只有一条语句，相当于return x+y）
> > >
> > > 函数体如果有多个语句, 需要用{}包围，若有需要返回的内容，需要手动返回
> > >
> > > 使用场景: 多用来定义回调函数   
> >
> > ### **特点**
> >
> > > 简洁
> > >
> > > 箭头函数没有自己的this，箭头函数的this不是调用的时候决定的，而是在定义的时候处在的对象就是它的this
> > >
> > > 扩展理解： 箭头函数的this看外层的是否有函数，
> > > 如果有，外层函数的this就是内部箭头函数的this， 如果没有，则this是window。
>
> 点点点运算符
>
> > rest(可变)参数  用来取代arguments 但比arguments灵活,只能是最后部分形参参数
> >
> > > 写法  function add(...values)      arguments是伪数组，values是真数组
> >
> > 扩展运算符
> >
> > > let arr1 = [1,3,5];
> > > let arr2 = [2,...arr1,6];   2和6之间插入arr1数组
> > > arr2.push(...arr1);   添加arr1数组中的所有元素
>
> 形参默认值
>
> > 不传入参数时默认用形参里的默认值
> >
> > code：
> >
> > > function Person(**x=1,y=1**){
> > >  this.x = x;
> > >  this.y = y;
> > > }
> > > let p = new Person();
> > > console.log(p);
>
> Symbol 
>
> > ES5中对象的属性名都是字符串，容易造成重名，污染环境
> >
> > ES6中的添加了一种原始数据类型symbol
> >
> > 特点
> >
> > > Symbol属性对应的值是唯一的，解决命名冲突问题
> > >
> > > Symbol值不能与其他数据进行计算，包括同字符串拼串
> > >
> > > for in, for of遍历时不会遍历symbol属性。
> >
> > 使用
> >
> > > 调用Symbol函数得到symbol值
> > >
> > > > let symbol = Symbol();    let obj = {};    obj[symbol] = 'hello';
> > >
> > > 传参标识
> > >
> > > > let symbol = Symbol('one');   let symbol2 = Symbol('two');
> > >
> > > 内置Symbol值
> > >
> > > > ES6还提供了11个内置的Symbol值
> > > >
> > > > Symbol.iterator
> > > >
> > > > 对象的Symbol.iterator属性，指向该对象的默认遍历器方法
> >
> > code
> >
> > > // 用作对象的属性(唯一)
> > >  let obj = {username: 'kobe', age: 39};
> > > obj[symbol] = 'hello';
> > >  obj[symbol] = 'symbol';
> > >   //symbol值会变为symbol，但是不会被遍历到
>
> iterator 
>
> >  iterator是一种接口机制，为各种不同的数据结构提供统一的访问机制
> >
> > 作用
> >
> > > + 为各种数据结构，提供一个统一的、简便的访问接口
> > > + 使得数据结构的成员能够按某种次序排列
> > > + ES6创造了一种新的遍历命令for...of循环，Iterator接口主要供for...of消费
> >
> > 工作原理
> >
> > > 创建一个指针对象，指向数据结构的起始位置。
> > >
> > > 第一次调用next方法，指针自动指向数据结构的第一个成员
> > >
> > > 接下来不断调用next方法，指针会一直往后移动，直到指向最后一个成员
> > >
> > > 每调用next方法返回的是一个包含value和done的对象，{value: 当前成员的值,done: 布尔值}
> > >
> > > value表示当前成员的值，done对应的布尔值表示当前的数据的结构是否遍历结束。
> > >
> > > 当遍历结束的时候返回的value值是undefined，done值为true
> > >
> > > (generator 函数是这样显示的){value: 当前成员的值,done: 布尔值}
> >
> > 可用for of遍历
> >
> > > + Array
> > > + arguments
> > > + set容器
> > > + map容器
> > > + String
> >
> > code 
> >
> > >   // 自定义iterator生成指针对象
> > > function mockIterator(arr) {
> > >           let nextIndex = 0;
> > >           return {
> > >           	next: function () {
> > >            	return 
> > >
> > > ​     	nextIndex<arr.length?{value: arr[nextIndex++], done: false}:{value: undefined, done: true}
> > > ​           	 }
> > > ​         }
> > >  }
> >
> > 用到的地方
> >
> > > 使用解构赋值以及...三点运算符时会调用iterator接口
> > >
> > > yield*语句
> >
> > 对象的Symbol.iterator属性
> >
> > >  let myIterable = {};
> > >     myIterable[Symbol.iterator] = function* () {
> > >       yield 1;
> > >       yield 2;
> > >       yield 4;
> > >     };
> > > for(let i of myIterable){
> > >       console.log(i);
> > >     }
> > > let obj = [...myIterable];
> > >     console.log(obj);
>
> class
>
> > + 通过class定义类/实现类的继承
> > + 在类中通过constructor定义构造方法
> > + 通过new来创建类的实例
> > + 通过extends来实现类的继承
> > + 通过super调用父类的构造方法
> > + 重写从父类中继承的一般方法
> >
> > code
> >
> > 
> >
> > >  class Person {
> > >         //调用类的构造方法
> > >         constructor(name, age){
> > >             this.name = name;
> > >             this.age = age;
> > >
> > >         }
> > >         //定义一般的方法
> > >         showName(){
> > >             console.log(this.name, this.age);
> > >         }
> > >     }
> > >     let person = new Person('kobe', 39);
> > >     console.log(person, person.showName());
> > >    
> > >     //定义一个子类
> > >     class StrPerson extends Person{
> > >         constructor(name, age, salary){
> > >             super(name, age);//调用父类的构造方法
> > >             this.salary = salary;
> > >         }
> > >         showName(){//在子类自身定义方法
> > >             console.log(this.name, this.age, this.salary);
> > >         }
> > >     }
> > >     let str = new StrPerson('weide', 38, 1000000000);
> > >     console.log(str);
> > >     str.showName();

​	