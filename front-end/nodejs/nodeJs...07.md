## nodeJs...07

## nvm

> 可以管理多个node版本的工具
>
> > 下载nvm-widows（针对windows系统）
> >
> > 指令
> >
> > > + nvm list （查询node有几个版本）
> > > + nvm use 8.4.0 (使用8.4.0版本的node)
> > > + nvm install latest （安装最新版本的node）
> > > + nvm unstall 版本号 (卸载)

## node

> REPL 
>
> > + 读取
> > + 执行
> > + 打印
> > + 循环
>
> 启用
>
> > node 加回车

## dirname和filename补充

> 是全局变量，但也是相对于某一模块的本地变量
>
> 即启用的时候 相当于沙箱模式来调用 （最后传的参数（diname））
>
> 类似于 (function(dirname){...})(dirname)

## fs补充

> fs.mkdir  创建一个目录

## 同步-阻塞（js中的I/O）

> 栈是后进先出  
>
> 栈溢出
>
> 有异步操作时大概流程分为三部分
>
> > + call stack
> > + web APIS
> > + callback Queue
> >
> > 当异步操作执行完会放入队列中，等栈空出来内容时再检查队列中是否有东西，如果有再执行
> >
> > 同步操作就是从上到下解析，解析完直接就从栈中出去，（不会放入队列中）



