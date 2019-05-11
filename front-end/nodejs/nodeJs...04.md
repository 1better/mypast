## nodeJs...04.md

## ./

> 文件操作中的相对路径可以省略 ./
>
> 在模块加载中，相对路径中的 ./ 不能省略
>
> 文件操作中
>
> > **./data/a.txt 相对于当前目录**
> > data/a.txt   相对于当前目录
> > /data/a.txt  绝对路径，当前文件模块所处磁盘根目录
> > c:/xx/xx...  绝对路径
>
> **总结：最好在同一目录下的东西都加上./，好区分**

## 回调函数

> 异步操作时不能拿出想要的数据，需要一个回调函数来拿出
>
> code
>
> > ```javascript
> > function fn(callback){
> >     setTimeout(function () {
> >         var data = '100';
> >         callback(data)
> >     },1000)
> > }
> > 
> > fn(function (data) {
> >     console.log(data);
> > })
> > //这样回调就可以拿出data数据
> > //ajax 和 node 里边很多这种操作
> > ```
> >
> > 

