if(!JSHELPING) {
    var JSHELPING = {};
}
/**
 * This is the description for the event class.
 *
 * @class event
 */
JSHELPING._event = function _event() {
    'use strict';
    return {
        /**
         * Adds a event from type with handler function to the element.
         *
         * @method add
         * @param {Element} obj
         * @param {String} type
         * @param {Function} fn
         */
        add: function add(obj, type, fn) {
            if (obj.addEventListener) {
                obj.addEventListener(type, fn, false);
            } else if (obj.attachEvent) {
                obj["e" + type + fn] = fn;
                obj[type + fn] = function() { 
                    obj["e" + type + fn](window.event);
                };
                obj.attachEvent( "on"+type, obj[type+fn] );
            }
        },
        /**
         * Remove event and handler function from element.
         *
         * @method remove
         * @param {Element} obj
         * @param {String} type
         * @param {Function} fn
         */
        remove: function remove(obj, type, fn) {
            if (obj.removeEventListener) {
                obj.removeEventListener(type, fn, false);
                obj[type] = undefined;
            } else if (obj.detachEvent) {
                obj.detachEvent("on" + type, obj[type+fn]);
                obj[type + fn] = null;
                obj["e" + type + fn] = null;
            }
        }
    };
};
