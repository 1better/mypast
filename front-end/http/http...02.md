## http...02

## CORS跨域

> Access-Control-Allow-Origin: " * "  允许跨域  
>
> img link  script  写路径允许跨域，
>
> jsonp的原理
>
> > script的src属性加载了连接，连接访问了这个请求，服务器返回的内容是可控的
>
> Access-Control-Allow-Origin **只能设置一个值**
>
> ### CORS预请求
>
> >  允许方法
> >
> >  > GET POST HEADER
> >
> >  允许的Content-Type
> >
> >  > text/palin
> >  >
> >  > multipart/form-data
> >  >
> >  > application/x-www-form-urlencoded
> >
> >  其他限制
> >
> >  > 请求头限制(X-Test-Cors':'123')这样就不被允许 
> >
> >  允许自己请求头可以
> >
> >  > Access-Control-Allow-Headers: 'X-Test-Cors' 
> >
> >  此时又发送了一个请求  Request Method:OPTIONS,通过OPTION请求来获得服务端允许
>
> ```javascript
> //接受跨域
> 'Access-Control-Allow-Origin': 'http://127.0.0.1:8888',
>  //接受跨域的请求头
> 'Access-Control-Allow-Headers': 'X-Test-Cors',
> //接受跨域的请求方法
> 'Access-Control-Allow-Methods': 'POST, PUT, DELETE',
> //1000s以内可以不用再预请求
> 'Access-Control-Max-Age': '1000'
> ```
>
> 

## Cache-Control  缓存

> public  private no-cache(**no-cache可以缓存数据，但是服务器要验证**)
>
> 到期
>
> > + max-age = <seconds>  缓存允许时间  2代表2s
> > +  s-maxage = <seconds>     代理服务器的缓存允许时间写法
> > + max-stale = <seconds>  发起请求方 即使缓存过期，还在时间内 
>
> 重新验证
>
> > + must-revalidate   
> > + proxy-revalidate    代理服务器的写法 
>
> 其他
>
> > + no-store   怎样都不允许缓存
> > + no-transform  不允许转换
>
> 打包的js文件都有一段哈希码的原因
>
> > 设置Cache-Control
> >
> > 希望浏览器缓存静态文件
> > 服务端内容更新 没有及时更新到客户端问题
> > 做js 构建流程 实际打包完成的js文件名根据内容的哈希
> > 结果加上哈希码，这串哈希码是根据打包完成的js文件
> > 和内容进行的hash计算，如果内容没变 hash码不会变
> > 内容 改变，hash码改变，就重新发送请求
>
> 写法示例
>
> > max-age=200,public
>
> ```javascript
> 'Cache-Control': 'max-age=20'
> //设置之后再次读取网页就从memory cache获取了
> ```
>
> 

## 资源验证

> last-modified   上次修改时间
>
> > 配合If-Modified-Since 或者 If-Unmodeified-Since
> > 使用
> > 对比上次修改时间，如果一样代表资源未修改过
>
> Etag       数据签名
>
> > 配合If-Match 或者If-Non-Match使用
> > 对比资源的签名判断是否使用缓存 
>
> 状态码 304
>
> > not-modified
> >
> > 资源没有修改,去读缓存里边的数据 忽略服务端返回的body内容

## Cookie和Session

> 通过Set-Cookie设置,下次请求会带上,键值对，可以设置多个
>
> 属性
>
> > + max-age 和 expires设置过期时间  (max-age是设置多长时间后，expires是设置到什么时间)
> > + Secure 只在https的时候发送
> > + HttpOnly 无法通过 document.cookie访问
>
> CSRS攻击
>
> > 通过网页引入一个脚本或者url来引导用户发送的cookie  禁止重要数据 通过js 访问
>
> cookie的domain
>
> > 不可以跨域的设置cookie
>
> session 
>
> > + 把 session的key设置到cookie中
> > + 读取cookie的值，再次请求不同内容

## HTTP 长连接(需要演示 ，这段代码一定要写的)

> 保持长连接  Conntcion: keep-alive
>
> Name ConnectionId
> 能够并发  6个并发  并发限制
> 之后进行复用
> Conntcion keep-alive
> 保持长连接  

## 数据协商

> 分类 
>
> > + 请求  Accept
> > + 返回  Accept-Encoding
> > + 接受的语言      Accept-Language
> > + 浏览器相关信息  User-Agent
> > + Content
> > + Content-Type    数据格式
> > + Content-Encoding 采用什么压缩
> > + Content-Language 返回想要语言
>
> x-Content-Type-Opitions:nosniff   解决低版本ie在不设置返回数据格式下自行返回某一格式数据，为了安全

## redrict

>  状态码301 
>
> > ### 注意    浏览器会记住，返回的时候/就在缓存中，每次请求/都会返回定向的那一个，即使改变服务端的代码也不会成功，除非清理缓存数据，所以要谨慎使用

## CSP (敲完代码再总结 下边写的有点小乱)

> Content-Security-Policy
>
> > 限制资源获取
> > 报告资源获取越权
> > Content-Security-Policy-Report-Only
> > 限制方式
> > default-src  限制全局
> > 制定资源类型
> > \'self\'
> > 加载外部标签也不能执行
> > form-action \'self\'
> > report-uri /report    如果出现

