## JavaScriptes6...3

## 字符串扩展

> + includes(str) : 判断是否包含指定的字符串
> + startsWith(str) : 判断是否以指定字符串开头
> + endsWith(str) : 判断是否以指定字符串结尾
> + repeat(count) : 重复指定次数

## 数组扩展

> + 二进制与八进制数值表示法: 二进制用0b, 八进制用0o
> + Number.isFinite(i) : 判断是否是有限大的数
> + Number.isNaN(i) : 判断是否是NaN
> + Number.isInteger(i) : 判断是否是整数
> + Number.parseInt(str) : 将字符串转换为对应的数值
> + **Math.trunc(i)** : 直接去除小数部分
>
> **给力用法**
>
> +  Array.from(v) : 将伪数组对象或可遍历对象转换为真数组
> + Array.of(v1, v2, v3) : 将一系列值转换成数组
> + **find(function(value, index, arr){return true}) : 找出第一个满足条件返回true的元素**
> + findIndex(function(value, index, arr){return true}) : 找出第一个满足条件返回true的元素下标

## 对象扩展

> + Object.is(v1, v2) 判断2个数据是否完全相等
> + Object.assign(target, source1, source2..)  将源对象的属性复制到目标对象上
>
> > **注意**  assign方法只能实现第一层的深拷贝，其他的不行
>
> + 直接操作__proto__ 属性      let obj2 = {};     obj2.__proto__ = obj1;      _ _proto_ _

## Set和Map

> Set容器 : 无序不可重复的多个value的集合体
>
> > + Set()
> > + Set(array)
> > + add(value)
> > + delete(value)
> > + has(value)
> > + clear()   清除
> > + size
> >
> > 实例
> >
> > > let set = new Set([1,2,3,4,3,2,1,6]);
> > > console.log(set);
> > > set.add('abc');
> > > console.log(set, set.size);
> > > //delete(value)
> > > set.delete(2);
> > > console.log(set);
> > >     //has(value)
> > > console.log(set.has(2));//false
> > > console.log(set.has(1));//true
> > >    //clear()
> > > set.clear();
> > > console.log(set);
>
> Map容器 : 无序的 key不重复的多个key-value的集合体
>
> > + Map()
> > + Map(array)
> > + set(key,value)  添加
> > + delete(ket)
> > + has(key)
> > + clear()
> > + size
> >
> > 实例
> >
> > >  **Map([['abc',12],[25,'age']])**
> > >
> > > let map = new Map([['abc', 12],[25, 'age']]);
> > >  console.log(map);
> > >     map.set('男', '性别');
> > >     console.log(map);
> > >     console.log(map.get(25));//age
> > >     //delete(key)
> > >     map.delete('男');
> > >     console.log(map);
> > >     console.log(map.has('男'));//false
> > >     console.log(map.has('abc'));//true
> > >     map.clear();
> > >     console.log(map);

## for...of循环遍历

> + 遍历数组
> + 遍历Set
> + 遍历Map
> + 遍历字符串
> + 遍历伪数组
>
> 实例
>
> > ```js
> > <!--Set以及for。。of实现数组去重-->
> > <script>
> >     let arr = [1,3,1,5,3,6,7,8,9];
> >     let arr2 = [];
> >     for(let i of new Set(arr)){
> >         arr2.push(i);
> >     }
> >     console.log(arr2);
> > </script>
> > ```



