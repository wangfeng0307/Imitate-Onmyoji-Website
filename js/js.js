window.onload = function () {
//顶部上方---------------吴佳丽
    //头部模块id名
    var topPart_height = document.getElementById("topPart_height");
    //top_bar模块id名
    var navBar_height = document.getElementById("navBar_height");
    //阴阳师主题横幅模块id名
    var mainPart_height = document.getElementById("mainPart_height");
    var words_move = document.getElementById("words_move");

    //头部开始文字的id名
    var start_picture = document.getElementById("start_picture");
    var catalogue_igue = document.getElementById("catalogue_igue");
    //头部开始鼠标悬后的盒子id名
    var start_pictures = document.getElementById("start_pictures");
    var newTable = document.getElementById("newTable");

    //右边文字
    //同人专区鼠标悬停效果id名
    var prefecture = document.getElementById("prefecture");
    var official_second =document.getElementById("official_second");
    //鼠标悬停后的灰色盒子id名
    var hovEffct_boxOne = document.getElementById("hovEffct_boxOne");
    var painTing_pic = document.getElementsByClassName("painTing_pic");
    var official_boxTwo = document.getElementById("official_boxTwo");
    var hovEffct_boxThree = document.getElementById("hovEffct_boxThree");
    var painTing_pic_sconed = document.getElementById("painTing_pic_sconed");
    //官方渠道鼠标悬停效果id名
    var official = document.getElementById("official");
    var prefecture_sconed = document.getElementById("prefecture_sconed");

    //页面被卷去事件注册

        $(window).scroll(function(){
            var topHeight = $("#topPart_height").height();
            var scHeight = $(window).scrollTop();
            //console.log(topHeight);
            //console.log(scHeight);
            if(topHeight < scHeight){
                $("#navBar_height").show();
                $("#mainPart_height").css({
                    'margin-top':$("#navBar_height").height(),
                });
                $("#words_move").hide();
            }else{
                $("#navBar_height").hide();
                $("#mainPart_height").css({
                    'margin-top':0,
                });
                $("#words_move").show();
            }
        })
    //同人专区鼠标悬停效果事件注册
    prefecture.onmouseover = function () {
        show(hovEffct_boxOne);
        Animation.animate(hovEffct_boxOne,{
            height:200,
        });
        Animation.animate(official_boxTwo,{
            height:200,
        });
    }
    prefecture.onmouseout = function() {
        hide(hovEffct_boxOne);
    }
    //官方渠道鼠标悬停效果事件注册
    official.onmouseover = function () {
        show(official_boxTwo);
    }
    official_boxTwo.onmouseover = function () {
        this.style.display = "block";
    }
    official.onmouseout = function () {
        hide(official_boxTwo);
    }
    official_boxTwo.onmouseout = function () {
        this.style.display = "none";
    }
    //同人专区鼠标悬停效果事件注册
    prefecture.onmouseover = function () {
        show(hovEffct_boxOne);
        animateQ(hovEffct_boxOne,{
            height:200,
        });
        animateQ(official_boxTwo,{
            height:200,
        });
    }
    prefecture_sconed.onmouseover = function() {
        show(hovEffct_boxThree);
    }
    painTing_pic_sconed.onmuseover = function() {
        this.style.display = "block";
    }
    prefecture_sconed.onmouseout = function() {
        hide(hovEffct_boxThree);
    }
    painTing_pic_sconed.onmouseout = function() {
        this.style.display = "none";
    }
    hovEffct_boxOne.onmouseover = function() {
        this.style.display = "block";
    }
    hovEffct_boxOne.onmouseout =function() {
        this.style.display = "none";
    }
    /**
     * 显现与隐藏函数
     * @param ele
     */
    function show(ele){
        ele.style.display = 'block';
    }
    function hide(ele){
        ele.style.display = 'none';
    }



//顶部上方---------------吴佳丽

//顶部开始-------------------------------------------王志立

    var small_huntsman = document.getElementById("small_huntsman");
    var huntsman = document.getElementById("huntsman");
    var top_bar_register_menu = document.getElementById("top_bar_register_menu");
    var top_table = document.getElementById("top_table");
    var right_carousel = document.getElementById("right_carousel");

    //给顶部右侧两个a标签设置轮播
    var carousel_height = right_carousel.offsetHeight/3;
    var top_num1 = 0;
    var top_target = 0;
    var timeId = null;
    //克隆顶部右侧a标签并追加到盒子里
    var discount = right_carousel.getElementsByTagName("a")[0];
    var disclone =  discount.cloneNode(true);
    disclone.className = "top_bar_register_discount top_bar_register_bottom_bo";
    right_carousel.appendChild(disclone);
    function playGet(){

        if(top_num1>=2){
            top_num1 = 0;
            right_carousel.style.top = "0px";
        }
        top_num1++;

        top_target = -carousel_height * top_num1;

        getanimate(right_carousel,top_target);

    }

    function getanimate(obj,target){
        clearInterval(obj.timeId);
        obj.timeId = setInterval(function(){

            var  learder = obj.offsetTop;
            var step = 5;
            step = learder < target ? step : -step ;
            if(Math.abs(learder-target)>Math.abs(step)){
                learder = learder + step;
            }
            else{
                learder = target;
                clearInterval(obj.timeId);
            }
            obj.style.top = learder + "px";


        },15);
    }
    setInterval(playGet,3000);

    //给图片huntsman注册事件
    small_huntsman.onmouseover = function () {
        huntsman.style.display = "block";
    }
    small_huntsman.onmouseout = function(){
        huntsman.style.display = "none";
    }
    huntsman.onmouseover = function () {
        huntsman.style.display = "block";
    }
    huntsman.onmouseout = function () {
        huntsman.style.display = "none";
    }
    //给主目录a标签注册事件

    top_bar_register_menu.onmouseover = function(){
        top_table.style.display = "block";
    }
    top_bar_register_menu.onmouseout = function(){
        top_table.style.display = "none";
    }
    top_table.onmouseover = function () {
        top_table.style.display = "block";
    }
    top_table.onmouseout = function(){
        top_table.style.display = "none";
    }
    //函数点击事件封装
    //function getBlock(obj2,obj3){
    //    obj2.onmouseover = function(){
    //        obj3.style.display = "block";
    //    }
    //}
    //function getNone(obj2,obj3){
    //    obj2.onmouseover = function(){
    //        obj3.style.display = "none";
    //    }
    //}

    //给祝福礼包隐藏部分注册事件
    var derma_ul = document.getElementById("derma_ul");
    var derma_li = derma_ul.getElementsByTagName("li");

    for(var i = 0 ; i <derma_li.length ; i++){

        var derma_a = derma_li[i].getElementsByTagName("a")[0];
        derma_a.onmouseover = function(){
            var derma_div = this.previousElementSibling;

            derma_div.style.display = "block";
        }
        derma_a.onmouseout = function(){
            var derma_div = this.previousElementSibling;

            derma_div.style.display = "none";
        }

    }
    //给差号注册事件
    var errand = document.getElementById("errand");
    var secret_left = document.getElementById("secret_left");
    var secret_right = document.getElementById("secret_right");
    var conceal = document.getElementById("conceal");
    var conceal_a  = conceal.getElementsByTagName("a")[0];
    var conceal_b = conceal_a.getElementsByTagName("b")[0];
    var errand_a = errand.childNodes[0];
    var newYears_secret = secret_left.parentNode;
    var newYears_height = newYears_secret.offsetHeight;
    //console.log(newYears_height);
    var json = {
        "bottom":-newYears_height+"px"
    }

    errand.onclick = function () {
        Animation.animate(newYears_secret,{
            "bottom":-newYears_height+"px"
        });
        Animation.animate(conceal_a,{
            bottom:"0px"
        });

    }
    conceal_b.onmouseover = function(){
        Animation.animate(conceal_b,{
            bottom:"35px"
        })

    }
    conceal_b.onmouseout = function(){
        Animation.animate(conceal_b,{
            bottom:"26px"
        })

    }
    conceal_a.onclick = function(){
        Animation.animate(newYears_secret,{
            "bottom":"0px"
        });
        Animation.animate(conceal_a,{
            bottom:"-100px"
        });
    }
//顶部结束-------------------------------------------王志立


//主题横幅开始------------------------------张永锋--------------------------------
    var logo = document.getElementById("logo");
    window.onscroll = function () {
        if(scroll().scrollTop>55){
            Animation.animate(logo,{
                width:0,
                height:0,
                //left:58
            })}else{
                Animation.animate(logo,{
                    width:70,
                    height:199,
                    //left:55
                     })
                   }
    }
//获取右边箭头
    var arrRight = document.getElementById("arrRight");
    var bannerR1 = document.getElementById("bannerR1");
    var bannerR2 = document.getElementById("bannerR2");
    var bannerR3 = document.getElementById("bannerR3");
    var bannerR4 = document.getElementById("bannerR4");
    //console.log(arrRight);
//注册事件
    var left1 = 170,left2 = 470,left3 = 152,left4 = 388;
    var cen1 = 320, cen2 = 270;
    //var temp1 = 150,temp = 108;
    var flagTop = true,id = 0;
    var flagClear = true;
    //刚进入页面时动画
    $(bannerR1).animate({
        left:left1+"px",
        opacity:1
    },1000);
    $(bannerR2).animate({
        left:left2+"px",
        opacity:1
    },1000)
    //Animation.animate(bannerR1,{
    //    "left":left1,
    //    "opacity":1
    //}),function(){
    //    flagClear = true;
    //};
    //Animation.animate(bannerR2,{
    //    "left":left2,
    //    "opacity":1
    //})
    arrRight.onclick = function () {
    if(flagClear){
        if(flagTop){//切换1
             flagClear = false;
            //第一组图片
                Animation.animate(bannerR1,{
                    "left":cen1,
                    "opacity":0
                }, function () {
                });
                Animation.animate(bannerR2,{
                    "left":cen1,
                    "opacity":0
                }, function () {
                    //第二组图片
                    Animation.animate(bannerR3,{
                        "left":left3,
                        "opacity":1
                    }, function () {true;
                    });
                    Animation.animate(bannerR4,{
                        "left":left4,
                        "opacity":1
                    }, function () {
                        flagClear = true;//清掉计时器后才能下一次点击
                    });
                });
            flagTop = false;//改变状态
        }else{//切换2
             flagClear = false;
            //第二组图片
            Animation.animate(bannerR3,{
                "left":cen2,
                "opacity":0
            });
            Animation.animate(bannerR4,{
                "left":cen2,
                "opacity":0
            }, function () {
                //第一组图片
                Animation.animate(bannerR1,{
                    "left":left1,
                    "opacity":1
                }),function(){
                    flagClear = true;
                };
                Animation.animate(bannerR2,{
                    "left":left2,
                    "opacity":1
                }, function () {
                    flagClear = true;//清掉计时器后才能下一次点击
                });
            });
            flagTop = true;//改变状态
        }
    }
    }
//二维码下载
    //二维码上的横条动画
    var nieDownloadImg = document.getElementById("nieDownload-img2")//横条
    var nieDownloadImgTop = nieDownloadImg.offsetTop;
    //console.log(nieDownloadImgTop);
    var timerIdImg = setInterval(function () {
        nieDownloadImgTop ++;
        nieDownloadImg.style.top = nieDownloadImgTop + "px";
        if(nieDownloadImgTop>105){
            nieDownloadImgTop = 10;
        }
    },30);
    //左侧箭头点击收回二维码模块
    var nieArrowRight = document.getElementById("nieArrowRight");//左箭头
    var nieDownloadWrap = document.getElementById("nie_download_wrap");//二维码模块
    //var nieDownload = document.getElementById("nieDownload");//二维码
    //var nieButtons = document.getElementById("nie-buttons");//苹果安卓下载
    var nieDownloadWrapR = document.getElementById("nie_download_wrap_r");//扫码下载
    nieArrowRight.onclick = function () {
        animateQ(nieDownloadWrap,{
            width:35,
            left:-44
        });
        //nieDownloadWrap.style.left='-40px';
       for(var i = 0 ; i < nieDownloadWrap.children.length; i++){
           nieDownloadWrap.children[i].style.display = "none";
           }
        nieDownloadWrapR.style.display = "block";
    }
    //点击扫码下载恢复
    nieDownloadWrapR.onclick = function () {
       animateQ(nieDownloadWrap,{
            width:380,
            left:-390
        });
        for(var i = 0 ; i < nieDownloadWrap.children.length; i++){
            nieDownloadWrap.children[i].style.display = "block";
        }
        nieDownloadWrapR.style.display = "none";
    }
    //非透明度、非层级匀速动画函数
     function animateQ(obj, json,fn) {
        clearInterval(obj.timeId);
        var leader, step, target;
        obj.timeId = setInterval(function () {
            var flag = true;
            for (var key in json) {
                if (key == "opacity") { //透明度
                    leader = parseInt(Style.getStyle(obj, key) * 100) || 0;
                    target = parseInt(json[key] * 100) || 0;
                    step = target - leader;
                    step = step / 10 > 0 ? Math.ceil(step / 10) : Math.floor(step / 10);
                    leader = leader + step;
                    obj.style[key] = leader / 100;
                } else if (key == "zIndex") {//层级
                    leader = parseInt(Style.getStyle(obj, key)) || 0;
                    target = parseInt(json[key]) || 0;
                    step = target - leader;
                    step = step / 10 > 0 ? Math.ceil(step / 10) : Math.floor(step / 10);
                    leader = leader + step;
                    obj.style[key] = leader;
                } else {
                    //获得属性当前值。将获取到的属性值px去掉；排除特殊情况获取到的如auto转换的NaN
                    leader = parseInt(Style.getStyle(obj, key)) || 0;
                    //取得json里面该属性的目标值
                    target = parseInt(json[key]) || 0;
                    //计算步长
                    step = target - leader;
                    step = step / 10 > 0 ? Math.ceil(step / 10) : Math.floor(step / 10);
                    //属性赋值
                    leader = leader + step;
                    obj.style[key] = leader + "px";
                }
                //有任意属性值没有到达目标值时，flag都为false,不能清空定时器
                if (leader != target) {
                    flag = false;
                }
            }
            //所有属性值达到目标值后才能清空清空计时器
            if (flag) {
                clearInterval(obj.timeId);
                //fn如果是函数再调用，否则不执行
                if(typeof fn == "function"){
                    fn();
                }
            }
        }, 5)
    }
    //安卓 苹果下载鼠标移入移除效果
    var nieButtons = document.getElementById("nie-buttons");
    var downloadIosSpan = document.getElementById("download-ios-span");
    var downloadAndroidSpan = document.getElementById("download-android-span");
    //console.log(nieButtons.children[1]);
        nieButtons.children[0].onmouseover = function () {
            downloadIosSpan.style.zIndex = "2";
             downloadIosSpan.onmouseover = function(){
                 downloadIosSpan.style.zIndex = "2";
             }
         }
        nieButtons.children[0].onmouseout = function () {
            downloadIosSpan.onmouseout = function(){
                downloadIosSpan.style.zIndex = "0";
            }
        }
        nieButtons.children[2].onmouseover = function () {
            downloadAndroidSpan.style.zIndex = "2";
            downloadAndroidSpan.onmouseover = function(){
                downloadAndroidSpan.style.zIndex = "2";
            }
        }
        nieButtons.children[2].onmouseout = function () {
            downloadAndroidSpan.onmouseout = function(){
                downloadAndroidSpan.style.zIndex = "0";
            }
        }
    //点击兔子弹出弹窗
    var openServerPop = document.getElementById("open_server_pop");//获取兔子
    var serverPop = document.getElementById("server_pop");//弹窗
    openServerPop.onclick = function () {
        serverPop.style.display = "block";
        return false;
    }
    //点击关闭弹窗
    var closeServerpop = document.getElementById("close_serverpop");
    closeServerpop.onclick = function () {
        serverPop.style.display = "none";
        return false;
    }
//弹窗
    //获取ios区li标签
    var serverPopContent = document.getElementById("server_pop_content");
    //var lis = document.getElementById("area_list").children;
    var lis = document.getElementsByClassName("server_item");
    //console.log(lis);
    //爆满、新服
    var areaListEmArr = [" -1379px -51px", "-1353px -51px",]
    //i标签背景图片在精灵图中的位置
    var arrIBg = [
        "-1120px -1182px","-1040px -1102px","-1120px -1102px","-560px -1262px",
        "-480px -1262px","-400px -1262px","-320px -1262px","-240px -1262px",
        "-160px -1262px","-1200px -1102px",//中国区ios
        "-80px -1182px","0px -1182px","-1200px -1182px","0px -1102px",
        "-720px -1102px","-800px -1102px","-880px -1102px","-640px -1102px",
        "0px -1262px","-800px -1182px","-640px -1262px","-720px -1182px",
        "-640px -1182px","-560px -1182px","-960px -1102px","-560px -1102px",//网易双平台
        "-480px -1102px","-1040px -1182px","-160px -1102px","-320px -1102px",
        "-480px -1182px","-400px -1182px","-320px -1182px","-240px -1182px",
        "-80px -1262px"," -400px -1102px",//中国安卓联运
        "-80px -1102px","-160px -1182px","-1259px -1002px",//联运双平台
        "-240px -1102px","-880px -1182px","-960px -1182px"//国际区
    ];
    var serverNameBo = [
        "桂之馥","莲之净","雀之羽","春之樱","夏之蝉","夜之月","竹之幽","松之苍","兰之雅","云之遏",//中国区ios
        "谜之暗影","春樱共赏","两情相悦","风雨同行","孤高之心","遥远之忆","永生之谜","缥缈之旅",
        "携手同心","结伴同游","相伴相随","情比金坚","形影不离","同心一意","相知相依","心意相通",//网易双平台
        "樱之华","菊之逸","桃之华","雀之灵","秋之枫","冬之雪","暮之霞","梅之寒","风之清","雨之霁",//中国安卓联运
        "情深谊长","两心无间","亲密无间",//联运双平台
        "日本区","亚洲区","海外加速区"//国际区
    ];
    //将所有设为爆满
     for(var i = 0 ; i < lis.length; i++){
         var areaListEm = document.createElement("em");
         areaListEm.style.width = "26px";
         areaListEm.style.height = "50px";
         areaListEm.style.position = "absolute";
         areaListEm.style.backgroundImage =  "url(images/index_z_4b6df7a.png)";
         areaListEm.style.backgroundRepeat = "no-repeat";
         areaListEm.style.backgroundPosition = areaListEmArr[1];
           lis[i].appendChild(areaListEm);
    //设置i标签背景图片
         var areaListI = document.createElement("i");
         areaListI.style.width = "80px";
         areaListI.style.height = "80px";
         areaListI.style.margin = "0 auto";
         areaListI.style.display = "block";
         //areaListI.style.borderRadius = "50%";
         //areaListI.style.backgroundColor = "red";
         areaListI.style.backgroundImage =  "url(images/index_z_4b6df7a.png)";
         areaListI.style.backgroundRepeat = "no-repeat";
         areaListI.style.backgroundPosition = arrIBg[i];
         lis[i].appendChild(areaListI);
      //将区名添加进去
         var serverName = document.createElement("span");
         serverName.style.display = "block";
         serverName.style.width = "100%";
         serverName.style.position = "absolute";
         serverName.style.top = "75px";
         serverName.style.fontSize = "14px";
         serverName.style.color = "#000";
         serverName.style.textAlign = "center";
         serverName.innerHTML = serverNameBo[i];
         lis[i].appendChild(serverName);
         }
    //将特殊设为新服
    var arrPosition = [0,1,10,11,26,27,36,39,40,41]
    function lisStylePosition(index){
        lis[index].children[0].style.backgroundPosition = areaListEmArr[0];
    };
     for(var i = 0 ; i < arrPosition.length; i++){
         lisStylePosition(arrPosition[i]);
         }
// 主题横幅结束-----------------张永锋---------------------------------------------
//最新信息开始------------------------粟晨卓---------------------------
    //图片轮播区
    //获取对象
    var ulph = document.getElementById("ul_ph");
    var liulph = ulph.children;
    var ulbtn = document.getElementById("ul_btn");
    var lisbtn = ulbtn.children;
    var index = 0;
    var imgwi = ulph.offsetWidth;
    var timerNew = null;
    var num = 0;

//注册事件
    for(var i = 0 ; i < lisbtn.length; i++) {
        lisbtn[i].setAttribute("index",i);
        lisbtn[i].onmouseover = function () {
            for(var j = 0 ; j < lisbtn.length; j++){
                lisbtn[j].style.backgroundColor = "";
            }
            this.style.backgroundColor = "#E37B63";
            index = this.getAttribute("index");
            var target = -imgwi / liulph.length * index;
            num = index;
            Animation.animate(ulph,{
                "left" : target,
            });
            for(var j = 0 ; j < newsEm.length; j++){
                newsEm[j].style.opacity = 0;
            }
        }
        lisbtn[i].onmouseout = function () {
            this.style.backgroundColor =  "#E37B63";
        }
    }
    ulph.appendChild(liulph[0].cloneNode(true));
    console.log(ulph);
    ulph.onmouseenter = function () {
        clearInterval(timerNew);
    }
    ulph.onmouseleave = function () {
        timerNew = setInterval(function () {
            if(num == liulph.length){
                ulph.style.left = 0;
                num = 1
            }
            var target = -imgwi / liulph.length * num;
            for(var j = 0 ; j < lisbtn.length; j++){
                lisbtn[j].style.backgroundColor = "";
            }
            if(num >= liulph.length-1){
                lisbtn[0].style.backgroundColor =  "#E37B63";
            }else{
                lisbtn[num].style.backgroundColor =  "#E37B63";
            }

            Animation.animate(ulph,{
                "left" : target,
            });
            num++;
        },2500)
    }

    timerNew = setInterval(function () {
        if(num == liulph.length){
            ulph.style.left = 0;
            num = 1
        }
        var target = -imgwi / liulph.length * num;
        for(var j = 0 ; j < lisbtn.length; j++){
            lisbtn[j].style.backgroundColor = "";
        }
        if(num >= liulph.length-1){
            lisbtn[0].style.backgroundColor =  "#E37B63";
        }else{
            lisbtn[num].style.backgroundColor =  "#E37B63";
        }

        Animation.animate(ulph,{
            "left" : target,
        });
        num++;
    },2500)


    //文字轮播
    //获取对象
    var ulnews = document.getElementById("ul_news");
    //console.log(ulnews);
    var ulnav = document.getElementById("ul_nav");
    var lisnews = ulnews.children;
    var newsEm = ulnews.getElementsByTagName("em");
    // var lisnav = ulnav.children;
    var count = 0;
    var ulsw = ulnav.offsetWidth;
    //console.log(newsEm);
    //注册事件
    newsEm[0].style.opacity = 0.5;
    for(var k = 0 ; k < lisnews.length; k++) {
        lisnews[k].setAttribute("index",k);
        lisnews[k].onmouseover = function () {
            for(var j = 0 ; j < newsEm.length; j++){
                newsEm[j].style.opacity = 0;
            }
            //console.log(ulsw);
            count = this.getAttribute("index");
            var targets = -ulsw / 5 * count;

            Animation.animate(ulnav,{
                "left" : targets,
            });
            newsEm[count].style.opacity = 0.5;
        }
        lisnews[k].onmouseleave = function (){
            //this.setAttribute("index",k);

            newsEm[this.getAttribute("index")].style.opacity = 0.5;
        }
    }

//最新信息结束------------------------粟晨卓---------------------------
//日历模块开始-------------------------邓赞强---------------------
    /*右侧游戏日历模块 绝对定位  -- 邓赞强--*/
    /*以下是图标左右移动 上下移动*/
//1获得操作对象
    var indexSideLinks = document.getElementById("indexSideLinks");
    var index_Links=indexSideLinks.children;
    //console.log(index_Links.length)

    //让原设置marginleft=42的图片右移动14px;
    var arr1MarginL=[index_Links[0],index_Links[2],index_Links[4]];
    for(var i = 0 ; i < arr1MarginL.length; i++){
        arr1MarginL[i].onmouseover = function () {
            Animation.animateQuick(this,{
                marginLeft:42
            })
        };
        arr1MarginL[i].onmouseout= function () {
            Animation.animateQuick(this,{
                marginLeft:28
            })
        };

    }
    //让原设置marginRight=28 的图片右移动14px;
    var arr1MarginR=[index_Links[1],index_Links[3],index_Links[5]];
    for(var i = 0 ; i < arr1MarginR.length; i++){
        arr1MarginR[i].onmouseover = function () {
            Animation.animateQuick(this,{
                marginRight:14
            })
        };
        arr1MarginR[i].onmouseout= function () {
            Animation.animateQuick(this,{
                marginRight:28
            })
        };
    }

    index_Links[8].onmouseover = function () {
        Animation.animateQuick(this,{
            left:19
        });
        this.style.zIndex =7;

    }
    index_Links[8].onmouseout = function () {
        Animation.animateQuick(this,{
            left:5
        },function(){
            index_Links[8].style.zIndex =5;
        });

    }

    //微博/微信/论坛活动原设置marginTOP=-5 的图片下移动5px
    var arr1MarginT=[index_Links[9],index_Links[10],index_Links[11]];
    for(var i = 0 ; i < arr1MarginT.length; i++){
        arr1MarginT[i].onmouseover = function () {
            Animation.animateQuick(this,{
                bottom:-5
            })
        };
        arr1MarginT[i].onmouseout= function () {
            Animation.animateQuick(this,{
                bottom:0
            })
        };
    }

    /*以下是 yuHunFuBen07 副本切换展开效果*/
    //获得操作对象
    var yuHunFuBen07 =document.getElementById("yuHunFuBen07");
    var fuBenNew = document.getElementById("fuBenNew")
    yuHunFuBen07.onmouseenter = function () {
        yuHunFuBen07.style.display = "none";
        fuBenNew.style.display ="block";
        Animation.animateQuick(fuBenNew,{
            height:289
        })
    }
    fuBenNew.onmouseleave = function () {
        Animation.animateQuick(fuBenNew,{
            height:80
        }, function () {
            fuBenNew.style.display ="none";
            yuHunFuBen07.style.display = "block";
        });

    }
//日历模块结束-------------------------邓赞强---------------------
//式神模块开始-------------------吴境丽---------------------------------
    /**
     * Created by flower on 2017/4/29.
     */
        var shiShen1 = document.getElementsByClassName("shiShen1")[0];
        var shiStb1 = document.getElementsByClassName("shiStb1")[0];
        shiShen1.onmouseover = function () {
            shiStb1.style.display = "block";
            shiStb1.onmouseover = function () {
                shiStb1.style.display = "block";
            }
        }
        shiShen1.onmouseout = function () {
            shiStb1.style.display = "none";
            shiStb1.onmouseout = function () {
                shiStb1.style.display = "none";
            }
        }
        var shiShen2 = document.getElementsByClassName("shiShen2")[0];
        var shiStb2 = document.getElementsByClassName("shiStb2")[0];
        shiShen2.onmouseover = function () {
            shiStb2.style.display = "block";
            shiStb2.onmouseover = function () {
                shiStb2.style.display = "block";
            }
        }
        shiShen2.onmouseout = function () {
            shiStb2.style.display = "none";
            shiStb2.onmouseout = function () {
                shiStb2.style.display = "none";
            }
        }
        var shiShen3 = document.getElementsByClassName("shiShen3")[0];
        var shiStb3 = document.getElementsByClassName("shiStb3")[0];
        shiShen3.onmouseover = function () {
            shiStb3.style.display = "block";
            shiStb3.onmouseover = function () {
                shiStb3.style.display = "block";
            }
        }
        shiShen3.onmouseout = function () {
            shiStb3.style.display = "none";
            shiStb3.onmouseout = function () {
                shiStb3.style.display = "none";
            }
        }
        var shiShen4 = document.getElementsByClassName("shiShen4")[0];
        var shiStb4 = document.getElementsByClassName("shiStb4")[0];
        shiShen4.onmouseover = function () {
            shiStb4.style.display = "block";
            shiStb4.onmouseover = function () {
                shiStb4.style.display = "block";
            }
        }
        shiShen4.onmouseout = function () {
            shiStb4.style.display = "none";
            shiStb4.onmouseout = function () {
                shiStb4.style.display = "none";
            }
        }
        var shiShen5 = document.getElementsByClassName("shiShen5")[0];
        var shiStb5 = document.getElementsByClassName("shiStb5")[0];
        shiShen5.onmouseover = function () {
            shiStb5.style.display = "block";
            shiStb5.onmouseover = function () {
                shiStb5.style.display = "block";
            }
        }
        shiShen5.onmouseout = function () {
            shiStb5.style.display = "none";
            shiStb5.onmouseout = function () {
                shiStb5.style.display = "none";
            }
        }
        var shiShen6 = document.getElementsByClassName("shiShen6")[0];
        var shiStb6 = document.getElementsByClassName("shiStb6")[0];
        shiShen6.onmouseover = function () {
            shiStb6.style.display = "block";
            shiStb6.onmouseover = function () {
                shiStb6.style.display = "block";
            }
        }
        shiShen6.onmouseout = function () {
            shiStb6.style.display = "none";
            shiStb6.onmouseout = function () {
                shiStb6.style.display = "none";
            }
        }
        var shiShen7 = document.getElementsByClassName("shiShen7")[0];
        var shiStb7 = document.getElementsByClassName("shiStb7")[0];
        shiShen7.onmouseover = function () {
            shiStb7.style.display = "block";
            shiStb7.onmouseover = function () {
                shiStb7.style.display = "block";
            }
        }
        shiShen7.onmouseout = function () {
            shiStb7.style.display = "none";
            shiStb7.onmouseout = function () {
                shiStb7.style.display = "none";
            }
        }
        var shiShen8 = document.getElementsByClassName("shiShen8")[0];
        var shiStb8 = document.getElementsByClassName("shiStb8")[0];
        shiShen8.onmouseover = function () {
            shiStb8.style.display = "block";
            shiStb8.onmouseover = function () {
                shiStb8.style.display = "block";
            }
        }
        shiShen8.onmouseout = function () {
            shiStb8.style.display = "none";
            shiStb8.onmouseout = function () {
                shiStb8.style.display = "none";
            }
        }

        var shiShen9 = document.getElementsByClassName("shiShen9")[0];
        var shiStb9 = document.getElementsByClassName("shiStb9")[0];
        shiShen9.onmouseover = function () {
            shiStb9.style.display = "block";
            shiStb9.onmouseover = function () {
                shiStb9.style.display = "block";
            }
        }
        shiShen9.onmouseout = function () {
            shiStb9.style.display = "none";
            shiStb9.onmouseout = function () {
                shiStb9.style.display = "none";
            }
        }
        var shiShen10 = document.getElementsByClassName("shiShen10")[0];
        var shiStb10 = document.getElementsByClassName("shiStb10")[0];
        shiShen10.onmouseover = function () {
            shiStb10.style.display = "block";
            shiStb10.onmouseover = function () {
                shiStb10.style.display = "block";
            }
        }
        shiShen10.onmouseout = function () {
            shiStb10.style.display = "none";
            shiStb10.onmouseout = function () {
                shiStb10.style.display = "none";
            }
        }

        var shiShen11 = document.getElementsByClassName("shiShen11")[0];
        var shiStb11 = document.getElementsByClassName("shiStb11")[0];
        shiShen11.onmouseover = function () {
            shiStb11.style.display = "block";
            shiStb11.onmouseover = function () {
                shiStb11.style.display = "block";
            }
        }
        shiShen11.onmouseout = function () {
            shiStb11.style.display = "none";
            shiStb11.onmouseout = function () {
                shiStb11.style.display = "none";
            }
        }
        var shiShen12 = document.getElementsByClassName("shiShen12")[0];
        var shiStb12 = document.getElementsByClassName("shiStb12")[0];
        shiShen12.onmouseover = function () {
            shiStb12.style.display = "block";
            shiStb12.onmouseover = function () {
                shiStb12.style.display = "block";
            }
        }
        shiShen12.onmouseout = function () {
            shiStb12.style.display = "none";
            shiStb12.onmouseout = function () {
                shiStb12.style.display = "none";
            }
        }
//点击士神扇子显示第一页,点击主角扇子显示第二页
        var shishen = document.getElementsByClassName("shishen")[0];
        var zhujue = document.getElementsByClassName("zhujue")[0];
        var shishen_container = document.getElementsByClassName("shishen_container")[0];
        var zhujueBox = document.getElementsByClassName("zhujueBox")[0];
        shishen.onclick = function(){          //点击式神扇子显示第一页扇子内容，隐藏第二页主角内容
            zhujueBox.style.display = "none";
            shishen_container.style.display = "block";
            arrlast.style.display = "block";
            zhujue_fan.style.display = "none";
            shishen_fan.style.display = "block";
        }
    shishen.onmouseenter = function(){
        Animation.animate(shishen_fan,{
            top:0
        })
        shishen_fan.style.display = "block";
        shishen.onclick = function(){
            shishen_fan.style.display = "block";
            zhujue_fan.style.display = "none";
            shishen_container.style.display = "block";
            zhujueBox.style.display = "none";
            arrlast.style.display = "none";
            zhujue_fan.style.top = "10px";
        }
    }
    shishen.onmouseleave = function(){
        Animation.animate(shishen_fan,{
            top:0
        })
        if(zhujue_fan.style.display != "none"){
            Animation.animate(shishen_fan,{
                top:10
            })
            shishen_fan.style.display = "none";
        }

    }

        //设置鼠标移入主角显示扇子
        var zhujue_fan = zhujue.children[1];
        var shishen_fan = shishen.children[1];
        zhujue_fan.style.display = "none";
        zhujue.onmouseenter = function(){
            Animation.animate(zhujue_fan,{
                top:0
            })
            zhujue_fan.style.display = "block";
            zhujue.onclick = function(){
                zhujue_fan.style.display = "block";
                shishen_fan.style.display = "none";
                zhujueBox.style.display = "block";
                shishen_container.style.display = "none";
                arrlast.style.display = "none";
                shishen_fan.style.top = "10px";
            }
        }
        zhujue.onmouseleave = function(){
            Animation.animate(zhujue_fan,{
                top:0
            })
            if(shishen_fan.style.display != "none"){
                Animation.animate(zhujue_fan,{
                    top:10
                })
                zhujue_fan.style.display = "none";
            }

        }


        //Tab栏切换
        var all = document.getElementsByClassName("all")[0];
        var ssr = document.getElementsByClassName("ssr")[0];
        var sr = document.getElementsByClassName("sr")[0];
        var r = document.getElementsByClassName("r")[0];
        var n = document.getElementsByClassName("n")[0];
        all.onclick = function(){
            var alltarget = 0;
            Animation.animate(shishenlist_hid,{
                left:-alltarget
            })
        }
        ssr.onclick = function(){
            var ssrtarget = 1700;
            Animation.animate(shishenlist_hid,{
                left:-ssrtarget
            })
        }
        sr.onclick = function(){
            var srtarget = 2550;
            Animation.animate(shishenlist_hid,{
                left:-srtarget
            })
        }
        r.onclick = function(){
            var rtarget = 3400;
            Animation.animate(shishenlist_hid,{
                left:-rtarget
            })
        }
        n.onclick = function(){
            var ntarget = 4250;
            Animation.animate(shishenlist_hid,{
                left:-ntarget
            })
        }

//第一页主要内容轮播图
        var shishenlist_hid = document.getElementsByClassName("shishenlist_hid")[0];
        var arrnext = document.getElementsByClassName("arrnext")[0];
        var arrlast = document.getElementsByClassName("arrlast")[0];
        var shishennum = 0;
        var shishentarget = 850;
        var flagShishen = true;
        var shishenlistLength = shishenlist_hid.children;

        arrlast.style.display = "none";//chushi
        arrnext.onclick = function(){
            if(flagShishen){
                flagShishen = false;
                shishennum++;
                Animation.animate(shishenlist_hid, {
                    left:-shishentarget*shishennum
                }, function () {
                    flagShishen = true;
                });
                if(shishennum > 6){
                    arrnext.style.display = "none";  //点击到最后一张,右键按钮隐藏
                }
                if(shishennum >0){
                    arrlast.style.display = "block";  //点击
                }

            }
            return false;
        }
//左边箭头轮播点击事件
        arrlast.onclick = function(){
            shishennum--;
            if(shishennum <= 6){
                arrnext.style.display = "block";  //点击
            }
            if(shishennum<1){
                arrlast.style.display = "none";  //点击到...,.键按钮隐藏
            }
            Animation.animate(shishenlist_hid,{
                left:-shishentarget*shishennum
            });

        }

        //第二页开始
        var zhujue_tab1 = document.getElementsByClassName("zhujue_tab1")[0];
        var zhujue_tab2 = document.getElementsByClassName("zhujue_tab2")[0];
        var zhujue_tab3 = document.getElementsByClassName("zhujue_tab3")[0];
        var zhujue_tab4 = document.getElementsByClassName("zhujue_tab4")[0];
        var zhujue_pic = document.getElementsByClassName("zhujue_pic")[0];
        var zhujue_pic2 = document.getElementsByClassName("zhujue_pic2")[0];
        var zhujue_pic3 = document.getElementsByClassName("zhujue_pic3")[0];
        var zhujue_pic4 = document.getElementsByClassName("zhujue_pic4")[0];
        var zhujue_info = document.getElementsByClassName("zhujue_info")[0];
        var zhujue_info2 = document.getElementsByClassName("zhujue_info2")[0];
        var zhujue_info3 = document.getElementsByClassName("zhujue_info3")[0];
        var zhujue_info4 = document.getElementsByClassName("zhujue_info4")[0];
        var shisheniconfont = document.getElementsByClassName("iconfont");
        var zhujue_tab1_box = document.getElementsByClassName("zhujue_tab1_box")[0];
        var zhujue_tab2_box = document.getElementsByClassName("zhujue_tab2_box")[0];
        var zhujue_tab3_box = document.getElementsByClassName("zhujue_tab3_box")[0];
        var zhujue_tab4_box = document.getElementsByClassName("zhujue_tab4_box")[0];
        var confont1 = zhujue_tab1.children[1];
        var confont2 = zhujue_tab2.children[1];
        var confont3 = zhujue_tab3.children[1];
        var confont4 = zhujue_tab4.children[1];
        var yellowArrow = document.getElementById("yellowArrow");
     yellowArrow.onmouseenter = function () {
         yellowArrow.style.opacity = 0.5;
     }
    yellowArrow.onmouseleave = function () {
        yellowArrow.style.opacity = 1;
    }
        zhujue_tab1.onclick = function(){
            zhujue_pic.style.display = "block";
            zhujue_pic2.style.display = "none";
            zhujue_pic3.style.display = "none";
            zhujue_pic4.style.display = "none";
            zhujue_info.style.display = "block";
            zhujue_info2.style.display = "none";
            zhujue_info3.style.display = "none";
            zhujue_info4.style.display = "none";
            zhujue_tab1_box.className = "zhujue_tabbgc";
            zhujue_tab2_box.className = "zhujue_tab2_box";
            zhujue_tab3_box.className = "zhujue_tab3_box";
            zhujue_tab4_box.className = "zhujue_tab4_box";
            confont1.style.display = "block";
            confont2.style.display = "none";
            confont3.style.display = "none";
            confont4.style.display = "none";

        }

        zhujue_tab2.onclick = function(){
            zhujue_pic2.style.display = "block";
            zhujue_pic.style.display = "none";
            zhujue_pic3.style.display = "none";
            zhujue_pic4.style.display = "none";
            zhujue_info2.style.display = "block";
            zhujue_info.style.display = "none";
            zhujue_info3.style.display = "none";
            zhujue_info4.style.display = "none";
            zhujue_tab1_box.className = "zhujue_tab1_box";
            zhujue_tab2_box.className = "zhujue_tabbgc";
            zhujue_tab3_box.className = "zhujue_tab3_box";
            zhujue_tab4_box.className = "zhujue_tab4_box";
            confont2.style.display = "block";
            confont1.style.display = "none";
            confont3.style.display = "none";
            confont4.style.display = "none";
        }
        zhujue_tab3.onclick = function(){
            zhujue_pic3.style.display = "block";
            zhujue_pic.style.display = "none";
            zhujue_pic2.style.display = "none";
            zhujue_pic4.style.display = "none";
            zhujue_info3.style.display = "block";
            zhujue_info.style.display = "none";
            zhujue_info2.style.display = "none";
            zhujue_info4.style.display = "none";
            zhujue_tab3_box.className = "zhujue_tabbgc";
            zhujue_tab1_box.className = "zhujue_tab1_box";
            zhujue_tab2_box.className = "zhujue_tab2_box";
            zhujue_tab4_box.className = "zhujue_tab4_box";
            confont3.style.display = "block";
            confont1.style.display = "none";
            confont2.style.display = "none";
            confont4.style.display = "none";
        }
        zhujue_tab4.onclick = function(){
            zhujue_pic4.style.display = "block";
            zhujue_pic.style.display = "none";
            zhujue_pic2.style.display = "none";
            zhujue_pic3.style.display = "none";
            zhujue_info4.style.display = "block";
            zhujue_info.style.display = "none";
            zhujue_info2.style.display = "none";
            zhujue_info3.style.display = "none";
            zhujue_tab4_box.className = "zhujue_tabbgc";
            zhujue_tab1_box.className = "zhujue_tab1_box";
            zhujue_tab2_box.className = "zhujue_tab2_box";
            zhujue_tab3_box.className = "zhujue_tab3_box";
            confont4.style.display = "block";
            confont1.style.display = "none";
            confont2.style.display = "none";
            confont3.style.display = "none";
        }

        var shishen_btseach_btn = document.getElementsByClassName("shishen_btseach_btn")[0];
        shishen_btseach_btn.onfocus = function(){
            shishen_btseach_btn.value = "";
        }
        shishen_btseach_btn.onblur = function(){
            shishen_btseach_btn.value = "请输入寮间问题";
        }

//式神模块结束-------------------吴境丽---------------------------------
//攻略模块开始---------------------涂菱-----------------------------------
    var strategy_pic_wrap = document.getElementById("strategy_pic_wrap");//获取ul框以便于滚动
    var balck_dot1 = document.getElementById("balck_dot1");//li小黑点1
    var balck_dot2 = document.getElementById("balck_dot2");//li小黑点2
    var dot_child1 = balck_dot1.children[0];//li小黑点1里的i标签以便于设置class
    var dot_child2 = balck_dot2.children[0];//li小黑点1里的i标签以便于设置class
    var str_img = document.getElementById("str_img");//获取滚动的图片
    var target = str_img.offsetWidth;//获取滚动的图片的宽度
    var timer;//定时器id
    var flag1 = true;
    var  balckDot2 = function () {
        if(flag1){
            flag1 = false;
            dot_child2.removeAttribute("class","on");
            dot_child1.setAttribute("class","on");
            Animation.animate(strategy_pic_wrap,{
                left:-target
            }, function () {
                flag1 = true;
            });
        }
    };
    var balckDot1 = function () {
        if(flag1){
            flag1 = false;
            dot_child2.setAttribute("class","on");
            dot_child1.removeAttribute("class","on");
            Animation.animate(strategy_pic_wrap,{
                left:0
            }, function () {
                flag1 = true;
            });
        }
    };
    balck_dot2.onmouseover = balckDot2;
    balck_dot1.onmouseover = balckDot1;
    var flag = true;
    timer = setInterval(function () {
        if(flag){
            balckDot2();
            flag = false;
        }else{
            balckDot1();
            flag = true;
        }
    },3000);
    //导航动画开始
    var strategyNav = document.getElementById("strategyNav");//策略导航外框
    var strategyNavaLink = strategyNav.children;//策略导航栏下的每一个a标签
    for(var i = 0; i < strategyNavaLink.length; i++){
        //遍历每一个a标签
        strategyNavaLink[i].onmouseover = function () {
            //获取当前a下的span
            var strSpan = this.children[0];
            Animation.animate(strSpan,{
                marginTop:0
            })
        }
        strategyNavaLink[i].onmouseout = function () {
            var strSpan = this.children[0];
            Animation.animate(strSpan,{
                marginTop:10
            })
        }
    }
    //策略右栏动画开始
    var strRightNav = document.getElementById("strRightNav");
    var strRightNavTab = strRightNav.getElementsByTagName("a");
    var strList = document.getElementById("strList");
    var strUls = strList.children;
    var strUlsWidth = strUls[0].offsetWidth;
    //第一个a标签鼠标效果
    strRightNavTab[0].onmouseover = function (){
        Animation.animate(strList,{
            left:0
        })
    }
    //其他a标签鼠标移动效果
    for(var i = 1; i < strRightNavTab.length; i++){
        strRightNavTab[i].index = i;
        //鼠标移入蓝色背景
        strRightNavTab[i].onmouseover = function () {
            var blueBubble = this.children[1];
            Animation.animate(blueBubble,{
                opacity:1,
                top:0
            });
            //ul跟随移动
            Animation.animate(strList,{
                left:-this.index*strUlsWidth
            })

        }
        //鼠标移出蓝色背景消失
        strRightNavTab[i].onmouseout = function () {
            var blueBubble = this.children[1];
            Animation.animate(blueBubble,{
                opacity:0,
                top:6
            })
        }
    }
//攻略模块结束---------------------涂菱-----------------------------------

//同人模块开始---------------------俞建彬----------------------------
        //1.获取操作的对象
        var tongren_tabs = document.getElementById("tongren_tabs");
        var tongren_tabs_a = tongren_tabs.getElementsByTagName("a");
        var tongren_tabs_span = tongren_tabs.getElementsByTagName("span");
        var tongren_tabs_i = tongren_tabs.getElementsByTagName("i");
        //console.log(tongren_tabs_a);
        var tongren_content_pics_1 = document.getElementById("tongren_content_pics_1");
        var width = tongren_content_pics_1.offsetWidth;
        var tongren_content_pics = document.getElementById("tongren_content_pics");
        var tongren_last = tongren_tabs_a[6]
        //给tongren_tabs_a注册事件
        for (var i = 0; i < tongren_tabs_i.length; i++) {
            tongren_tabs_a[i].setAttribute("index",i)
            tongren_tabs_a[i].onmouseover = function () {
                for (var i = 0; i < tongren_tabs_i.length; i++) {//鼠标移入先清空所有的状态
                    Animation.animate(tongren_tabs_span[i],{
                        top:18
                    })
                    Animation.animate(tongren_tabs_i[i],{
                        bottom: -80
                    })
                }
                var index = this.getAttribute("index");//显示对应的文字
                Animation.animate(tongren_tabs_span[index],{
                    top:0
                })
                Animation.animate(tongren_tabs_i[index],{//显示对应的图标
                    bottom: -20
                })
                Animation.animate(tongren_content_pics,{//显示对应的ul
                    left: -width*index
                })
            }
            tongren_last.onmouseover = function () {
                Animation.animate(tongren_last,{
                    right:0
                })
            }
            tongren_last.onmouseout = function () {
                Animation.animate(tongren_last,{
                    right:10
                })
            }
        }
        //function animate (obj,json,fn) {
        //    clearInterval(obj.timeId);
        //    obj.timeId = setInterval(function () {
        //        var flag = true;
        //        for (var key in json) {
        //            if (key == "opacity") {
        //                var leader = parseInt(getStyle(obj, key) * 100) || 0;
        //                var target = json[key] * 100;
        //                var step = (target - leader) / 10;
        //                step = step > 0 ? Math.ceil(step) : Math.floor(step);
        //                leader = leader + step;
        //                obj.style[key] = leader / 100;
        //            }
        //            else if (key == "zIndex") {
        //                var leader = parseInt(getStyle(obj, key)) || 0;
        //                var target = json[key];
        //                var step = (target - leader) / 10;
        //                step = step > 0 ? Math.ceil(step) : Math.floor(step);
        //                leader = leader + step;
        //                obj.style[key] = leader;
        //            }
        //            else {
        //                var leader = parseInt(getStyle(obj, key)) || 0;
        //                var target = json[key];
        //                var step = (target - leader) / 10;
        //                step = step > 0 ? Math.ceil(step) : Math.floor(step);
        //                leader = leader + step;
        //                obj.style[key] = leader + "px";
        //            }
        //            if (leader != target) {
        //                flag = false;
        //            }
        //        }
        //        if (flag) {
        //            clearInterval(obj.timeId);
        //            if (typeof fn == "function") {
        //                fn();
        //            }
        //        }
        //    }, 15)
        //}
        //function getStyle (obj,attr) {
        //    if(obj.currentStyle) {
        //        return obj.currentStyle[attr];
        //    }
        //    else {
        //        return getComputedStyle(obj,null)[attr];
        //    }
        //}
//同人模块结束---------------------俞建彬----------------------------
//二维码、底部-------------------------------------黎人凤
    var footer_btn = document.getElementById("footer_btn");
    var yc = document.getElementById("yc");
    var bar = document.getElementById("bar");
    var sm = document.getElementById("bottom_code_wrap");
    var door =document.getElementById("door");


    Animation.animate(sm,{
        opacity:0
    });
    footer_btn.onmousemove =function(){
        Animation.animate(yc,{
            opacity:0
        })
        Animation.animate(bar,{
            top:170
        });
        Animation.animate(door,{
            top:380
        });
        Animation.animate(sm,{
            top:220,
            opacity:1
        });


    }
    footer_btn.onmouseout =function(){
        Animation.animate(yc,{
            opacity:1
        })
        Animation.animate(bar,{
            top:220
        });
        Animation.animate(door,{
            top:344
        });
        Animation.animate(sm,{
            top:200,
            opacity:0
        });

    }
//二维码、底部-------------------------------------黎人凤

}
//---------------------------------简彧
$(function() {
    //第一个视频
    var item1 = document.querySelector(".js_video1");
    var video1 = document.getElementsByClassName("video1")[0];
    var span_video1 = document.getElementById("span_video1");
    var div_video1 = document.getElementById("div_video1");
    item1.onclick=function() {
        div_video1.style.display="block";
        video1.play();
    };
    span_video1.onclick=function() {
        $(div_video1).hide();
        video1.pause();
    }
    //第二个视频
    var item2 = document.querySelector(".js_video2");
    var video2 = document.getElementsByClassName("video2")[0];
    var span_video2 = document.getElementById("span_video2");
    var div_video2 = document.getElementById("div_video2");
    item2.onclick=function() {
        div_video2.style.display="block";
        video2.play();
    };
    span_video2.onclick=function() {
        $(div_video2).hide();
        video2.pause();

    }
    //第三个视频
    var item3 = document.querySelector(".js_video3");
    var video3 = document.getElementsByClassName("video3")[0];
    var span_video3 = document.getElementById("span_video3");
    var div_video3 = document.getElementById("div_video3");
    item3.onclick=function() {
        div_video3.style.display="block";
        video3.play();
    };
    span_video3.onclick=function() {
        $(div_video3).hide();
        video3.pause();
    }
});
