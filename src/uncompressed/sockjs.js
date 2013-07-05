if(!JSHELPING) {
    var JSHELPING = {};
}
/**
 * This is the description for the sockjs class.
 *
 * @class sockjs
 */
JSHELPING._sockjs = function _sockjs() {
    'use strict';
    return {
        socket: null,
        /**
         * Connect to socket server.
         *
         * @method connect
         * @param {String} url
         * @param {Function} callback
         */
        connect: function connect(url, callback) {
            this.socket = new SockJS(url);
            this.socket.onmessage = function(e) {
                callback(e.data);
            };
        },
        /**
         * Send message to connected socket server.
         *
         * @method send
         * @param {Object} data
         */
        send: function send(data) {
            this.socket.send(data);	
        }
    };
};