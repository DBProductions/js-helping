if(!JSHELPING) {
    var JSHELPING = {};
}
/**
 * This is the description for the element class.  
 * It offers some basic methods to help working with DOM element.
 *
 * @class element
 */
JSHELPING._element = function _element() {
    'use strict';
    return {
        /**
         * Create a DOM element and append it to the parent element.
         *
         * @method add
         * @param {Element} parent
         * @param {String} id
         */
        add: function add(parent, id) {
            var newdiv = document.createElement('div');
            newdiv.setAttribute('id', id);
            document.querySelector(parent).appendChild(newdiv);
        },
        /**
         * Remove a DOM element selected with id from the parent element.
         *
         * @method remove
         * @param {String} id
         */
        remove: function remove(id) {
            var ele = document.getElementById(id);
            var parent = ele.parentNode;
            parent.removeChild(ele);
        },
        /**
         * Is only a wrapper method for 'document.querySelector'.
         *
         * @method query
         * @param {String} ele
         */
        query: function query(ele) {
            return document.querySelector(ele);   
        },
        /**
         * Is only a wrapper method for 'document.querySelectorAll'.
         *
         * @method queryAll
         * @param {String} ele
         */
        queryAll: function queryAll(ele) {
            return document.querySelectorAll(ele);   
        },
        /**
         * Adds a class to the element className.
         *
         * @method addClass
         * @param {Element} ele
         * @param {String} cls
         */
        addClass: function addClass(ele, cls) {
            if (!this.hasClass(ele, cls)) {
                ele.className += " " + cls;
            }
        },
        /**
         * Check if the element has the class name as attribute defined.
         *
         * @method hasClass
         * @param {Element} ele
         * @param {String} selector
         * @return {Boolean}
         */
        hasClass: function hasClass(ele, selector) {
            var className = " " + selector + " ";
            var elemClassName = ele.getAttribute("class");
            if ((" " + elemClassName + " ").replace(/[\n\t]/g, " ").indexOf(className) > -1) {
                return true;
            }  
            return false;
        },
        /**
         * Remove the class from the element.
         *
         * @method removeClass
         * @param {Element} ele
         * @param {String} cls
         */
        removeClass: function removeClass(ele, cls) {
            if (this.hasClass(ele,cls)) {
                ele.className = ele.className.replace(new RegExp('(\\s|^)'+cls+'(\\s|$)'), ' ');
            }
        },
        /**
         * Returns the coordinates of the element.
         *
         * @method getPos
         * @param {Element} ele
         * @return {Object} x, y
         */
        getPos: function getPos(ele) {
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
