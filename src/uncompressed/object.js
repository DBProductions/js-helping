if(!JSHELPING) {
    var JSHELPING = {};
}
JSHELPING._object = function _object() {
    'use strict';
    return {
        setProperty: function setProperty(obj, key, value) {
            Object.defineProperty(obj, key, {value: value, writable: true, enumerable: true, configurable: true});
        },
        extend: function extend(C, P) {
            C.prototype = P.prototype;
            C.prototype = new P();            
        },
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
