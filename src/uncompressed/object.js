if(!JSHELPING) {
    var JSHELPING = {};
}
/**
 * This is the description for the object class.
 *
 * @class object
 */
JSHELPING._object = function _object() {
    'use strict';
    return {
        /**
         * Set property of a object.
         *
         * @method setProperty
         * @param {Object} obj
         * @param {String} key
         * @param {Mixed} value
         */
        setProperty: function setProperty(obj, key, value) {
            Object.defineProperty(obj, key, {value: value, writable: true, enumerable: true, configurable: true});
        },
        /**
         * Extend the child from the parent.
         *
         * @method extend
         * @param {Object} C
         * @param {Object} P
         */
        extend: function extend(C, P) {
            C.prototype = P.prototype;
            C.prototype = new P();            
        },
        /**
         * Returns a cloned object.
         *
         * @method clone
         * @param {Object} obj
         * @return {Object} the cloned object
         */
        clone: function clone(obj) {
            var target = {};
            for (var i in obj) {
                if (obj.hasOwnProperty(i)) {
                    target[i] = obj[i];
                }
            }
            return target;
        }
    };
};
