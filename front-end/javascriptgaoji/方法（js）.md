# 知识点补充（es6）

## some的用法

> some()是对数组中每一项运行给定函数，如果该函数对**任一项**返回true，则返回true
>
> > 例子：
> >
> > 数组返回(只要item大于3就会停止返回true，不然将一直遍历。注意 item是数据项（数组中的第几项），index是索引) 
> >
> > 形参可以有1/2/3个（都可以）
> >
> > 在 数组的 some 方法中，如果 return true，就会立即终止这个数组的后续循环
> >
> > ```javascript
> > var` `arr = [ 1, 2, 3, 4, 5, 6 ]; 
> > ```
> >
> > ```
> > console.log( arr.some( ``function``( item, index, array ){ 
> >     ``console.log( ``'item='` `+ item + ``',index='``+index+``',array='``+array ); 
> >     ``return` `item > 3; 
> > }));
> > ```

## every的用法

> every()是对数组中每一项运行给定函数，如果该函数对**每一项**返回true,则返回true。
>
> > 上述例子如果用every遍历,只要item不大于3，就返回false，停止遍历。
> >
> > every方法如果return false就会立刻终止

## splice的用法

> splice() 方法向/从数组中添加/删除项目，然后返回被删除的项目。
>
> **注意：**该方法会改变原始数组
>
> 	> array.splice(index,howmany,item1,item2,...)
> 	>
> 	> 必需值： index表示索引值（删除或者添加位置），howmany表示多少个，设置为0就为添加项目
> 	>
> 	> 可选值:  item1，item2.... （当设置为0时为添加的元素）

## findIndex方法

> array.findIndex(item)
>
> 当数组中的元素在测试条件时返回 *true* 时, findIndex() 返回符合条件的元素的索引位置，之后的值不会再调用执行函数(类似于String的indexOf)
>
> 如果没有符合条件的元素返回 -1
>
> > + **注意:** findIndex() 对于空数组，函数是不会执行的。
> > + **注意:** findIndex() 并没有改变数组的原始值。

## forEach方法

> array.forEach(item,index,arr)
>
> 遍历数组的每个元素
>
> item为必须值，index和arr为可选值
>
> >  **注意:** forEach() 对于空数组是不会执行回调函数的。

## fifter方法

> array.fifter(item,index,arr)
>
> item为必须值，index和arr为可选值
>
> filter() 方法创建一个新的数组，新数组中的元素是通过检查指定数组中符合条件的所有元素。(过滤)
>
> > + **注意：** filter() 不会对空数组进行检测。
> > + **注意：** filter() 不会改变原始数组。

## includes方法以及padStart

>为String.prototype里边的方法
>
>str.includes(key)
>
>includes判断字符串是否包含key，如果包含返回true，否则返回false
>
>new Date().getSeconds.toString().padStart(2,'0')
>
>判断字符是否为两位，如果为1位前边补0,padEnd方法是后边补0，大于2位不执行

## substring方法

> ```
> stringObject.substring(start,stop)
> start 必需。一个非负的整数，规定要提取的子串的第一个字符在 stringObject 中的位置
> 可选。一个非负的整数，比要提取的子串的最后一个字符在 stringObject 中的位置多 1
> substring() 不接受负的参数
> substring() 方法返回的子串包括 start 处的字符，但不包括 stop 处的字符。
> 如果参数 start 与 stop 相等，那么该方法返回的就是一个空串（即长度为 0 的字符串）。如果 start 比 stop 大，那么该方法在提取子串之前会先交换这两个参数。
> ```

## slice方法

> ```
> stringObject.slice(start,end)
> start 要抽取的片断的起始下标。如果是负数，则该参数规定的是从字符串的尾部开始算起的位置。也就是说，-1 指字符串的最后一个字符，-2 指倒数第二个字符，以此类推
> end  紧接着要抽取的片段的结尾的下标。若未指定此参数，则要提取的子串包括 start 到原字符串结尾的字符串。如果该参数是负数，那么它规定的是从字符串的尾部开始算起的位置。
> String.slice() 与 Array.slice() 相似
> ```

## 注意    slice和substring方法都是包左不包右！

## reverse方法

> 反转数组
>
> ### 注意会改变原来数组

## sort方法

> 排序（按数字的首位的ascall码值排序）
>
> 改变原数组
>
> 为了能正常排序，可添加函数
>
> > ```
> > let a = [2,7,8,10,9]
> > console.log(a.sort(num));
> > function num(a,b) {
> >     return a-b;
> > }
> > ```

