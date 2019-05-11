## nodeJs...06

## 中间件

> 理解: 处理请求的，本质就是个函数 相当于从自来水厂出来的水经过一系列净化过程能得到引用水 ，这些净化过程就是中间件
>
> 匹配过程
>
> > 1. 请求进来，会从第一个中间件开始进行匹配
> > 2. 如果请求进入中间件之后，没有调用 next 则代码会停在当前中间件
> > 3. 如果调用了 next 则继续向后找到第一个匹配的中间件
> > 4. 如果不匹配，则继续判断匹配下一个中间件
>
> 中间件本身是一个方法，该方法接收三个参数：
>
> > + Request    请求对象
> > + Response 响应对象
> > + next     下一个中间件
> >
> > 当一个请求进入一个中间件之后，如果不调用 next 则会停留在当前中间件
> > 所以 next 是一个方法，用来调用下一个中间件的
> > 调用 next 方法也是要匹配的（不是调用紧挨着的那个）
>
> 类型
>
> > 直接就可以匹配的
> >
> > > ```javascript
> > > app.use(function (req, res, next) {
> > > console.log('1')
> > > next()
> > > })
> > > ```
> >
> > 以xx类型开头的url匹配的
> >
> > > ```javascript
> > > app.use('/a', function (req, res, next) {
> > >   console.log('a')
> > >   next()
> > > })
> > > ```
> >
> > 严格匹配请求方法和请求路径的中间件 (get 和 post)
> >
> > > ```javascript
> > > app.get('/', function (req, res, next) {
> > >   console.log('/')
> > >   next()
> > > })
> > > ```
> >
> > 如果没有能匹配的中间件，则 Express 会默认输出：Cannot GET 路径
>
> 处理统一的错误
>
> > ```javascript
> > app.get('/', function (req, res, next) {
> >   fs.readFile('.d/sa./d.sa/.dsa', function (err, data) {
> >     if (err) {
> >     // return res.status(500).send('Server Error')
> >     // 当调用 next 的时候，如果传递了参数，则直接往后找到带有 四个参数的应用程序级别中间件
> >     // 当发生错误的时候，我们可以调用 next 传递错误对象
> >     // 然后就会被全局错误处理中间件匹配到并处理之
> >       next(err)
> >     }
> >   })
> > })
> > ```
> >
> > 处理
> >
> > ```javascript
> > app.use(function (err, req, res, next) { //四个参数
> >   res.status(500).send(err.message)
> > })
> > ```
> >
> > 