//文本函数
var Txt = {
    /**
     * Created by Administrator on 2017/4/14 0014.
     */
    /**
     * 设置元素文本内容（兼容版本）
     * @param ele
     * @param str
     */
    setText: function (ele, str) {
        if (typeof ele.innerText == "string") {
            ele.innerText = str;
        } else {
            ele.textContent = str;
        }
    },
    /**
     * 获取元素文本内容(兼容版本)
     * @param ele
     * @returns {*}
     */
    getText: function (ele) {
        if (typeof ele.innerText == "string") {
            return ele.innerText;
        } else {
            return ele.textContent;
        }
    }
}
//标签元素函数
var Tar = {

    /**
     * 获取下个元素，封装兼容的nextSibling和nextElementSibling
     * @param ele
     * @returns {*}
     */
    getNextElement: function (ele) {
        if (ele) {
            // 判断输入是否不为空
            if (ele.nextElementSibling) {//判断当前浏览器是否支持此对象的属性或方法
                return ele.nextElementSibling;
            } else { //兼容IE8
                ele = ele.nextSibling;//因为下一个节点,有可能是文本、注释、或是标签，所以需要判断节点类型，不知道循环次数，用while来循环判断
                while (ele.nodeType != 1) {
                    ele = ele.nextSibling;
                }
                return ele;
            }
        }
    },
    /**
     * 获取父元素的最后一个子标签元素节点，封装兼容的lastChild和lastElementChild
     * @param ele
     * @returns {*}
     */
    getLastElement: function (ele) {
        if (ele) {
            if (ele.lastElementChild) {
                return ele.lastElementChild;
            } else {
                ele = ele.lastChild;
                while (ele.nodeType != 1) {
                    ele = ele.previousSibling;
                }
                return ele;
            }

        }
    }
}
//动画相关函数
var Animation = {
    /**
     * 封装多属性动画移动函数
     * @param obj 需要移动的元素对象
     * @param json 需要的动画json数据
     */
    animate: function(obj, json,fn) {
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
        }, 40)
    },
    /**
     * 封装多属性动画移动函数
     * @param obj 需要移动的元素对象
     * @param json 需要的动画json数据
     */
    animateQuick: function(obj, json,fn) {
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
        }, 15)
    }

}
////样式相关函数
var Style = {
    /**
     * 封装了一个获得对象属性值的兼容函数
     * @param obj
     * @param attr
     * @returns {*}
     */
    getStyle: function (obj, attr) {
        if (obj.currentStyle) {
            return obj.currentStyle[attr];
        } else {
            return getComputedStyle(obj, null)[attr];
        }
    }
}
/**
 * 封装一个提取页面滚动坐标的兼容版本的函数
 * @returns {{scrollTop: (Number|number), scroolLeft: (Number|number|*)}}
 */
function scroll(){
    return{
        scrollTop:window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,
        scroollLeft:window.pageXOffset||document.documentElement.scrollLeft||document.body.scroollLeft||0
    }
}
/**
 * 封装一个获取页面大小兼容版本的函数
 * @returns {{width: (Number|number), height: (Number|number)}}
 */
function client(){
    return{
        clientWidth:window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth||0,
        clientHeight:window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight||0
    };
}
/**
 * 封装一个兼容性的页面坐标pageX pageY获取函数
 * @param e
 * @returns {{pageX: (*|Number), pageY: (*|Number)}}
 */
function page(e){//主要针对IE8
    return{
        pageX: e.pageX || e.clientX + document.documentElement.scrollLeft,//IE8支持此属性
        pageY: e.pageY|| e.clientY+document.documentElement.scrollTop
    }
}
//事件相关函数,事件工具
var eventTolls = {
    /**
     * 封装一个兼容的注册事件的函数
     * @param obj
     * @param type
     * @param listener
     */
    addEventListener: function (obj, type, listener) {
        if (obj.addEventListener) {
            obj.addEventListener(type, listener, false);
        } else if (obj.attachEvent) {
            obj.attachEvent("on" + type, listener);
        } else {
            obj["on" + type] = listener;
        }
    },
    /**
     * 封装兼容版本的事件移除函数
     * @param obj
     * @param type
     * @param listener
     */
    removeEventListener: function (obj, type, listener) {
        if (obj && obj.removeEventListener) {
            obj.removeEventListener(type, listener, false);
        } else if (obj && obj.detachEvent) {
            obj.detachEvent("on" + type, listener);
        } else {
            obj["on" + type] = null;
        }
    },
    /**
     * 封装兼容性的阻止事件冒泡的函数
     * @param e
     */
    stopPropagation: function (e) {
        if (e) {
            if (e.stopPropagation) {
                e.stopPropagation();
            } else {
                e.cancelBubble = true;
            }
        }
    },
    /**
     * 封装获取原始触发事件源的事件源的函数
     * @param e
     * @returns {*}
     */
    target: function (e) {
        if (e) {
            if (e.target) {
                return e.target;
            } else {
                return e.srcElement;
            }
        }
    }
}





