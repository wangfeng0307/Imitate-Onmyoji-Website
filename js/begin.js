
$(function () {
    var jinyuzhizhangIndex = $("#jinyuzhizhangIndex");
    jinyuzhizhangIndex.hover(function () {
        jinyuzhizhangIndex.css({
            opacity: 0.5
        })
    }, function () {
        jinyuzhizhangIndex.css({
            opacity: 1
        })
    });
    $(".people").hover(function () {
        $(this).children().stop().animate({
            width:1280,
            left:30
        })
    },function () {
        $(this).children().stop().animate({
            width:1330,
            left:0
        })
    });
    //金羽之章图片
    $(window).scroll(function () {
        if($(window).scrollTop() > $("#jyzzImg").offset().top){
            $("#jyzzImg").stop().animate({
                opacity:0
            },300)
        }else{
            $("#jyzzImg").stop().animate({
                opacity:1
            },300)
        }
    })
    //扇子
        $("#shanzi").animate({
            top:16
        },800, function () {
            $(".people").animate({
                opacity:1
            },3000)
        })
})
$(function(){
    $(".wrap1Int_ptop a").on("mouseenter",function(){
        $(this).stop().animate({
            top:-6
        },300)
    })
    $(".wrap1Int_ptop a").on("mouseleave",function(){
        $(this).stop().animate({
            top:0
        },300)
    })
    $(".wrap1Int_pbottn a").on("mouseenter",function(){
        $(this).stop().animate({
            bottom:-73
        },300)
    })
    $(".wrap1Int_pbottn a").on("mouseleave",function(){
        $(this).stop().animate({
            bottom:-79
        },300)
    })
})
$(function () {
    //左箭头鼠标移入移出效果
    $(".arrow_l").hover(function () {
        $(this).css({
            opacity:0.5,
        })
    }, function () {
        $(this).css({
            opacity:1,
        })
    })

    //右箭头鼠标移入移出效果
    $(".arrow_r").hover(function () {
        $(this).css({
            opacity:0.5,
        })
    }, function () {
        $(this).css({
            opacity:1,
        })
    })
    var lis = $(".outerWrapPic ul li")
    var index = 0;
    var timer;
    //右箭头点击事件
    $(".arrow_r").on("click", function () {
        playNext();
    })

    function playNext(){
        if(index == lis.length-1){
            index = -1;
        }
        lis.eq(index+1).stop().animate({
            opacity:1,
        },2000).siblings().stop().animate({
            opacity:0,
        },2000)
        index++;
    }
    //左箭头点击事件开始
    $(".arrow_l").on("click", function () {
        if(index == 0){
            index = lis.length-1;
        }
        lis.eq(index-1).stop().animate({
            opacity:1,
        },2000).siblings().stop().animate({
            opacity:0,
        },2000)
        index--;
    })

    //自动轮播
    timer = setInterval(function () {
        playNext();
    },3000)

    //鼠标移入清空轮播
    $(".outerWrap").on("mouseenter", function () {
        clearInterval(timer);
    })

    //鼠标移出开启轮播
    $(".outerWrap").on("mouseleave", function () {
        timer = setInterval(function () {
            playNext();
        },3000)
    })
})
