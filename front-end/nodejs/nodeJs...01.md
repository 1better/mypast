## nodeJs...01

## nodeJs的概念

> nodeJs是什么
>
> > + JavaScript 运行时的环境
> > + 既不是语言，也不是框架，它是一个平台
>
> Node.js 中的 JavaScript
>
> > - 没有 BOM、DOM
> > - EcmaScript 基本的 JavaScript 语言部分
> > - 在 Node 中为 JavaScript 提供了一些服务器级别的 API
> >   - 文件操作的能力
> >   - http 服务的能力

## 文件操作

> + 浏览器中的 JavaScript 是没有文件操作的能力的
> + 但是 Node 中的 JavaScript 具有文件操作的能力
>
> > + fs 是 file-system 的简写，就是文件系统的意思
> > +  在 Node 中如果想要进行文件操作，就必须引入 fs 这个核心模块
> > +  在 fs 这个核心模块中，就提供了所有的文件操作相关的 API
> > + 例如：fs.readFile 就是用来读取文件的
>
> > code
> >
> > > `var fs = require('fs')`    使用 require 方法加载 fs 核心模块
> > >
> > > `fs.readFile('./data/a.txt', function (error, data) {}`
> > > 第一个参数就是要读取的文件路径,第二个参数是一个回调函数
> > >
> > > `fs.writeFile('./data/你好.md', '大家好，给大家介绍一下，我是Node.js', function (error) {}`
> > > 第一个参数：文件路径,第二个参数：文件内容,第三个参数：回调函数

## http模块

> http 这个模块的职责就是创建编写服务器的
>
> > 1. 加载 http 核心模块
> > 2. 使用 http.createServer() 方法创建一个 Web 服务器
> > 3. 服务器的作用
> > 4. 绑定端口号，启动服务器
> >
> > code
> >
> > > `var http = require('http')`
> > > `var server = http.createServer()`
> > > `server.on('request', function () {
> > >   console.log('收到客户端的请求了')
> > > })`
> > > `server.listen(3000, function () {
> > >   console.log('服务器启动成功了，可以通过 http://127.0.0.1:3000/ 来进行访问')
> > > })`
> >
> > 服务器的作用
> >
> > > + 提供服务：对 数据的服务 发请求
> > > +   接收请求
> > > +   处理请求
> > > +  给个反馈（发送响应）
> > > + 注册 request 请求事件
> > > +  当客户端请求过来，就会自动触发服务器的 request 请求事件，然后执行第二个参数：回调处理函数
> >
> > `server.on('request', function (request, response)
> > {console.log('收到客户端的请求了，请求路径是：' + request.url);`
> > `response.write('hello')`
> > `response.end();})`
> > response 对象有一个方法：write 可以用来给客户端发送响应数据
> > write 可以使用多次，但是最后一定要使用 end 来结束响应，否则客户端会一直等待
> > res.end() 支持两种数据类型，一种是二进制，一种是字符串
> >
> > > Request 请求对象
> > > 请求对象可以用来获取客户端的一些请求信息，例如请求路径
> > >
> > > Response 响应对象
> > > 响应对象可以用来给客户端发送响应消息
> >
> > 地址和端口号
> >
> > > `请求我的客户端的地址是：' req.socket.remoteAddress(地址), req.socket.remotePort(端口号)`

## 简单的模块化

> 模块种类
>
> > + 具名的核心模块，例如 fs、http
> > + 用户自己编写的文件模块 (相对路径必须加 ./,可以省略后缀名）
> > + 在 Node 中，没有全局作用域，只有模块作用域
> >
> > > 外部访问不到内部,内部也访问不到外部,默认都是封闭的(**模块作用域**)
>
> require 的作用
>
> > + 加载文件模块并执行里面的代码
> > + 拿到被加载文件模块导出的接口对象
>
> 
>
> > 在每个文件模块中都提供了一个对象：exports
> >  exports 默认是一个空对象
> > 把所有需要被外部访问的成员挂载到这个 exports 对象中
>
> 

## 核心模块（部分知识点）

> > 用来获取机器信息的
> > var os = require('os')
>
> > 用来操作路径的
> > var path = require('path')
>
> > 获取当前机器的 CPU 信息
> > console.log(os.cpus())
>
> > memory 内存
> > console.log(os.totalmem())
>
> > 获取一个路径中的扩展名部分
> > // extname extension name
> > console.log(path.extname('c:/a/b/c/d/hello.txt'))

## Content-Type

> 在 http 协议中，Content-Type 就是用来告知对方我给你发送的数据内容是什么类型
>
> >  res.setHeader('Content-Type', 'text/plain; charset=utf-8')
> >
> > res.setHeader('Content-Type', 'text/html; charset=utf-8')

