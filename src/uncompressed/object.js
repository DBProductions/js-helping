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
         * Set a property of a object.
         *
         * @method setProperty
         * @param {Object} obj
         * @param {String} key
         * @param {Mixed} value
         * @param {Object} opts writable, enumerable, configurable
         */
        setProperty: function setProperty(obj, key, value, opts) {
            opts = opts || {};
            opts.writable = opts.writable || true;
            opts.enumerable = opts.enumerable || true;
            opts.configurable = opts.configurable || true;
            Object.defineProperty(obj, key, {value: value, writable: opts.writable, enumerable: opts.enumerable, configurable: opts.configurable});
        },
        /**
         * Extend the child object from the parent object.
         *
         * @method extend
         * @param {Object} C child object
         * @param {Object} P parent object
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
