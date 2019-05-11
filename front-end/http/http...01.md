## http...01

## http概念

> ### 第一个问题：输入url之后的操作
>
> > 在远程dns解析之前  先要 redirect 可能浏览器已经记住了，缓存了一个新的地址
> >
> > 第二步 看缓存 可能请求的已经缓存过了
> >
> >  ![](C:\Users\Administrator\Desktop\front-end\http\images\http1.jpg)
> >
> > 
>
> 应用 ->  传输 -> 网络 -> 数据链路层 -> 物理层（相对于前端而言）
>
> 物理层
>
> > 物理设备如何传输的操作
>
> 数据链路层
>
> > 通信实体间建立数据链路连接
>
> 网络层
>
> > 数据在结点之间建立逻辑链路
>
> 传输层
>
> > 端到端的连接      向高层屏蔽了下层数据通信的细节 TCP/IP协议
>
> 应用层
>
> > 为应用软件提供了很多服务，建立在http协议之上，屏蔽了网络传输的相关细节
> >
> >  

## 三次握手

>   ![](C:\Users\Administrator\Desktop\front-end\http\images\http2.jpg)
>
>   过程
>
>   > 1. 客户端发送SYN=1报文，发送序列号为x
>   > 2. 服务器发送SYN+ACK报文，发送序列号为y 确认序列号为X+1
>   > 3. 客户端发送ACK报文，发送序列号为z，确认序列号为Y+1
>
>   为什么三次握手
>
>   > 1. 防止服务端开启无用的连接 
>   > 2. 网络传输有延时  传输过程中因为网络传输原因 消失了客户端有时间限制 超过就关闭了到时候服务端不知道客户端的信息,就一直开着 等着客户端发送数据 不知道连接已经失败
>   > 3. 规避网络延迟而导致服务端无用的开销

## 四次挥手

> 三次握手期间只要断开就会进行四次挥手
>
>  ![](C:\Users\Administrator\Desktop\front-end\http\images\四次挥手.jpg)
>
> 

## URL URI URN

> **URL **
>
> > 统一资源定位符
> >
> > http:user:pass@host.com:8080/path?query =.... #hash
> >
> > > + http  什么协议
> > > + user:pass 用户身份(现在一般不用了)
> > > + host.com     (域名，定位互联网的位置，由远程DNS解析为ip地址)
> > > + path  访问的路径
> > > + query 数据
> > > + hash  hash地址(vue的路由以及a连接的锚点跳跃)
>
> URI
>
> > 统一资源标志器(包含URL，URN)
>
> URN
>
> > 永久统一资源定位符
> >
> > 比较先进（服务器无论怎么搬都是一个定位的地方）

## http的发展

> http/0.9  
>
> > + 只有一个命令get
> > + 没有HEADER等描述数据的信息
> > + 服务器发送关闭，就关闭tcp连接 
>
> http/1.0
>
> > + 增加了很多命令
> > + 增加 status code 和 header
> > + 多字符集支持 多部分发送 权限 缓存
>
> http/1.1
>
> > + 持久连接
> > + pipeline  同一个连接发送多个请求
> > + 增加host和其它一些命令
> > + host: （同一台物理服务器可以跑多个服务java服务 c#服务 host都是同一个物理服务器来判断使用哪个服务） 
>
> http2
>
> > + 所有数据以二进制传输
> > + 同一个连接里面发送多个请求不再需要按照顺序来
> > + 头信息压缩以及推送等提高效率的功能
> > + 为了解决http1.1性能低下,头信息压缩 1.1每次发送 header，每次发送http头都要 全部发送 用的代宽量 多
> > + 推送  服务端可以主动发送请求
>
> 

## http报文

> 请求
>
> > 方法（GET/POST）   / 资源（...txt） 版本（HTTP/1.0）
> >
> > 
> >
> > ![](C:\Users\Administrator\Desktop\front-end\http\images\请求报文.jpg)
> >
> > HEADER   
> >
> > > 请求 Accept:text/*
> > > Accept-language:en fr
>
> 响应
>
> > HTTP / code码 （状态码，处于什么状态 200 ok）
> >
> > 首部      content-type    content-length  cache-control
> >
> > 主题      hi,message
> >
> > ![](C:\Users\Administrator\Desktop\front-end\http\images\响应报文.jpg)
> >
> >  
>
> **首行不在HEADER中**

