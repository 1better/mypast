## mobile...4

## less注意点

> + less无法在浏览器端直接使用
>
> + 浏览器不识别
>
> + 必须解析成css代码
>
> + 通过less解析插件（javascript）
>
> + 引入less文件需要加上 type="text/less"
>
> + less.watch(); 无刷新预览样式
>
> + 以http形式打开网页预览
>
>   ### less很好用，以后要多用用！
>
>   使用难点
>
>   > （类似递归）实现@media的多组样式
>   >
>   > code
>   >
>   > > .adapterMinxins(@index) when (@index>0){
>   > >
>   > > ​	@media(min-width: extract(@adapterList,@index)){
>   > >
>   > > ​	html {
>   > >
>   > > ​	font-size = @baseFont / @psDwidth * extract(@adaterList,@index);
>   > >
>   > > }
>   > >
>   > > ​	
>   > >
>   > > }
>   > >
>   > > ​	.adapterMinxin(@index-1)
>   > >
>   > > }
>   >
>   > 调用
>   >
>   > > .@adapterMinxins(@len)
>   > >
>   > > >  @len:length(@adapterList)

## rem适配方式

> rem的大小是基于html元素的字体大小
>
> rem布局
>
> > 通过控制html上的字体大小去控制页面上所有已rem为单位的基准值控制尺寸
>
> 适配方案rem：宽度和高度都能做到适配（等比缩放)
>
> > 把页面上px单位转换成rem单位
> >
> > 页面制作的时候 psd 上的量取的px转成rem使用
> >
> > **换算公式：当前rem基准值 = 预设的基准值 / 设计稿宽度 * 当前设备的宽度**
> >
> > 怎么去改变 （js换算，媒体查询推荐）

