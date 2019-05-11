## javaScript7知识点

## 歌曲管理的封装

> 包括原型，constructor以及面向对象的思维方式
>
> 核心代码如下（以后要常看，别忽略这一重要内容）
>
> ```
> //歌曲管理的构造函数
> function Mp3(songs) {
>     this.songList = songs || [];
>     this._init();
> }
> Mp3.prototype = {
>     constructor: Mp3,
>     _init:function () {
>         this.render();
>     },
>     render:function () {
>         var arr = [];
>         var str1 = '';
>         this.songList.forEach((item)=>{
>             str1 = '<div class="songslist-single">'+
>                 '<div class="songslist-name">'+ item.name + '</div>'+
>                 '<div class="songslist-singer">'+ item.singer +'</div>'+
>                 '</div>'
>             arr.push(str1);
>         });
>         var str = arr.join('');
>         // console.log(str);
>         var c = document.getElementById('c');
>         c.innerHTML = str;
>     },
>     addSong:function (songName,singer) {
>         var temp = {name:songName,singer:singer};
>         this.songList.push(temp);
>         this.render();
>     },
>     removeSong:function (songName){
>         var index = this.selectSong(songName);
>         if(index==-1){
>             alert("没有该歌曲，无法删除");
>             return ;
>         }else {
>             this.songList.splice(index,1);
>             this.render();
>         }
>     },
>     updateSong:function(songName,singer){
>         var index = this.selectSong(songName);
>         if(index==-1){
>             alert("没有该歌曲，无法修改");
>             return ;
>         }else {
>            this.songList[index].singer=singer;
>             this.render();
>         }
>     },
>     selectSong:function (songName) {
>         var index = this.songList.findIndex(item=>{
>             if(item.name==songName)
>                 return true;
>         })
>         return index;
>     }
> }
> ```

## tab栏切换

> 注意this的指向，又忘记setInterval指向的是谁了
>
> 核心代码如下（以后要简写，多使用箭头函数）
>
> ```
> function Tab(content) {
>     this.tabMenus = null;
>     this.tabMains = null;
>     this.index = 0;
>     if(content){
>         this._init(content);
>     }
> }
> Tab.prototype = {
>     constructor:Tab,
>     _init(content){
>         this._initElement(content);
>         this._initChange();
>         if(content.auto){
>             this.autoPlay();
>         }
>     },
>     _initElement(content) {
>         let tabMenus = document.getElementById(content.tabMenu);
>         let tabMains = document.getElementById(content.tabMain);
>         this.tabMenus = tabMenus.children;
>         this.tabMains = tabMains.children;
>     },
>     _initChange(){
>         for(let i=0;i<this.tabMains.length;i++) {
>             this.tabMenus[i].onclick = () => {
>                 this.index = i;
>                 this.change(i)
>             };
>         }
>     },
>     change(index){
>         for(let i=0;i<this.tabMains.length;i++){
>             this.tabMenus[i].className = 'tab-item';
>             this.tabMains[i].className = 'main';
>         }
>         this.tabMenus[index].className += ' active';
>         this.tabMains[index].className += ' selected';
>     },
>     autoPlay(){
>         var that = this;
>         setInterval(function () {
>             that.index++;
>             if(that.index>3){
>                 that.index = 0;
>             }
>             that.change(that.index);
>         },2000);
>     }
> }
> ```

# 这只是开始，你的路还长，努力向前方奔吧！！！