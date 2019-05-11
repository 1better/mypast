## nodeJs...08

## blog案列中学会内容

## 表单ajax异步处理(jquery)

> > ```javascript
> >  $('#register_form').on('submit', function (e) {
> >        //先阻止默认行为
> >       e.preventDefault()
> >       var formData = $(this).serialize()
> >       $.ajax({
> >         url: '/register',
> >         type: 'post',
> >         data: formData,
> >         dataType: 'json',
> >         success: function (data) {
> >             console.log(data);
> >           var err_code = data.err_code
> >           if (err_code === 0) {
> >             // window.alert('注册成功！')
> >             // 服务端重定向针对异步请求无效
> >             window.location.href = '/'
> >           } else if (err_code === 1) {
> >             window.alert('邮箱或昵称已存在！')
> >           } else if (err_code === 500) {
> >             window.alert('服务器忙，请稍后重试！')
> >           }
> >         }
> >       })
> >     })
> > ```

## session用法

> > ```javascript
> > app.use(session({
> >     // 配置加密字符串，它会在原有加密基础之上和这个字符串拼起来去加密
> >     // 目的是为了增加安全性，防止客户端恶意伪造
> >     secret: 'itcast',
> >     resave: false,
> >     saveUninitialized: false // 无论你是否使用 Session ，我都默认直接给你分配一把钥匙
> > }))
> > ```
> >
> >  使用
> >
> > > ```javascript
> > > // 注册成功的时候，使用 Session 记录用户的登陆状态
> > > req.session.user = user
> > > //页面渲染时候
> > > router.get('/', function (req, res) {
> > >      res.render('index.html',{
> > >         user: req.session.user
> > >     });
> > > });
> > > //然后再通过模板引擎来渲染表头的内容
> > > {{if user}}
> > > ...
> > > {{else}}
> > > ...
> > > {{/if}}
> > > ```

## MD5加密

> > 先引入
> >
> > ```javascript
> > var md5 = require('blueimp-md5')
> > ```
> >
> > 使用
> >
> > ```javascript
> > body.password = md5(md5(body.password))
> > //然后再插入到数据库中去
> > ```

## 有能力后再看这个

> ```javascript
> router.post('/register', async function (req, res) {
>   var body = req.body
>   try {
>     if (await User.findOne({ email: body.email })) {
>       return res.status(200).json({
>         err_code: 1,
>         message: '邮箱已存在'
>       })
>     }
> 
>     if (await User.findOne({ nickname: body.nickname })) {
>       return res.status(200).json({
>         err_code: 2,
>         message: '昵称已存在'
>       })
>     }
> 
>     // 对密码进行 md5 重复加密
>     body.password = md5(md5(body.password))
> 
>     // 创建用户，执行注册
>     await new User(body).save()
> 
>     res.status(200).json({
>       err_code: 0,
>       message: 'OK'
>     })
>   } catch (err) {
>     res.status(500).json({
>       err_code: 500,
>       message: err.message
>     })
>   }
> })
> ```
>
> 