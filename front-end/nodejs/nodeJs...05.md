## nodeJs...05

## path模块

> 引入： const path = require ('path');
>
> 方法
>
> > ```javascript
> > path.basename('C:\\temp\\myfile.html') 
> > //返回myfile.html
> > path.basename('/foo/bar/baz/asdf/quux.html', '.html')
> > //返回quux
> > 
> > path.dirname('C:\\temp\\myfile.html')
> > //返回 path 的目录名,如果 path 不是字符串，则抛出 TypeError
> > 
> > path.parse('C:\\temp\\myfile.html')
> > //返回一组对象（对象中有其他属性）
> > 
> > path.isAbsolute(path)
> > //判断是否是绝对路径
> > 
> > **path.join([...paths])**
> > //path.join() 方法使用平台特定的分隔符作为定界符将所有给定的 path 片段连接在一起，然后规范化生成的路径
> > //零长度的 path 片段会被忽略。 如果连接的路径字符串是零长度的字符串，则返回 '.'，表示当前工作目录
> >     
> > _ _dirname     //返回绝对路径（除了文件名字，是动态的（改变位置，它也随之改变） ）
> > _ _filename    //返回绝对路径 (包含文件名，也是动态的)
> > ```
>
> 用法
>
> > readFile('./...')这是相对于node命令的路径，如果切换到上一层再执行也会出错，需要把它设置为绝对路径读取，这样_ _dirname就派上了用场，它是动态获取路径的
> >
> > code
> >
> > ```javascript
> > app.use('/public/', express.static(path.join(__dirname, './public/')))
> > app.use('/node_modules/', express.static(path.join(__dirname, './node_modules/')))
> > //设置为绝对路径（动态获取的）就不用担心换一个运行环境运行不起来了
> > ```

## art-template模板继承和子模板

> 可以像操作{{each  student}} {{$value.username}} {{/each}}这样操作一个页面（一般html头和html尾都一样，这样就简化了写法）
>
> code
>
> > ```html
> > <div>
> >   <h1>公共的头部</h1>
> > </div>           header.html
> > ```
> >
> > ```html
> > <div>
> >   <h1>公共的底部</h1>
> > </div>			footer.html
> > ```
> >
> > ```html
> > <!DOCTYPE html>
> > <html lang="en">
> > <head>
> >   <meta charset="UTF-8">
> >   <title>Document</title>
> >   <link rel="stylesheet" href="/node_modules/bootstrap/dist/css/bootstrap.css">
> >   {{ block 'head' }}{{ /block }}
> > </head>
> > <body>
> >   {{ include './header.html' }}
> >   <!-- 留一个坑，将要留给孩子去填坑 -->
> >   
> >   {{ block 'content' }}
> >     <h1>默认内容</h1>
> >   {{ /block }}
> > 
> >   {{ include './footer.html' }}
> >   <script src="/node_modules/jquery/dist/jquery.js"></script>
> >   <script src="/node_modules/bootstrap/dist/js/bootstrap.js"></script>
> >   {{ block 'script' }}{{ /block }}
> > </body>
> > </html>
> > layout.html
> > ```
> >
> > ```html
> > {{extend './layout.html'}}
> > 
> > {{ block 'head' }}
> > <style>
> >   body {
> >     background-color: skyblue;
> >   }
> > </style>
> > {{ /block }}
> > 
> > {{ block 'content' }}
> > <div>
> >   <h1>index 页面填坑内容</h1>
> > </div>
> > {{ /block }}
> > 
> > {{ block 'script' }}
> > <script>
> >   window.alert('index 页面自己的 js 脚本')
> > </script>
> > {{ /block }}
> > index.html
> > ```
>
> **注意： include，block以及extend的用法**