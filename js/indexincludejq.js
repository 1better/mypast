/**
 * Created by Administrator on 2019/1/21.
 */
$(document).ready(function () {
    // 设定总方法调用
    // $('li.shopBack').mouseenter(function () {
    //     $(this).children('div').removeClass('hide');
    // });
    // $('li.shopBack').mouseleave(function () {
    //     $(this).children('div').addClass('hide');
    // });
    // console.log($('li.serve'));
    //
    // $('li.serve').mouseenter(function () {
    //     console.log($(this).children('.downServe'));
    //     $(this).children('div').removeClass('hide');
    // });
    // $('li.serve').mouseleave(function () {
    //     $(this).children('div').addClass('hide');
    // });
    // console.log($('li.shopBack>.downShow'));
    function appearAndDelete(ele) {
        ele.mouseenter(function () {
            $(this).children('div').removeClass('hide');
        })
        ele.mouseleave(function () {
            $(this).children('div').addClass('hide');
        })
    }
    appearAndDelete($('li.shopBack'));
    appearAndDelete($('.serve'));
    appearAndDelete($('.downList'));
    appearAndDelete($('.erweima-right'));


    // 对下方进行总方法调用
    // var timer = null;
    // var timer2 = null;
    // var i = 1;
    // var j = 1;
    // function move() {
    //     timer = setInterval(function () {
    //         $('.andOrnament-center1').eq(i).fadeIn(1500).siblings('.andOrnament-center1').fadeOut(1500);
    //         $('.changeNo').eq(i).addClass('changeBlack').siblings('.changeNo').removeClass('changeBlack');
    //         i++;
    //         if(i>$('.andOrnament-center1').length - 1 ){
    //             i = 0;
    //         }
    //     },3000);
    // }
    // function move2() {
    //     timer = setInterval(function () {
    //         $('.andOrnament-center2').eq(j).fadeIn(1500).siblings('.andOrnament-center2').fadeOut(1500);
    //         $('.changeNo2').eq(j).addClass('changeBlack').siblings('.changeNo2').removeClass('changeBlack');
    //         j++;
    //         if(j>$('.andOrnament-center2').length - 1 ){
    //             j = 0;
    //         }
    //     },3000);
    // }
    // move();
    // $('.andOrnament-center').mouseenter(function () {
    //     clearInterval(timer);
    // })
    // $('.andOrnament-center').mouseleave(function () {
    //     move();
    // })
    // $('.changeNo').mouseenter(function () {
    //     clearInterval(timer);
    //     i = $(this).index();
    //     $('.andOrnament-center1').eq(i).fadeIn(1500).siblings('.andOrnament-center1').fadeOut(1500);
    //     $('.changeNo').eq(i).addClass('changeBlack').siblings('.changeNo').removeClass('changeBlack');
    // })
    // move2();
    // $('.andOrnament-center2').mouseenter(function () {
    //     clearInterval(timer2);
    // })
    // $('.andOrnament-center2').mouseleave(function () {
    //     move2();
    // })
    // $('.changeNo2').mouseenter(function () {
    //     clearInterval(timer2);
    //     j = $(this).index();
    //     $('.andOrnament-center2').eq(j).fadeIn(1500).siblings('.andOrnament-center2').fadeOut(1500);
    //     $('.changeNo2').eq(j).addClass('changeBlack').siblings('.changeNo2').removeClass('changeBlack');
    // })
    // 下边是总函数 上边代码的升级版,好像有点bug。。。用的次数太多，，，
    function moveA(ele,i) {
        clearInterval(ele.timer);
        var index = 1;
        ele.timer = setInterval(function () {
            ele.eq(index).fadeIn(1500).siblings('div').fadeOut(1500);
            i.eq(index).addClass('changeBlack').siblings('i').removeClass('changeBlack');
            index++;
            if(index>ele.length - 1 ){
                index = 0;
            }
        },3000);
        ele.parent().mouseenter(function () {
            clearInterval(ele.timer);
        });
        ele.parent().mouseleave(function () {
            moveA(ele,i);
        });
        i.mouseenter(function () {
            clearInterval(ele.timer);
            ele.eq($(this).index()).fadeIn(1500).siblings('div').fadeOut(1500);
            i.eq($(this).index()).addClass('changeBlack').siblings('i').removeClass('changeBlack');
        })
        i.mouseleave(function () {
            moveA(ele,i);
        })

    }
    moveA($('.andOrnament-center1'),$('.changeNo'),true);
    moveA($('.andOrnament-center2'),$('.changeNo2'),true);
});