## javascript4函数

## arguments

> arguments.length  可以用来表示传入实参的个数
> arguments.callee  指向函数本身

## instanceof 关键字

> 对象 instanceof 构造函数
> 判断该构造函数的原型是否在对象的原型链上

## Function原型链

> Function也可以被当做一个构造函数
> 通过Function new
> 出来函数可以被当做是实例化的对象
> 那么Function这个构造函数也有原型对象
> Function的原型对象是一个空的函数
> Function的原型对象的原型对象是Object.prototype
>
> Function实例化为构造函数，构造函数实例化为对象
> 原型为Function.prototype
> Object为Function.prototype的原型
>
> Object构造函数 是 通过  Function 构造函数  
> 实例化出来的
> Function构造函数 也是 通过 Function 构造函数 
> 实例化出来的（不要强行去理解）

## 小知识点

> this谁调用指的就是谁
>
> 递归
> 自己调用自己 要有结束条件
>
> 使用递归的方法
> 化归思想
> 将一个问题由难化易，由繁化简，
> 由复杂化简单的过程称为化归，
> 它是转化和归结的简称。
>
> childNode包含了各种类型的节点
> 只需要元素节点，通过nodeType来判断
>
> concat()方法拼接字符串
>
> js代码分为两个步骤
> 预解析
> javascript代码在预解析阶段会提升var变量和
> function的
> 执行
>
> 变量和函数提升
>
> 变量的提升是分作用域的 
>
> 函数表达式不会被提升
>
> 注意
> var a;a就在window上了
>
> new Foo.getName()等价于 Foo.getName()
> new Foo().getName() 等价于 (new Foo()).getName()