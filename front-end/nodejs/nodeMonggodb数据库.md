## nodeMonggodb数据库

## mongdb数据库操作

> ```shell
> #mongodb   默认使用执行monggodb命令所处盘符的data/db存储目录
> mongdb
> # 修改默认存储目录
> mongd --dbpath = 数据存储目录路径
> 
> #停止
> ctrl+c关闭或者直接关闭命令行窗口
> 
> #默认连接本机MongDB服务
> mongo
> 
> #连接状态退出连接
> exit
> 
> #显示数据库
> show dbs
> 
> #查看当前操作的数据库
> db
> 
> #切换到制定数据库（没有插入数据的时候会创建）
> use  数据库名称
> 
> #插入数据
> db.students.insertOne({"name":"jack"})
> 
> #显示集合
> show collections
> 
> #查找所有元素
> db.students.find()
> 
> ```

## 通过node连接Mongodb

> 使用官方Mongodb包
>
> > github上的mongdb node（原生语法操作Mongodb数据库）
>
> 使用第三方包mongoose来操作MongDB数据库
>
> > ```shell
> > #下载插件
> > npm install mongoose
> > ```
> >
> > 
>
> > ```javascript
> > var mongoose = require('mongoose');
> > 
> > // 连接 MongoDB 数据库 
> > /*这一句已经在5.0弃用
> > mongoose.connect('mongodb://localhost/test', { useMongoClient: true });
> > */
> > //使用这个
> > mongoose.connect('mongodb://localhost/test',{ useNewUrlParser: true })
> > 
> > //MongoDB 是动态的，非常灵活，只需要在代码中设计你的数据库就可以了
> > // mongoose 这个包就可以让设计编写过程变的非常的简单
> > 
> > //设计文档结构（约束一下数据）
> > var userSchema = new Schema({
> > username: {
> > type: String,
> > required: true // 必须有
> > },
> > password: {
> > type: String,
> > required: true
> > },
> > email: {
> > type: String
> > }
> > })
> > // 3. 将文档结构发布为模型
> > //    mongoose.model 方法就是用来将一个架构发布为 model
> > //    第一个参数：传入一个大写名词单数字符串用来表示你的数据库名称
> > //      mongoose 会自动将大写名词的字符串生成 小写复数 的集合名称
> > //      例如这里的 User 最终会变为 users 集合名称
> > //    第二个参数：架构 Schema
> > //   
> > //    返回值：模型构造函数
> > var User = mongoose.model('User', userSchema)
> > 
> > //当有了模型构造函数之后，就可以使用这个构造函数对 users 集合中的数据了（增删改查）
> > 
> > //实例化一个user
> > var admin = new User({
> > username: 'zs',
> > password: '123456',
> > email: 'admin@admin.com'
> > })
> > ```
>
> ### 增删改查(这些方式只是一部分)
>
> > 增加
> >
> > > ```javascript
> > > var admin = new User({
> > >   username: 'zs',
> > >   password: '123456',
> > >   email: 'admin@admin.com'
> > > })
> > > 
> > > admin.save(function (err, ret) {
> > >   if (err) {
> > >     console.log('保存失败')
> > >   } else {
> > >     console.log('保存成功')
> > >     console.log(ret)
> > >   }
> > > })
> > > ```
> >
> > 查询(3种方式)
> >
> > > ```javascript
> > > User.find(function (err, ret) {
> > > if (err) {
> > > console.log('查询失败')
> > > } else {
> > > console.log(ret)
> > > }
> > > })
> > > 
> > > User.find({
> > > username: 'zs'
> > > }, function (err, ret) {
> > > if (err) {
> > > console.log('查询失败')
> > > } else {
> > > console.log(ret)
> > > }
> > > })
> > > 
> > > User.findOne({
> > > username: 'zs'
> > > }, function (err, ret) {
> > > if (err) {
> > > console.log('查询失败')
> > > } else {
> > > console.log(ret)
> > > }
> > > })
> > > 
> > > User.findById(id,function(err){
> > >  if(err){
> > >  }
> > > })
> > > 
> > > user.findOne({
> > >       	//有一个满足条件就返回data
> > >         $or: [{
> > >             email: body.email
> > >         },
> > >             {
> > >                 nickname: body.nickname
> > >             }
> > >         ],function(err,data){
> > > 
> > >         }
> > >     })
> > > ```
> >
> > 删除(2种方式)
> >
> > > ```javascript
> > > User.remove({
> > > username: 'zs'
> > > }, function (err, ret) {
> > > if (err) {
> > >  console.log('删除失败')
> > > } else {
> > >  console.log('删除成功')
> > >  console.log(ret)
> > > }
> > > })
> > > User.findByIdAndRemove()
> > > ```
> >
> > 更新
> >
> > > ```javascript
> > > User.findByIdAndUpdate('5a001b23d219eb00c8581184', {
> > > password: '123'
> > > }, function (err, ret) {
> > > if (err) {
> > >  console.log('更新失败')
> > > } else {
> > >  console.log('更新成功')
> > > }
> > > })
> > > User.findOne({
> > >     //这个是表示email或者nickname只要有一个能查询成功就说明邮箱或者名称已经存在
> > >     $or: [{
> > >         email: body.email
> > >       },
> > >       {
> > >         nickname: body.nickname
> > >       }
> > >     ]
> > > }，function(err,data){
> > >     
> > > })
> > > ```
> > >
> > > 

## 自己电脑操作

> ```shell
> #连接
> mongod --dbpath F:\mongodb\data
> #开启（重新打开一个命令行窗口）
> mongo
> #离开
> exit
> ```
>
> 