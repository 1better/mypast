## javaScript1基础知识复习

## javascript基础知识

> 组成
>
> > bom	Browser Object Model      浏览器对象模型，用来获取或设置浏览器的属性、行为  
> > dom	document Object Model    文档对象模型，用来获取或设置文档中标签的属性
> > ECMAScript                                     规定js的语法规范
>
> 数据类型
>
> > 基本数据类型
> >
> > > string number boolean Undefined   Null Symbol(唯一)
> > >
> > > 存储的就是数据本身的变量就是值类型的数据
> > >
> > > 值类型赋值
> > >
> > > > 直接将存储的数据复制一份赋值给新的变量 两个变量独立存在互不影响
> >
> > 复杂数据类型
> >
> > > RegExp Array  Object function Date  RegExp 
> > >
> > > 存储的是数据在内存中的地址，
> > > 数据在内存中单独存储 就是引用类型的数据
> > >
> > > 引用类型赋值
> > >
> > > > 将存储的数据的地址复制一份赋值给新的变量 
> > > > 两个变量指向同一个对象，相互影响
> >
> > **null知识**
> >
> > > 变量不可能为null值，除非手动去设置
> > > 什么时候要给对象赋值为null？
> > > 要解除对象的占用（引用）的时候
>
> 全等和等于
>
> > ===     比较数值和类型
> >
> > ==       只比较值
>
> in关键字
>
> > for in 数组中 遍历对象的键
> > 判断是否存在于对象中
> > 使用in关键字的时候
> > 属性名称为字符串类型，需要用引号引起来
> > 在数组中判断索引是否存在
>
> indexOf方法
>
> > 返回值为指定的数对应的索引，如果没有找到 返回-1
>
> 对象的动态特性
>
> > 点语法 obj.a
> > 关联数组语法（中括号语法） obj['a'] 
> > //这里如果使用的键不是字符串类型，会隐式的转换成字符串类型
> >
> > ```javascript
> > obj["[object Object]"] = function () {
> >      console.log("我添加成功了");
> >    }
> > obj["[object Object]"]();//仍是字符串
> > ```
> >
> >  
>
> 逻辑中断
>
> > || 以及 && 根据表达式1，2的不同返回也不同
>
> **delete关键字**
>
> > + 用来删除对象的属性以及未使用var声明的变量
> > + 有返回值 用来表示删除属性是否成功
> > + 删除的是不存在的属性，返回值为true
> > + 删除的属性存在原型当中，那么返回值为true，但是并未删除
>
> continue和break
>
> > 跳出本次循环 继续下次循环，continue下面的代码不再执行
> >
> > 终止循环 break后面的代码不执行
>
> **定义函数**
>
> > 1. 函数声明
> >
> >    ```javascript
> >    函数声明
> >    function funcName(){
> >                函数体
> >    }
> >    ```
> >
> > 2. 函数表达式
> >
> >    在使用函数表达式声明函数的时候，function后面可以跟函数名
> >    但是这个函数名只限在函数内部使用，外部无法访问
> >
> > 3. Function
> >
> >    ```javascript
> >    var function = new Function();
> >    ```
>
> 常用dom操作
>
> > 常用DOM操作
> > 增删改查
> > 增
> > document.creatElement appendChild
> > 删
> > removeChild
> > 改
> > style id className innerHTML innerText查
> > getElementById    getElementsByClassName
> > getElementsByTagName
>
> 常见的异常
>
> > ```javascript
> > //完整异常代码
> > try{//可能会出现的异常代码}
> > catch(e){
> > //出现错误后的执行代码
> > }finally{
> > // 不管错不错都会执行代码
> > //（释放资源的操作）
> > }
> >    // 语法异常 try catch无法捕获
> > ```
> >
> >  
>
> 面向对象与面向过程
>
> > + 面向过程的思维方式
> >   把解决问题的关注点放到解决问题的每一个
> >   详细步骤
> >
> > + 面向对象的思维方式
> >   把解决问题的关注点放到解决问题一些对象上
> >
> > 面向对象是一种思维方式
> >
> > > + 万物皆对象
> > > + 对象的特征
> > > + 用来描述对象的信息
> > > + 对象的行为
> > > + 描述对象的行为
> >
> > 什么是对象
> >
> > > 键值对的组合就是对象
> >
> > 编写代码的原则
> >
> > > 不要重复（达到可复用）
>
> 



