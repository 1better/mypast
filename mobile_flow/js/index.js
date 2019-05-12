// 实现效果
window.onload = function () {
    search();
    banner();
    skillTime();
};
var search = function () {
    var  jdSearchBox = document.querySelector('.jd_search_box');
    var height = document.querySelector('.jd_banner').offsetHeight;
    window.onscroll = function () {
        var opacity = 0;
        var scrollTop = document.body.scrollTop;
        opacity = 0.85*scrollTop/height;
        jdSearchBox.style.backgroundColor = 'rgba(201,21,35,'+opacity+')';
    }
}
function setTranstion(imageBox,translateX){
    imageBox.style.transition = 'all 0.2s';
    imageBox.style.webkitTransition = 'all 0.2s';
    imageBox.style.transform = 'translateX('+ translateX+'px)';
    imageBox.style.webkitTransform = 'translateX('+ translateX+'px)';
}
function removeTransion(imageBox,translateX) {
    imageBox.style.transition = 'none';
    imageBox.style.webkitTransition = 'none';
    imageBox.style.transform = 'translateX('+ translateX+'px)';
    imageBox.style.webkitTransform = 'translateX('+ translateX+'px)';
}

var banner = function () {
    var banner = document.querySelector('.jd_banner');
    //先无缝滚动
    var index = 0;
    var imageBox = banner.querySelector('ul:first-child');
    var cicleLi = banner.querySelector('ul:last-child').querySelectorAll('li');
    var imageLi = imageBox.querySelectorAll('li');
    var width = imageLi[0].offsetWidth;
    var timer = setInterval(function () {
        index++;
        var translateX = -index*width;
        setTranstion(imageBox,translateX);
    },1000)
    imageBox.addEventListener('transitionend',function () {
        if(index>8){
            index = 1;
        }else if(index<=0){
            index = 8;
        }
        for(var i=0;i<cicleLi.length;i++){
            cicleLi[i].classList.remove('selected');
        }
        // console.log(index-1);
        cicleLi[index-1].classList.add('selected');
        var translateX = -index*width;
        removeTransion(imageBox,translateX);
    });
    var start = 0;
    var distance = 0;
    imageBox.addEventListener('touchstart',function (e) {
        clearInterval(timer);
        start = e.touches[0].clientX;
    });
    imageBox.addEventListener('touchmove',function (e) {
        distance = e.touches[0].clientX - start;
        var translateX = -index*width+distance;
        removeTransion(imageBox,translateX);

    })
    imageBox.addEventListener('touchend',function (e) {
        if(distance>0 && distance>width/3){
            index--;
        }else if(distance<0 && Math.abs(distance)>width/3){
            index++;
        }
        if(index>8){
            index = 1;
        }else if(index<0){
            index = 8;
        }
        setTranstion(imageBox,-index*width);
        clearInterval(timer);
        timer = setInterval(function () {
            index++;
            var translateX = -index*width;
            setTranstion(imageBox,translateX);
        },1000)
    })

}
var skillTime = function () {
    var time = 2*60*60;
    var span = document.querySelectorAll('.sk .time span');
    var h,m,s;
    var timer = setInterval(function () {
        h = Math.floor(time/3600);
        m = Math.floor((time-h*3600)/60);
        s = time%60;
        span[1].innerHTML = h;
        m1 = Math.floor(m/10);
        m2 = m%10;
        span[3].innerHTML = m1;
        span[4].innerHTML = m2;
        s1 = Math.floor(s/10);
        s2 = s%10;
        span[6].innerHTML = s1;
        span[7].innerHTML = s2;
        time--;
        if(time<=0)
            clearInterval(timer);
    },1000);
}


