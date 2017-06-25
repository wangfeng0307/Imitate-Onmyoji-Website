//-----------------------------王志立
/*第一个菱形部分开始*/
/*头部导航部分开始*/

$(function(){
    var top_first_inner = $("#top_first_inner");
    $("#top_first_inner li:eq(0)").siblings().on({
        mouseenter:function(){
            $(this).find("b").stop().fadeIn(1000);
            $(this).find("span").css("color","#FDFF88");
            $(this).find("span").stop().animate({
                marginLeft:"35px"
            })

        },
        mouseleave:function(){
            $(this).find("b").stop().fadeOut(1000);
            $(this).find("span").css("color","white");
            $(this).find("span").stop().animate({
                marginLeft:0
            })
        }
    })
})
//-----------------------------王志立

/**
 * Created by Administrator on 2017/5/8 0008.
 */
///////////////////////////右边导航
$(function () {
    var num0 = $("#num0").offset().top;
    var num1 = $("#num1").offset().top;
    var num2 = $("#forth_page").offset().top;
    var num3 = $("#sixth_page").offset().top;
    var num4 = $("#five").offset().top;
    var numArr = [num0,num1,num2,num3,num4]
    $("#right-clickul").children().on("mouseenter", function () {
        $("#right-clickul").children().children("span").css({
            opacity:0
        })
        $(this).children("span").css({
            opacity:1
        })
    });
    $("#right-clickul").children().on("mouseenter", function () {
        $("#right-clickul").children().children("span").css({
            opacity:0
        })
        $(this).children("span").css({
            opacity:1
        })
    });
    $("#right-clickul li").on("click", function () {
        $(window).scrollTop(numArr[$(this).index()]);
    })
    $(window).scroll(function () {
        var topWindow = $(window).scrollTop();
        //console.log(topWindow + "===========" + num0);
        //console.log(topWindow + "===========" + num1);

        if(topWindow >num4){
           $("#right-clickul li").children("span").css({
               opacity:0
           })
            $("#right-clickul li").eq(4).children("span").css({
               opacity:1
           })
       }else if(topWindow >num3){
           $("#right-clickul li").children("span").css({
               opacity:0
           })
           $("#right-clickul li").eq(3).children("span").css({
               opacity:1
           })
       }else if(topWindow >num2){
            $("#right-clickul li").children("span").css({
                opacity:0
            })
            $("#right-clickul li").eq(2).children("span").css({
                opacity:1
            })
        }else if(topWindow >num1){
            $("#right-clickul li").children("span").css({
                opacity:0
            })
            $("#right-clickul li").eq(1).children("span").css({
                opacity:1
            })
        }else if(topWindow >num0){
            $("#right-clickul li").children("span").css({
                opacity:0
            })
            $("#right-clickul li").eq(0).children("span").css({
                opacity:1
            })
        }
    })

})
//----------------------------邓赞强
$(function(){
    $(".music_top a:eq(0)").on("click", function () {
        $(".cv_zhuJue_pict").show()
        $(".ss_pict").hide()
        $(".ss_nav_wrap").hide()
        $(this).addClass("active").siblings().removeClass('active')
    })

    $(".music_top a:eq(1)").on("click", function () {
        $(".cv_zhuJue_pict").hide()
        $(".ss_nav_wrap").show()
        $(".ss_pict").show().children("ul").css({
            "position":"relative"
        })
        $(this).addClass("active").siblings().removeClass('active')
    })
    var index=0;
    $(".prev").on("click", function () {
        if(index == 0){
            index=2
        }else{
            --index;
        }

        $(".ss_pict ul").animate({
            "left":-309*index+"px"
        })

    })

    $(".next").on("click", function () {
        if(index ==2){
            index=0
        }else{
            ++index;
        }

        $(".ss_pict ul").animate({
            "left":-309*index+"px"
        })
    })


})
//----------------------------邓赞强
//--------------------粟晨卓
$(function () {
    $(".five_li_LBS a").css("color","#ffda68");
    $(".five_ul li:eq(2)").css("zIndex",1);
    $(".five_nav").animate({
        marginTop : 0,
        opacity : 1,
    },1000)
    $(".five_ul2 li").on("click",function () {
        $("li").removeClass("lis");
        $("li").find("em").css("opacity",0);
        $("li").find("a").css("color","#FFFFFF");
        $(this).addClass("lis");
        $(".lis").find("em").css("opacity",1);
        $(".lis").find("a").css("color","#ffda68");
    })
    $(".five_ul3 li").on("click",function () {
        $("li").removeClass("lis");
        $("li").find("em").css("opacity",0);
        $("li").find("a").css("color","#FFFFFF");
        $(this).addClass("lis");
        $(".lis").find("em").css("opacity",1);
        $(".lis").find("a").css("color","#ffda68");
    })
    $(".btn1").on("click",function () {
        $(".five_ul li:eq(0)").css("zIndex",1).siblings().css("zIndex",0);
        $(".five_center").find("p").text("看剧情发弹幕，营造二次元观影体验");
    })
    $(".btn2").on("click",function () {
        $(".five_ul li:eq(1)").css("zIndex",1).siblings().css("zIndex",0);
        $(".five_center").find("p").text("还原百鬼夜行，撒福豆趣味捉鬼，眼力加手力的终极考验");
    })
    $(".btn3").on("click",function () {
        $(".five_ul li:eq(2)").css("zIndex",1).siblings().css("zIndex",0);
        $(".five_center").find("p").text("引入真实地理定位，建造近在咫尺的结界和家族神社");
    })
    $(".btn4").on("click",function () {
        $(".five_ul li:eq(3)").css("zIndex",1).siblings().css("zIndex",0);
        $(".five_center").find("p").text("经典PVP系统，玩家与玩家的阴阳术斗法");
    })
    $(".btn5").on("click",function () {
        $(".five_ul li:eq(4)").css("zIndex",1).siblings().css("zIndex",0);
        $(".five_center").find("p").text("收集攒齐百种式神，精心培育顶级卡牌");
    })
    $(".btn6").on("click",function () {
        $(".five_ul li:eq(5)").css("zIndex",1).siblings().css("zIndex",0);
        $(".five_center").find("p").text("不同主题多个副本，惊喜奖励掉不停");
    })
    // $(".five_ul2 li").hover(function () {
    //     $(this).find("em").css("opacity","1");
    //     $(this).find("a").css("color","#ffda68");
    // },function () {
    //     $(this).find("em").css("opacity","0");
    //     $(this).find("a").css("color","#FFFFFF");
    //     $(".lis").css("color","#ffda68");
    //     $(".lis").css("opacity","1");
    // });
    $(".five_ul2 li a").on("mouseenter",function () {
        $(this).find("em").animate({
            opacity : 1,
        },100)
        $(this).css("color","#ffda68");
    })
    $(".five_ul2 li a").on("mouseleave",function () {
        $(this).find("em").animate({
            opacity : 0,
        },0)
        $(this).css("color","#FFFFFF");
        $(".lis a").find("em").animate({
            opacity : 1,
        },0)
        $(".lis a").css("color","#ffda68");
    })
    $(".five_ul3 li a").on("mouseenter",function () {
        $(this).find("em").animate({
            opacity : 1,
        },100)
        $(this).css("color","#ffda68");
    })
    $(".five_ul3 li a").on("mouseleave",function () {
        $(this).find("em").animate({
            opacity : 0,
        },0)
        $(this).css("color","#FFFFFF");
        $(".lis a").find("em").animate({
            opacity : 1,
        },0)
        $(".lis a").css("color","#ffda68");
    })
})
//--------------------粟晨卓
