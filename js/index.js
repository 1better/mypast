$(function () {
    $('#fullpage').fullpage(
        {
            afterLoad:function (link,index) {
                setTimeout(function () {
                    $(".section").eq(index-1).addClass("animation").siblings('.section').removeClass("animation");
                },200);
            }
        }
    );
    $('.sectionThree-ctitle a').mouseenter(function () {
        $('.sectionThree-ctitle a').removeClass('active');
        $(this).addClass('active');
        $(".sectionThree-content li").eq($(this).parents().index()*2+$(this).index()).removeClass('hide').siblings('li').addClass('hide');
    });
    var totalWidth = $('.sectionFour-content').width();
    var colWidth = totalWidth/7;
    //设定每个为35px
    var smallWidth = 35;
    $('.sectionFour-content li').each(function(index,element){
        $(element).css('left',colWidth*index);
    });

    $('.sectionFour-content li').mouseenter(function () {
        var thisIndex = $(this).index();
        $('.sectionFour-content li').each(function(index,element){
            if(index<=thisIndex){
                $(element).css('left',smallWidth*(index));
            }else if(index>thisIndex){
                $(element).css('left',totalWidth-smallWidth*(7-index));
            }
        });

    });
    $('.sectionFour-content li').mouseleave(function () {
        $('.sectionFour-content li').each(function(index,element){
            $(element).css('left',colWidth*index);
        });
    })
})
