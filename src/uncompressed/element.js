if(!JSHELPING) {
    var JSHELPING = {};
}
JSHELPING._element = function() {
    'use strict';
    return {
        add: function(parent, id) {
            var newdiv = document.createElement('div');
            newdiv.setAttribute('id', id);
            document.querySelector(parent).appendChild(newdiv);
        },
        remove: function(id) {
            var ele = document.getElementById(id);
            var parent = ele.parentNode;
            parent.removeChild(ele);
        },
        query: function(ele) {
            return document.querySelector(ele);   
        },
        queryAll: function(ele) {
            return document.querySelectorAll(ele);   
        },
        addClass: function(ele, cls) {
            if (!this.hasClass(ele, cls)) {
                ele.className += " " + cls;
            }
        },
        hasClass: function(ele, selector) {
            var className = " " + selector + " ";
            var elemClassName = ele.getAttribute("class");
            if ((" " + elemClassName + " ").replace(/[\n\t]/g, " ").indexOf(className) > -1) {
                return true;
            }  
            return false;
        },
        removeClass: function(ele, cls) {
            if (this.hasClass(ele,cls)) {
                ele.className = ele.className.replace(new RegExp('(\\s|^)'+cls+'(\\s|$)'), ' ');
            }
        },
        getPos: function(ele) {
            var curleft = 0;
            var curtop = 0;
            if (ele.offsetParent) {
                do {
                    curleft += ele.offsetLeft;
                    curtop += ele.offsetTop;
                } while (ele = ele.offsetParent);
            }
            return {x: curleft, y: curtop};
        }
    };
};
