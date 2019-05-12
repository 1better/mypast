$(function () {
    banner();
    initMobileTab();
})
var banner = function () {
    var getData = function(callback) {8
        if(window.data){
            callback && callback(window.data);
        }else {
            $.ajax(
                {
                    type: 'get',
                    url: 'js/data.json',
                    dataType: 'json',
                    success: function (data) {
                        window.data = data;
                        callback && callback(window.data);
                    }
                } );
        }
    }
    var render = function () {
        getData(function (data) {
            var isMobile = $(window).width() < 768 ? true : false;
            var pointHtml = template('pointTemplate',{list:data});
            var imageHtml = template('imgTemplate',{list:data,isMobile:isMobile});
            $('.carousel-indicators').html(pointHtml);
            $('.carousel-inner').html(imageHtml);
        })
    }
    $(window).on('resize',function () {
        render();
        /*通过js主动触发某个事件*/
    }).trigger('resize');

    var start = 0; var distance = 0;var isMove = false;
    $('.wjs_banner').on('touchstart',function (e) {
        start = e.originalEvent.touches[0].clientX;
    }).on('touchmove',function (e) {
        distance = e.originalEvent.touches[0].clientX - start;
        isMove = true;
    }).on('touchend',function (e) {
        console.log(distance);
        if(distance>50&&isMove){
            console.log(1)
            $('.carousel').carousel('prev');
        }else if(distance<-50&&isMove){
            $('.carousel').carousel('next');
        }
        start = 0;
        distance = 0;
        isMove = true;
    })
}
var initMobileTab = function () {
    var width = 0;
    $('.wjs_product .nav-tabs li').each(function (index,item) {
        width += $(item).outerWidth(true);
    })
    $('.wjs_product .nav-tabs').width(width);
    new IScroll($('.wjs_product .nav-tabs-parent')[0],{
        scrollX:true,
        scrollY:false,
        click:true
    })
}