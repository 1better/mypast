## javaScript编程时接触的方法

## 进制的转换

> parseInt(num,8);   //八进制转十进制
> parseInt(num,16);   //十六进制转十进制
> parseInt(num).toString(8)  //十进制转八进制
> parseInt(num).toString(16)   //十进制转十六进制
> parseInt(num,2).toString(8)   //二进制转八进制
> parseInt(num,2).toString(16)  //二进制转十六进制
> parseInt(num,8).toString(2)   //八进制转二进制
> parseInt(num,8).toString(16)  //八进制转十六进制
> parseInt(num,16).toString(2)  //十六进制转二进制
> parseInt(num,16).toString(8)  //十六进制转八进制

## 判断是否不是原型对象

> hasOwnProperty   是本身属性时为true，原型对象时为false
>
> 配合for in 遍历对象，得到对象本身属性

