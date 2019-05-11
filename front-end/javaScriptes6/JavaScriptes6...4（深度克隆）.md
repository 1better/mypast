## JavaScriptes6...4（***深度克隆）

## 数据类型

> 数据分为基本的数据类型(symbol,String, Number, boolean, Null, Undefined)和对象数据类型，
>
> **注意**：使用typeof 判断数据类型是都是小写（symbol,object(null也是object),number,string,undefined,boolean)
>
> 基本数据类型：
>
> > 特点： 存储的是该对象的实际数据 
>
> 对象数据类型：
>
> > 特点： 存储的是该对象在栈中引用，真实的数据存放在堆内存里
>
> 复制数据
>
> > 基本数据类型存放的就是实际的数据，可直接复制
> >
> > 克隆数据：对象/数组

## 浅拷贝与深拷贝（深度克隆）

> 区别
>
> > 拷贝是否产生了新的数据还是拷贝的是数据的引用
>
> 知识点
>
> > 对象数据存放的是对象在栈内存的引用，直接复制的是对象的引用
>
> **浅拷贝几种方式**
>
> > Object.assign();  浅拷贝（只会对根也就是第一层深拷贝）
> >
> > arr.concat(): 数组浅拷贝
> >
> > arr.slice(): 数组浅拷贝
> >
> > ...
>
> ### **深拷贝**
>
> > JSON.parse(JSON.stringify(arr/obj))
> >
> > >  原理
> > >
> > > >  先把arr或者obj转化成json字符串再对字符串进行转化新的js对象
> > >
> > > 缺点
> > >
> > > > 如果里边有function的话转化后是null
> >
> > **递归实现**
> >
> > > 原理
> > >
> > > > 无法确定原始对象里面的嵌套层数，因此可以借助递归的方法，再次调用拷贝函数，直到最深层数据为基本类型。
> > >
> > > 知识点
> > >
> > > > Object.prototype.toString.call(obj).slice(8,-1),判断对象类型。如果为Array就设定为[],如果为Object就设定为{};
> > > >
> > > > 循环遍历，如果类型还是对象或者数组再往下一级递归
> > >
> > > 好处
> > >
> > > > 可以实现function的转化，并且互不影响
> > >
> > > **代码如下**
> > >
> > > > ```javascript
> > > > function getType(obj){
> > > >     return Object.prototype.toString.call(obj).slice(8,-1);
> > > > }
> > > > function deepClone(obj) {
> > > >     let result, objClass = getType(obj);
> > > >     if(objClass == 'Array'){
> > > >         result = [];
> > > >     }else if(objClass == 'Object'){
> > > >         result = {};
> > > >     }else {
> > > >         return obj;
> > > >     }
> > > >     for(let key in obj) {
> > > >         let value = obj[key];
> > > >         if(getType(value) === 'Array' || 'Object'){
> > > >             result[key] = deepClone(value);
> > > >         }else {
> > > >             result[key] = value;
> > > >         }
> > > >     }
> > > >     return result;
> > > > }
> > > > ```

