window.onload = function () {
    // document.querySelector('.jd_conleft').addEventListener('touchmove',function(e){
    //     e.preventDefault();
    //
    // });
    // document.querySelector('.jd_conright').addEventListener('touchmove',function(e){
    //     e.preventDefault();
    //
    // });
    /*区域滚动效果*/
    /*条件：一个容器装着一个容器html结构*/
    /*找到大容器*/
    /*子容器大于父容器*/
    new IScroll(document.querySelector('.jd_conleft'),{
        scrollX:false,
        scrollY:true
    });
    new IScroll(document.querySelector('.jd_conright'),{
        scrollX:false,
        scrollY:true
    });
}