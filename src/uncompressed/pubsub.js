if(!JSHELPING) {
    var JSHELPING = {};
}
/**
 * This is the description for the pubsub class.
 *
 * @class pubsub
 */
JSHELPING._pubsub = function _pubsub() {
	'use strict';
	var listeners = {};
	return {
        /**
         * 
         */
        subscribe: function(name, callback, context) {
            if (!listeners[name]) {
                listeners[name] = [];
            }
            listeners[name].push( context ? callback.bind(context) : callback );
        },
        /**
         *
         */
        publish: function(name) {
            var args = Array.prototype.slice.call(arguments, 1);
            if (listeners[name]) {
                listeners[name].forEach(function(listener) {
                    listener.apply(null, args);  
                });
            }
            if (listeners['all']) {
                listeners['all'].forEach(function(listener) {
                    listener.apply(null, [name].concat(args));
                });                
            }
        },
        /**
         * 
         */
        remove: function(name) {
            if (listeners[name]) {
                delete listeners[name];
            }  
        },
        /** 
         *
         */
        spy: function() {
            return listeners;
        }
	};
};