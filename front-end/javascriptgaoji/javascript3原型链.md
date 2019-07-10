## javascript3原型链和函数

## 继承

> 继承
>
> > 1. 混入式继承
> >
> >    ```javascript
> >    for(var i in obk){
> >        obj2[i] = obk[i];
> >    }
> >    ```
> >
> > 2. 经典继承
> >
> >    ```javascript
> >    function create(obj) {
> >    	if(Object.create){
> >            return Object.create(obj);
> >             }else {
> >             function F() {
> >    
> >             }//构造函数
> >             F.prototype = obj;
> >             return new F();
> >                }
> >    }
> >    //封装
> >    ```
> >
> >     

## 原型链

> 概念
>
> > + 每个构造函数都有原型对象 
> > + 每个对象都会有构造函数 
> > + 每个构造函数的原型都是一个对象
> > + 那么这个原型对象也会有构造函数
> > + 那么这个原型对象的构造函数也会有原型对象
> > + 这样就会形成一个链式的结构，称为原型链 
> >
> > ```javascript
> > function Person(name){
> > }
> > var p = new Person();
> > p->p.prototype->Object.prototype->null
> > ```
> >
> >  
>
> 属性搜索原则
>
> > 当访问一个对象的成员的时候，会先在自身找有没有,如果找到直接使用，
> > 如果没有找到，则去当前对象的原型对象中去查找，如果找到了直接使用，
> > 如果没有找到，继续找原型对象的原型对象，如果找到了，直接使用
> > 如果没有找到，则继续向上查找，直到Object.prototype，如果还是没有，就报错
>
> 原型继承概念
>
> > 通过修改原型链结构实现的继承，就叫做原型继承
>
> **Object.prototype的成员**
>
> > + **hasOwnProperty**  (常和for in 遍历 配合使用)
> >
> >   用来判断对象本身（不包含原型）是否拥有某个属性
> >   _proto_判断为false
> >
> > + isPrototypeOf 
> >
> >   判断对象1是否是对象2的原型  对象1.isPrototypeOf(对象2)
> >
> > + propertyIsEnumerable
> >
> >   判断属性是否属于对象本身，判断属性是否可以被遍历
> >
> > + Object.defineProperty()
> >
> >   vue双向数据绑定的实现原理就是用了这个属性(es5)
> >
> > + toString和toLocalString 
> >
> >   都是将对象转换为字符串
> >
> >   > toString 
> >   > 变成字符串
> >   >
> >   > toLocaleString 
> >   > 系统会转化本地格式
> >   > 把每个数组的元素合并在一起
> >   >
> >   >  
> >
> > + valueOf
> >   获取当前对象的值
> >
> >   > ```javascript
> >   > var bool = {
> >   > name:'张三'};
> >   > document.write(bool.name.valueOf());
> >   > ```
> >   >
> >   >  
> >
> >   __proto__
> >
> >   > 原型对象对象中的属性   可以使用 对象.__proto__ 去访问原型对象 
> >
> >  

## 函数

> 创建方式
>
> > + 直接声明函数
> >
> > + 函数表达式
> >
> >   ```javascript
> >   new Function
> >   var func = new Function("console.log(1)");
> >   func()
> >   /*Function这构造函数 可以用来新建函数对象
> >   无参数 创建一个空函数
> >   一个参数 为函数体
> >   多个参数 最后一个为函数体，前面的为形参名*/
> >   
> >   /*Function创建函数代码过长解决方法
> >   字符串拼接 代码换行
> >   使用模板
> >   使用反引号  有兼容性问题，一般不用*/
> >   ```
> >
> > + 