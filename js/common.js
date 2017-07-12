//�ı�����
var Txt = {
        /**
         * Created by Administrator
         */
        /**
         * ����Ԫ���ı����ݣ����ݰ汾��
         * @param ele
         * @param str
         */
        setText: function(ele, str) {
            if (typeof ele.innerText == "string") {
                ele.innerText = str;
            } else {
                ele.textContent = str;
            }
        },
        /**
         * ��ȡԪ���ı�����(���ݰ汾)
         * @param ele
         * @returns {*}
         */
        getText: function(ele) {
            if (typeof ele.innerText == "string") {
                return ele.innerText;
            } else {
                return ele.textContent;
            }
        }
    }
    //��ǩԪ�غ���
var Tar = {

        /**
         * ��ȡ�¸�Ԫ�أ���װ���ݵ�nextSibling��nextElementSibling
         * @param ele
         * @returns {*}
         */
        getNextElement: function(ele) {
            if (ele) {
                // �ж������Ƿ�Ϊ��
                if (ele.nextElementSibling) { //�жϵ�ǰ������Ƿ�֧�ִ˶�������Ի򷽷�
                    return ele.nextElementSibling;
                } else { //����IE8
                    ele = ele.nextSibling; //��Ϊ��һ���ڵ�,�п������ı���ע�͡����Ǳ�ǩ��������Ҫ�жϽڵ����ͣ���֪��ѭ����������while��ѭ���ж�
                    while (ele.nodeType != 1) {
                        ele = ele.nextSibling;
                    }
                    return ele;
                }
            }
        },
        /**
         * ��ȡ��Ԫ�ص����һ���ӱ�ǩԪ�ؽڵ㣬��װ���ݵ�lastChild��lastElementChild
         * @param ele
         * @returns {*}
         */
        getLastElement: function(ele) {
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
    //������غ���
var Animation = {
        /**
         * ��װ�����Զ����ƶ�����
         * @param obj ��Ҫ�ƶ���Ԫ�ض���
         * @param json ��Ҫ�Ķ���json����
         */
        animate: function(obj, json, fn) {
            clearInterval(obj.timeId);
            var leader, step, target;
            obj.timeId = setInterval(function() {
                var flag = true;
                for (var key in json) {
                    if (key == "opacity") { //͸����
                        leader = parseInt(Style.getStyle(obj, key) * 100) || 0;
                        target = parseInt(json[key] * 100) || 0;
                        step = target - leader;
                        step = step / 10 > 0 ? Math.ceil(step / 10) : Math.floor(step / 10);
                        leader = leader + step;
                        obj.style[key] = leader / 100;
                    } else if (key == "zIndex") { //�㼶
                        leader = parseInt(Style.getStyle(obj, key)) || 0;
                        target = parseInt(json[key]) || 0;
                        step = target - leader;
                        step = step / 10 > 0 ? Math.ceil(step / 10) : Math.floor(step / 10);
                        leader = leader + step;
                        obj.style[key] = leader;
                    } else {
                        //������Ե�ǰֵ������ȡ��������ֵpxȥ���ų����������ȡ������autoת����NaN
                        leader = parseInt(Style.getStyle(obj, key)) || 0;
                        //ȡ��json��������Ե�Ŀ��ֵ
                        target = parseInt(json[key]) || 0;
                        //���㲽��
                        step = target - leader;
                        step = step / 10 > 0 ? Math.ceil(step / 10) : Math.floor(step / 10);
                        //���Ը�ֵ
                        leader = leader + step;
                        obj.style[key] = leader + "px";
                    }
                    //����������ֵû�е���Ŀ��ֵʱ��flag��Ϊfalse,������ն�ʱ��
                    if (leader != target) {
                        flag = false;
                    }
                }
                //��������ֵ�ﵽĿ��ֵ����������ռ�ʱ��
                if (flag) {
                    clearInterval(obj.timeId);
                    //fn����Ǻ����ٵ��ã�����ִ��
                    if (typeof fn == "function") {
                        fn();
                    }
                }
            }, 40)
        },
        /**
         * ��װ�����Զ����ƶ�����
         * @param obj ��Ҫ�ƶ���Ԫ�ض���
         * @param json ��Ҫ�Ķ���json����
         */
        animateQuick: function(obj, json, fn) {
            clearInterval(obj.timeId);
            var leader, step, target;
            obj.timeId = setInterval(function() {
                var flag = true;
                for (var key in json) {
                    if (key == "opacity") { //͸����
                        leader = parseInt(Style.getStyle(obj, key) * 100) || 0;
                        target = parseInt(json[key] * 100) || 0;
                        step = target - leader;
                        step = step / 10 > 0 ? Math.ceil(step / 10) : Math.floor(step / 10);
                        leader = leader + step;
                        obj.style[key] = leader / 100;
                    } else if (key == "zIndex") { //�㼶
                        leader = parseInt(Style.getStyle(obj, key)) || 0;
                        target = parseInt(json[key]) || 0;
                        step = target - leader;
                        step = step / 10 > 0 ? Math.ceil(step / 10) : Math.floor(step / 10);
                        leader = leader + step;
                        obj.style[key] = leader;
                    } else {
                        //������Ե�ǰֵ������ȡ��������ֵpxȥ���ų����������ȡ������autoת����NaN
                        leader = parseInt(Style.getStyle(obj, key)) || 0;
                        //ȡ��json��������Ե�Ŀ��ֵ
                        target = parseInt(json[key]) || 0;
                        //���㲽��
                        step = target - leader;
                        step = step / 10 > 0 ? Math.ceil(step / 10) : Math.floor(step / 10);
                        //���Ը�ֵ
                        leader = leader + step;
                        obj.style[key] = leader + "px";
                    }
                    //����������ֵû�е���Ŀ��ֵʱ��flag��Ϊfalse,������ն�ʱ��
                    if (leader != target) {
                        flag = false;
                    }
                }
                //��������ֵ�ﵽĿ��ֵ����������ռ�ʱ��
                if (flag) {
                    clearInterval(obj.timeId);
                    //fn����Ǻ����ٵ��ã�����ִ��
                    if (typeof fn == "function") {
                        fn();
                    }
                }
            }, 15)
        }

    }
    ////��ʽ��غ���
var Style = {
        /**
         * ��װ��һ����ö�������ֵ�ļ��ݺ���
         * @param obj
         * @param attr
         * @returns {*}
         */
        getStyle: function(obj, attr) {
            if (obj.currentStyle) {
                return obj.currentStyle[attr];
            } else {
                return getComputedStyle(obj, null)[attr];
            }
        }
    }
    /**
     * ��װһ����ȡҳ���������ļ��ݰ汾�ĺ���
     * @returns {{scrollTop: (Number|number), scroolLeft: (Number|number|*)}}
     */
function scroll() {
    return {
        scrollTop: window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0,
        scroollLeft: window.pageXOffset || document.documentElement.scrollLeft || document.body.scroollLeft || 0
    }
}
/**
 * ��װһ����ȡҳ���С���ݰ汾�ĺ���
 * @returns {{width: (Number|number), height: (Number|number)}}
 */
function client() {
    return {
        clientWidth: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth || 0,
        clientHeight: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight || 0
    };
}
/**
 * ��װһ�������Ե�ҳ������pageX pageY��ȡ����
 * @param e
 * @returns {{pageX: (*|Number), pageY: (*|Number)}}
 */
function page(e) { //��Ҫ���IE8
    return {
        pageX: e.pageX || e.clientX + document.documentElement.scrollLeft, //IE8֧�ִ�����
        pageY: e.pageY || e.clientY + document.documentElement.scrollTop
    }
}
//�¼���غ���,�¼�����
var eventTolls = {
    /**
     * ��װһ�����ݵ�ע���¼��ĺ���
     * @param obj
     * @param type
     * @param listener
     */
    addEventListener: function(obj, type, listener) {
        if (obj.addEventListener) {
            obj.addEventListener(type, listener, false);
        } else if (obj.attachEvent) {
            obj.attachEvent("on" + type, listener);
        } else {
            obj["on" + type] = listener;
        }
    },
    /**
     * ��װ���ݰ汾���¼��Ƴ�����
     * @param obj
     * @param type
     * @param listener
     */
    removeEventListener: function(obj, type, listener) {
        if (obj && obj.removeEventListener) {
            obj.removeEventListener(type, listener, false);
        } else if (obj && obj.detachEvent) {
            obj.detachEvent("on" + type, listener);
        } else {
            obj["on" + type] = null;
        }
    },
    /**
     * ��װ�����Ե���ֹ�¼�ð�ݵĺ���
     * @param e
     */
    stopPropagation: function(e) {
        if (e) {
            if (e.stopPropagation) {
                e.stopPropagation();
            } else {
                e.cancelBubble = true;
            }
        }
    },
    /**
     * ��װ��ȡԭʼ�����¼�Դ���¼�Դ�ĺ���
     * @param e
     * @returns {*}
     */
    target: function(e) {
        if (e) {
            if (e.target) {
                return e.target;
            } else {
                return e.srcElement;
            }
        }
    }
}