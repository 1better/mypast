## http...03

## nginx

> https 中间代理没法解析
> host**区分实际要访问哪个服务**
>
> 配置缓存
>
> > proxy_cache_path cache levels = 1:2 keys_zone=
> > my_cache:10m 声明内存大小 
> > levels是否创建二级文件夹
> > 代理缓存要查找缓存
> >
> > 代理缓存 在多个浏览器中直接使用
> > s-maxage = 20
> > private设置后 s-maxage就不生效
> > 只可以浏览器缓存数据
> > Vary 指定头 只有头信息相等才可以缓存

## HTTPS

> 
>
> ![](C:\Users\Administrator\Desktop\front-end\http\images\5.jpg)
>
> 加密   公钥   私钥
> 发起 Client Hello   Random  Cipher Suites 加密套件 生成的秘钥只有客户端和服务端知道   
>
> 生成命令
>
> listen 443
> ssl on;
> ssl_certificate_key certs/localhost-privkey.pem

## Http2

> 优势
>
> > 信道复用 
> > 分帧传输
> > Server Push
> > 每个服务 复用一个tcp连接 在这个tcp上并行传输数据

