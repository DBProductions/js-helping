if(!JSHELPING) {
    var JSHELPING = {};
}
/**
 * This is the description for the sse class.
 *
 * @class sse
 */
JSHELPING._sse = function _sse() {
	'use strict';
    return {
        /**
         * Connect to event server.
         *
         * @method connect
         * @param {String} url
         * @param {Function} callback
         */
        connect: function connect(url, callback) {
            var esource = new EventSource(url);
            esource.addEventListener('message', function(e) {
                callback(e.data);
            }, false);
        }
    };
};