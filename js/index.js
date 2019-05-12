/**
 * Created by Administrator on 2019/1/19.
 */
window.onload = function () {
    //今日必抢的时间改变
    var robbedTime = document.querySelector('.robbed-left-bottom');
    var iArr = robbedTime.querySelectorAll('i');
    var timer = null;
    var timeS = 24*3600;
    clearInterval(timer);
    getTime();
    var timer = setInterval(function () {
        getTime()
    },1000);
    function getTime() {
        var todayTime = new Date();
        var hour = todayTime.getHours();
        var minute = todayTime.getMinutes();
        var second = todayTime.getSeconds();
        var sum = hour*3600+minute*60+second;
        var nowHour = Math.floor((timeS-sum)/3600);
        var nowMinute = Math.floor((timeS-sum)/(24*60));
        var nowSecond = (timeS-sum)%60;
        nowHour = (nowHour<10)? '0'+nowHour:nowHour;
        nowMinute = (nowMinute<10)? '0'+nowMinute:nowMinute;
        nowSecond = (nowSecond<10)? '0'+nowSecond:nowSecond;
        iArr[0].innerHTML = nowHour;
        iArr[1].innerHTML = nowMinute;
        iArr[2].innerHTML = nowSecond;
    }
    var leader = 0;
    //页面跳转
    window.onscroll = function () {
        leader = scroll().top;
        if(leader>800)
        {
            arrowTop.style.display = 'block';
        }
        else {
            arrowTop.style.display = 'none';
        }
    }
    // 封装屏幕宽度,保证兼容性 还是不太会，多看看学学
    function scroll() {
        if(window.pageYOffset!=null) {
            return {
                left: window.pageXOffset ,
                top: window.pageYOffset
            }
        }
        else if (document.compatMode === 'CSS1Compat') {
            return {
                left: document.documentElement.scrollLeft,
                top: document.documentElement.scrollTop
            }
        }
        else {
            return {
                left:document.body.scrollLeft,
                top: document.body.scrollTop
            }
        }
    }
    //页面跳转的缓动框架
    function animateSlow(leader,target) {
        var timer = null;
        clearInterval(timer);
        timer = setInterval(function () {
            var step = (target-leader)/10;
            step = step>0 ? Math.ceil(step):Math.floor(step);
            leader = leader + step;
            window.scrollTo(0,leader);
            if(Math.abs(step) >= Math.abs(target-leader)){
                console.log(1);
                window.scrollTo(0,target);
                clearInterval(timer);
            }
        },50);
    }
    //执行页面跳转
    var arrowTop = document.getElementById("arrow-top");
    arrowTop.onclick = function () {
        animateSlow(leader,0);
    }
    //匀速框架
    function animate(ele,target) {
        var speed = 10;
        clearInterval(ele.timer);
        ele.timer = setInterval(function () {
            speed = target>ele.offsetLeft ? 10:-10;
            ele.style.left = ele.offsetLeft + speed + 'px';
            if(Math.abs(speed)>Math.abs(target-ele.offsetLeft)){
                ele.style.left = target + 'px';
                clearInterval(ele.timer);
            }
        },10);
    }


    //写一个轮播的总方法
    function animateUlRight(ul,li) {
        ul.key++;
        if(ul.key>li.length-1){
            ul.key = 1;
            ul.style.left = 0 + 'px';
        }
        console.log(ul.key*li[0].offsetWidth);
        animate(ul,-ul.key*li[0].offsetWidth);
    }
    function animateUlLeft(ul,li) {
        ul.key--;
        if(ul.key<0){
            ul.key = li.length-2;
            ul.style.left = -(li[0].offsetWidth)*(li.length-1) + 'px';
        }
        animate(ul,-ul.key*li[0].offsetWidth);
    }
    // // nav-colothes点击高亮显示
    var navClothes = document.querySelector('.nav-clothes');
    var ul2 = navClothes.querySelector('ul');
    var liArr = navClothes.querySelectorAll('li');
    var iArr2 = navClothes.querySelectorAll('i');
    var womenClothes = document.querySelectorAll('.women-clothes');
    for(var i=0;i<liArr.length;i++){
        liArr[i].index = i;
        liArr[i].onmouseover = function() {
            for(var j=0;j<liArr.length;j++){
                iArr2[j].classList.remove('red');
                liArr[j].classList.remove('red');
                womenClothes[j].classList.add('hide');
            }
            if(this.index>0){
                iArr2[this.index].classList.add('red');
                iArr2[this.index-1].classList.add('red');
            }
            else
                iArr2[this.index].classList.add('red');
            this.classList.add('red');
            womenClothes[this.index].classList.remove('hide');
        }

    }
    ul2.onmouseout = function () {
        for(var j=0;j<liArr.length;j++){
            iArr2[j].classList.remove('red');
            liArr[j].classList.remove('red');
        }
    }
    // // 今日必抢部分轮播图
    // var sideBar = document.querySelector(".robbed-right");
    // var ul = sideBar.querySelector('ul');
    // var arrow = sideBar.querySelector('.arrow')
    // var width = sideBar.offsetWidth - 41;
    // console.log(width);
    // var a = arrow.querySelectorAll('a');
    // var key = 0;
    // a[1].onclick = function () {
    //     key++;
    //     console.log(key);
    //     if(key>4){
    //         key = 1;
    //         ul.style.left = 0 + 'px';
    //     }
    //     animate(ul,-key*width);
    // }
    // a[0].onclick = function () {
    //     key--;
    //     if(key<0){
    //         key = 3;
    //         ul.style.left = -(width+4)*4 + 'px';
    //     }
    //     animate(ul,-key*(width+3));
    // }
    // 今日必抢右边部分轮播图升级版
    var RobbedLeft = document.querySelector('.robbed-left');
    var RobbedLeftA = RobbedLeft.querySelectorAll('a');
    var RobbedRight = document.querySelector(".robbed-right");
    var RobbedRightUl = RobbedRight.querySelector('ul');
    var RobbedRightLiArr = RobbedRightUl.querySelectorAll('li');
    RobbedRightUl.key = 0;
    RobbedLeftA[0].onclick = function () {
        animateUlLeft(RobbedRightUl,RobbedRightLiArr);
    }
    RobbedLeftA[1].onclick = function () {
        animateUlRight(RobbedRightUl,RobbedRightLiArr);
    }
    // 女装部分再次轮播升级版
    //为什么合在一块就不行了呢 ，我实在是想不通啊！！！改成设定函数就可以了，没想通！！！！
    function animateWomenClothes(womenClothes) {
        var womenClothesUl1 = womenClothes.querySelector('.women-clothes-right-top ul');
        var womenClothesA1 = womenClothes.querySelectorAll('.women-clothes-left a');
        var womenClothesLiArr1 = womenClothesUl1.querySelectorAll('li');
        womenClothesUl1.key = 0;
        womenClothesA1[1].onclick = function () {
            console.log(womenClothesUl1.key);
            animateUlRight(womenClothesUl1,womenClothesLiArr1);
        }
        womenClothesA1[0].onclick = function () {
            animateUlLeft(womenClothesUl1,womenClothesLiArr1);
        }
    }
    for(var i=0 ;i<womenClothes.length;i++){
        animateWomenClothes(womenClothes[i]);
    }
}