## ajax与json...03

## XML

> **xml是纯文本** `XML`是纯文本,这点跟`HTML`很像,所以我们可以用任何的`文本编辑`软件去打开编辑它
>
> 语法
>
> > **XML声明** 第一行是XML的声明,指定`XML`版本(1.0)以及使用的编码(UTF-8万国码)
> > **自定义标签** `XML`中没有默认的标签,所有的标签都是我们定义者`自定义的`
> > **双标签** `XML`中没有单标签,都是双标签
> > **根节点** `XML`中必须有一个根节点,所有的子节点都放置在根节点下
> > **XML属性** 跟`HTML`一样,`XML`的标签里面也能够添加属性`type = 'text'`,但是不建议这样用,而是使用标签的方式来表述内容(下半部分代码)
>
> xml解析
>
> > 因为`XML`就是标签,所以直接用解析`Dom`元素的方法解析即可

## JSON语法

> 语法规则
>
> > - 数据在键值对中
> > - 数据由逗号分隔
> > - 花括号保存对象
> > - 方括号保存数组
>
> **数据类型**
>
> > 下列内容 无论 键 值 都是用双引号包起来
> >
> > - 数字（整数或浮点数）
> > - 字符串（在双引号中）
> > - 逻辑值（true 或 false）
> > - 数组（在方括号中）
> > - 对象（在花括号中）
> > - null
> >
> > ```json
> > {
> >   "name":"fox",
> >   "age":"18",
> >   "sex":"true",
> >   "car":null
> > }
> > // 数组 
> > [
> >   {
> >       "name":"小小胡",
> >       "age":"1"
> >   },
> >   {
> >       "name":"小二胡",
> >       "age":"2"
> >   }
> > ]
> > ```
> >
> >  
>
> 转化
>
> > JSON.parse()  与 JSON.stringify()
>
>  

## AJAX的封装

> ```javascript
> function getAjax(obj){
>   var xhr = new XMLHttpRequest();
>   if(obj.type==='get'){
>     xhr.open(obj.type,obj.url+'?'+obj.data);
>     if(obj.data===''||undefined){
>       xhr.open(obj.type,obj.url);
>     }
>     xhr.send();
>   }
>   else {
>     xhr.open(obj.type,obj.url);
>     xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
>     xhr.send(obj.data);
>   }
>  
>   xhr.onreadystatechange = function(){
>     if(xhr.readyState ===4 && xhr.status ==200){
>       obj.success(xhr.responseText);
>     }
>   }
> }
> //出现了 405的 错误 POST请求不被允许，应该是没有开服务器的原因
> ```
>
>  

## jQuery的ajax

> $.ajax
>
> > ```javascript
> > /*
> > 	常见参数:
> > 		url:请求的地址
> > 		success:请求成功的回调函数
> > 		type:不写是get 可以指定 get,post
> > 		dataType:数据的类型
> > 		data:发数据 可以写js对象
> > 		beforeSend:发送之前调用的匿名函数
> > 		可以return false 阻止该次请求
> > 		验证用户的数据 是否填了
> > 		error:请求失败以后 会调用
> > */
> > 			$.ajax({
> > 				url:'03.jq_ajax123123123.php',
> > 				success:function(data){
> > 					console.log(data);
> > 				},
> > 				type:'post',
> > 				dataType:'json',
> > 				data:{"name":"干锅花菜","skill":"上天"},
> > 				beforeSend:function(){
> > 					console.log('发送之前调用');
> > 					// return false;
> > 				},
> > 				error:function(){
> > 					console.log('请求失败了');
> > 				}
> > 			})
> > 		});
> > ```
> >
> >  
>
> $.get
>
> > ```javascript
> > /*
> > 	参数1:url
> > 	参数2:发送的数据 支持 直接写js对象的方式
> > 	参数3:回调函数
> > 	参数4:从服务端获取的 数据类型 可以不写,如果写为json jq内部 会帮我们进行一个 JSON.parse()的转化 
> > 	注意
> > 	如果type 为json 
> > 	并且服务端返回的就是 json格式字符串
> > 	jq内部 会帮助我们自动转化
> > 	在回调函数中 获取的 实参 就是转化完成的 js对象 直接使用即可
> > 
> > 	参数的 顺序 是更换的
> > 	但是 如果 把data 放到后面 会出现 无法传递数据的问题,
> > 	所以 不要擅自更换 严格按照 jq文档中的 顺序 进行使用
> > 			*/
> > $.get('01.jq_get.php',{name:"jack",age:18},function (data) {
> > 			// 直接打印结果
> > 		console.log(data);
> > 			// 打印属性值
> > 		console.log(data.name);
> > 		console.log(data.color);
> > },'json');
> > ```
> >
> >  
>
> $.post
>
> > ```javascript
> > /*
> > 	参数1:url
> > 	参数2:发送的数据 支持 直接写js对象的方式
> > 	参数3:回调函数
> > 	参数4:从服务端获取的 数据类型 可以不写,如果写为json jq内部 会帮我们进行一个 JSON.parse()的转化 
> > 			*/
> > $.post('02.jq_post.php',{name:"榴莲炒饭",skill:"熏人"},function(data){
> > 	console.log(data);
> > },'json')
> > ```
> >
> > 

## 模板引擎的封装

> ```html
> <script id='template' type='text/html'>
>         <p>{{name}}</p>
>         <p>{{age}}</p>
>         <p>{{from}}</p>
>     </script>
>  <script>
>     var str = document.querySelector('#template').innerHTML
>     var obj = {
>       name: 'zs',
>       age: 18,
>       from: '南方'
>     }
>     var reg = /\{\{(\S+)\}\}/
>     console.log(reg.exec(str))
>     while (match = reg.exec(str)) {
>       var mathString = match[0]
>       // 子表达式匹配到的字符串
>       var subString = match[1];
>       // 打印文本内容0
>       // console.log("循环中:" + str);
>       // 替换字符串的内容
>       var str = str.replace(mathString, obj[subString]);
>     }
>     console.log(str)
>     document.querySelector('#app').innerHTML = str
>   </script>
> ```
>
> 



## 同源以及跨域

> 同源策略是浏览器的一种安全策略，所谓同源是指，域名，协议，端口完全相同
>
> 跨域方案
>
> > - 顶级域名相同的可以通过domain.name来解决，即同时设置 domain.name = 顶级域名（如example.com）
> > - document.domain + iframe
> > - window.name + iframe
> > - location.hash + iframe
> > - window.postMessage()
>
> ### JSONP
>
> > - 注意只能够通过`get`方法
> >
> >   (注：后边node学完之后有实现) 

## 瀑布流

> 在后边以代码形式整理吧 （思路也不难）

## 