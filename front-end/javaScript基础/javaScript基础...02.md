## javaScript...基础02

## 知识点

> 驼峰命名规则
>
> > 特殊符号只有$和_可以有用
> > top都不要用
>
> 交换两个值（不能用中间值）
>
> > var a=1 b=2   a=a+b
> > 求和 (a) b =a(sum)-b  (b)a=a(sum)-(a)b;
>
> 进制转换 
>
> > 值 = 位值*进制的（位置-1）的平方+...
>
> 小数相加  
>
> > 精度容易丢失 不要判断两个浮点数是否相等  小数不能比较
> > Number.MAX_Value 最大值
> > NaN和任何数值都不相等
> > isNaN判断是不是一个数字
>
> \转译符
>
> ****
>
> **对字符串来言 +是连接符 - * /是隐式类型转换**
>
> **undefined ==null true   === false**
>
> **!!变量可以变成布尔类型**
>
> **0 空字符串 null 都变为false**
>
> **先算与再算或  加减在与前面**
>
> **switch底层用的=== 比较**
>
> **date 礼拜日给我们的值是0 **
>
> ****
>
> > parseInt 取整
> >
> > 数组是object类型
> > 数组的长度刚好可以作为数组下一个元素的索引值
>
> > function fn(a,b){}
> > js中没有方法重载
> > 实参大于形参 正常执行
> > 实参小于形参，要看程序是否报错
>
> ****
>
> **未给定的形参为undefined**
>
> **confirm 布尔类型  alert un.. prompt string**
>
> **函数没有返回值，返回的值的类型为undefined**
>
> **打印函数名，就等于打印整个函数
> 打印执行函数，就等于打印函数的返回值**
>
> > 函数定义
> > function fn1(){}
> > var fn2=function(fn1可加可不加)(){}
> > var fn3=new Function()
> > 后两种有局限性，必须放在其后边才可以执行
>
> 变量 局部变量，成员变量
>
> > 局部变量 只有局部能够访问的变量
> > 全局变量 在哪里都能访问到的变量
> > 全局（函数外部或进入javascript立即定义的变量，函数内没有var的变量）
> > 函数里边去掉var 就是全局变量
>
> 预解析
>
> > 变量声明提升和函数整体提升（变量声明提升，只提升变量名） 方法直接提升
> >  （function (){}）匿名函数
> >
> > 直接定义  事件绑定  定时器
> >
> > 函数中包函数，先执行里边，在执行外边函数也是一种数据类型，归根结底也属于object类型
> > 回调函数
> > 函数可以作为参数传递
>
> 对象
>
> > 封装信息
> > 属性不加括号，方法加括号
> > 创建多个对象用函数封装起来
> > 构造函数
> > var stu = new Object();
> > var aaa = "age";
> > stu[aaa] = 20;
>
> > **parseInt() 一个参数，取整，两个，进制转换
> > 任意进制转换为十进制**
> >
> > **tostring() 带参，进制转换 
> > 十进制转换为任意进制**
> >
> > json和对象的区别在于json的key键值必须有""
> > 数组有长度 json没有长度
> > 对象没有长度，不能用for循环来遍历数组，可以用for循环in遍历
> > 简单数据类型传递的是值
> > 而复杂数据类型传递的是地址
>
> mdn开发者网站

## 一些方法

> 检测数组方法 instanceof   Array.isArray
> 转换数组   .toString()   .valueOf()返回数组
> join  把数组元素用特殊方式连接成字符串
> 无参 用逗号链接   空格 元素之间有一个空格
> 空字符串 "" 无缝链接  str = arr.join("");
> push  pop  末尾添加 删除
> unshift shift 首添加 删除
> reverse 反转数组   sort 排序（只能用第一位排序，通过回调函数解决）
> s.sort(fuction (a,b)({return a-b}));
> **charCodeAt()  查看编码**
> concat()  拼接数组
> slice  截取 负数 截取后边  （4，2）截取空数组
> 索引值包括左边的不包括右边的
> splice 替换
> indexOf() lastindexOf() 查索引（不存在返回-1）
> every 的返回值是一个bolean类型，参数是回调函数
> arr.forEach() 无返回数组，纯操作
> map 
>
> 清空数组的方法
> var array = [1,2,3,4,5,6];
> 	array.splice(0,array.length); //删除数组中所有项目 
> 	array.length = 0; //length属性可以赋值，其它语言中length是只读，伪数组不可以
> 	array = [];  //推荐
>
> 伪数组，不能修改长短的数组，不属于数组类型，可以修改值  arguments.length  实参个数  
> fn.length   形参个数
> arguments.callse  相当于 fn()
>
> fileter函数用来筛选，最好判断返回是true
> json["kkk"] = 1 在json里边创建了一个key-value

