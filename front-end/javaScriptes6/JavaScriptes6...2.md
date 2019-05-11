## JavaScriptes6...2

## 异步函数

> ### Promise对象
>
> >  Promise对象: 代表了未来某个将要发生的事件(通常是一个异步操作)
> >
> > 有了promise对象, 可以将异步操作以同步的流程表达出来, 避免了层层嵌套的回调函数(俗称'回调地狱')
> >
> > ES6的Promise是一个构造函数, 用来生成promise实例
> >
> > 使用promise基本步骤(2步):
> >
> > > 创建promise对象
> > >
> > > 调用promise的then()
> >
> > promise对象的三个状态
> >
> > > pending 初始化
> > >
> > > fullfilled: 成功状态
> > >
> > > rejected: 失败状态
> >
> > 应用
> >
> > > 使用promise实现超时处理
> > >
> > > 使用promise封装处理ajax请求
> >
> > 写法
> >
> > > let promise = new Promise((reslove,reject)=>{
> > >     console.log(111);
> > >     // reslove('1234567');
> > >     reject('5678910')
> > > });
> > > promise.then((data)=>{
> > >     console.log(data)
> > > },(error)=>{
> > >     console.log(error);
> > > })
> > > console.log(22222);
>
> ### Genrator函数
>
> > ES6提供的解决异步编程的方案之一
> >
> > Generator函数是一个状态机，内部封装了不同状态的数据，
> >
> > 用来生成遍历器对象
> >
> > 可暂停函数(惰性求值), yield可暂停，next方法可启动。每次返回的是yield后的表达式结果
> >
> > 特点
> >
> > > function 与函数名之间有一个星号
> > >
> > > 内部用yield表达式来定义不同的状态
> >
> > 写法
> >
> > > function *generator() {
> > >     console.log('开始')
> > >     yield 123;
> > >     console.log('结束')
> > >     yield 456;
> > > }
> > > let gen = generator();
> > > console.log(gen.next()); //开始  {value: 123, done: false}
> > > console.log(gen.next()); //结束  {value: 456, done: false}
> > >
> > > {value: undefined, done: true}表示函数内部状态已经遍历完毕
>
> ### async函数(es2017草案)
>
> > 真正意义上去解决异步回调的问题，同步流程表达异步操作
> >
> > 语法 
> >
> > > async function foo(){
> > >         await 异步操作;
> > >         await 异步操作；
> > >       }
> >
> > 特点
> >
> > > + 不需要像Generator去调用next方法，遇到await等待，当前的异步操作完成就往下执行
> > > + 返回的总是Promise对象，可以用then方法进行下一步操作
> > > + async取代Generator函数的星号*，await取代Generator的yield
> > > + 语意上更为明确，使用简单，经临床验证，暂时没有任何副作用
> >
> > 写法
> >
> > > ```
> > > async function timeout(ms) {
> > >     return new Promise( resolve=>{
> > >         setTimeout(resolve, ms);
> > >     })
> > > }
> > > async function asyncPrint(value, ms) {
> > >     console.log('函数执行', new Date().toTimeString());
> > >     await timeout(ms);
> > >     console.log('延时时间', new Date().toTimeString());
> > >     console.log(value);
> > > }
> > > console.log(asyncPrint('hello async', 2000));
> > > //另一种
> > > async function awaitTest() {
> > >             let result = await Promise.resolve('执行成功');
> > >             console.log(result);
> > >             let result2 = await Promise.reject('执行失败');
> > >             console.log(result2);
> > >             let result3 = await Promise.resolve('还想执行一次');// 执行不了
> > >             console.log(result3);
> > >         }
> > >         awaitTest();
> > > ```



# 注意  nodejs还没开始学，学了之后他们的异步操作一定要做！

