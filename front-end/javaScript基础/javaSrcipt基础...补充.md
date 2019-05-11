## javaSrcipt基础...补充

## 创建数组

> + 字面量定义 
> + 对象创建

## 函数知识点

> + 函数名，就等于整个函数。
> + 执行函数，就等于函数的功能+返回值；
> + 打印函数名，就等于打印整个函数。
> + 打印执行函数，就等于打印函数的返回值。
> + 函数中包函数，先执行里面，后执行外面。
> + 回调函数:函数作为参数进行传递和使用。

## new 的作用

> + 开辟内存空间，存储新创建的对象（ new Object() ）
> + 把this设置为当前对象
> + 执行内部代码，设置对象属性和方法
> + 返回新创建的对象

## 进制转换（补充）

>  一个参数，取整。 两个参数，进制转换。
>   任意进制转换成十进制。(code)
>
> > var shiNum = parseInt(111,2);
> >     console.log(shiNum);
>
>  toString();   无参转换成字符串。    带参进制转换。
>     十进制转换成任意进制(code)
>
> >  var num = 10;
> >    var renyi = num.toString(16);
> >    console.log(renyi);

## json

> key和value必须都要有""
>
> 没有length

## 构造函数原理

> ​     function Strings(num){
> ​        this["[[PrimitiveValue]]"] = num;
> ​        return num/1;
> ​    }