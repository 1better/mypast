## node使用安装工具流程

```shell
npm init -y

npm i -S express
#安装md5加密
npm i -S blueimp-md5

npm install -S jquery
#安装session中间件
npm install -S express-session
npm install --save art-template
npm install --save express-art-template

npm install body-parser

#    生成package.json
#	 安装express框架
#    安装art-template模板以及附加 express框架中的模板
#    安装body-parser操作post方式的数据
```

## 配置

```javascript
//express框架
let express = require('express');
//配置路由模块(当前同目录下的router.js)
let router = require('./router');
//bodyParser中间件
let bodyParser = require('body-parser');

let app = express();

//设置art-template模板引擎,默认是views里边的文件，第一个参数是后缀，即访问index.html类似的文件
app.engine('html', require('express-art-template'));
// 默认就是 ./views 目录
app.set('views', path.join(__dirname, './views/')) 

//把/public/项变为静态项（相当于http.indexOf('/public/)===0,请求里边的文件就不用担心路径问题了）
app.use('/public/',express.static('./public/'));

//能够接受表单数据
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//express框架不支持session，这是安装好中间件时进行的设置
app.use(session({
  // 配置加密字符串，它会在原有加密基础之上和这个字符串拼起来去加密
  // 目的是为了增加安全性，防止客户端恶意伪造
  secret: 'what',
  resave: false,
  saveUninitialized: false // 无论你是否使用 Session ，我都默认直接给你分配一把钥匙
}))

//把路由容器挂载到 app 服务中
app.use(router)

//route.js中的配置
var express = require('express');
var router = express.Router();
//最后一定不要忘记添加下面！！
module.exports = router;
```

## 使用

```javascript
//模板引擎渲染
res.render('index.html', {
        comments:comments
    });
//get请求方式的对象内容
req.query
//post请求方式的对象内容
req.body
//重定向
res.redirect('/')

//使用md5以及session
var md5 = require('blueimp-md5');
var session = require('express-session');
//md5 
pwd = md5(md5(pwd));
```

