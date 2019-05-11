## nodeJs...03

## 重定向

> + 301  永久重定向     浏览器会记住
> + 302  临时重定向     浏览器不记住

## node中的模块系统

> 在 Node 中，每个模块内部都有一个自己的 module 对象
> 该 module 对象中，有一个成员叫：exports 也是一个对象
> 果你需要导出成员，只需要把导出的成员挂载到 module.exports 中
>
> exports===moudle.exports 内容类型都一样
>
> 谁来 require 我，谁就得到 module.exports
> exports和module中的module.exports指向同一段内存，最终都会返回module.exports，即如果exports重新定义（exports={}),之后添加的数据就不在模块中。（即exports和module.exports不相等）
>
> 使用注意点
>
> > + 导出多个成员：exports.xxx = xxx
> > + 导出多个成员也可以：module.exports = {}
> > + 导出单个成员：module.exports

## 模块加载

> 1. 先从缓存中加载，即加载一遍后就记住这个模块了，下次直接用
>
> 2. 加载核心模块
>
> 3. 加载路径中的模块
>
> 4. **加载第三方模块**
>
>    > node_modules中的art-template的package.json
>    >
>    > 的main方法
>    >
>    > 找不到会默认是index.js
>    >
>    > 如果还是找不到，去往上一级查找，知道找到根目录为止（类似于作用域链）

## npm指令

> ```shell
> #安装包
> npm install art-template
> ###安装带依赖项的包（package.json中会有依赖注入(dependencies)）
> npm install art-template--save / npm insatll --save art-template 
> #安装全局变量
> npm install --global 
> #删除
> npm uninstall (后边和安装一样)
> #简写
> i install  un unstall -g --global -S --save
> #填写生成package.json
> npm init
> #快速生成package.json
> npm init -y
> #换成淘宝镜像（持久设置）
> npm config set registry http://registry.npm.taobao.org
> ```
>
> package.json 包描述文件
>
> > dependencies 选项的作用
> >
> > 如果里边有依赖包，即使删除node_modules,重新下载也会有这些第三方模块，所以应该每次建立项目都要有一个package.json

