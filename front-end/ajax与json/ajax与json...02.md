## ajax与json...02

## ajax

> 在浏览器中,我们也能够不`刷新页面`,通过`ajax`的方式去获取一些新的内容,类似网页有`微博`,`朋友圈`,`邮箱`等
>
> `Asynchronous Javascript And XML`（异步JavaScript和XML）,他并不是凭空出现的新技术,而是对于现有技术的结合:核心是js对象`XMLHttpRequest`

## XMLHttpRequest

> - 请求的网址,方法`get/post`
> - 提交请求内容`数据`,`请求主体`等
> - 接收响应回来的内容

## 使用方式

> 1. 建立XMLHTTPRequest对象
> 2. 注册回调函数
>    - 当服务器`回应`我们了,我们想要执行什么逻辑
> 3. 使用open方法设置和服务器端交互的基本信息
>    - 设置提交的`网址`,`数据`,`post`提交的一些额外内容
> 4. 设置发送的数据，开始和服务器端交互
>    - 发送数据
> 5. 更新界面
>    - 在注册的回调函数中,获取返回的数据,更新界面
>
> ```javascript
> <script type="text/javascript">
>     // 创建XMLHttpRequest 对象
>     var xml = new XMLHttpRequest();
>     // 设置跟服务端交互的信息
>     xml.open('get','01.ajax.php?name=fox');
>     xml.send(null);    // get请求这里写null即可
>     // 接收服务器反馈
>     xhr.onreadystatechange = function () {
>         // 这步为判断服务器是否正确响应
>         if (xhr.readyState == 4 && xhr.status == 200) {
>             // 打印响应内容
>             alert(xml.responseText);
>         }
>     };
> </script>
> //GET请求
> ```
>
> ```javascript
> <script type="text/javascript">
> 	// 异步对象
>     var xhr = new XMLHttpRequest();
>     // 设置属性
>     xhr.open('post', '02.post.php' );
>     // 如果想要使用post提交数据,必须添加
>     xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded")
>     // 将数据通过send方法传递
>     xhr.send('name=fox&age=18')；
>     // 发送并接受返回值
>     xhr.onreadystatechange = function () {
>     // 这步为判断服务器是否正确响应
>     if (xhr.readyState == 4 && xhr.status == 200) {
>            alert(xhr.responseText);
>          }
>     };
> </script>
> //POST请求
> ```
>
>  

## XMLHttpRequest_API讲解

> ```javascript
> //新版本
> var xml=new XMLHttpRequest();
> //ie5 6
> var xml=new ActiveXObject("Microsoft.XMLHTTP");
> 
> ```
>
> 发送请求
>
> > 方法 open
> >
> > > 规定请求的类型、URL 以及是否异步处理请求。
> > > *method*：请求的类型；GET 或 POST
> > > *url*：文件在服务器上的位置
> > > *async*：true（异步）或 false（同步）
> >
> > 方法 send
> >
> > > 将请求发送到服务器。
> > >
> > > - *string*：仅用于 POST 请求
>
> POST请求注意点
>
> > ```javascript
> > xmlhttp.open("POST","ajax_test.php",true);
> > xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
> > xmlhttp.send("fname=Bill&lname=Gates");
> > ```
> >
> >  
>
> ### **.onreadystatechange事件**
>
> >   onreadystatechange  存储函数（或函数名），每当 readyState 属性改变时，就会调用该函数。
> >
> > readyState 
> >
> > > 存有 XMLHttpRequest 的状态。从 0 到 4 发生变化。
> > >
> > > - 0: 请求未初始化
> > > - 1: 服务器连接已建立
> > > - 2: 请求已接收
> > > - 3: 请求处理中
> > > - 4: 请求已完成，且响应已就绪
> >
> > status
> >
> > > 200: "OK"
> > >
> > > 404: 未找到页面
>
> 服务器响应内容
>
> > | responseText | 获得字符串形式的响应数据。 |
> > | ------------ | -------------------------- |
> > | responseXML  | 获得 XML 形式的响应数据    |