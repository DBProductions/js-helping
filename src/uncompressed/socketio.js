if(!JSHELPING) {
    var JSHELPING = {};
}
/**
 * This is the description for the socketio class.
 *
 * @class socketio
 */
JSHELPING._socketio = function _socketio() {
    'use strict';
    return {
        socket: null,
        /**
         * Connect to socket server.
         *
         * @method connect
         * @param {String} url
         * @param {Object} handlings
         */
        connect: function connect(url, handlings) {
            this.socket = io.connect(url);
            for (var i in handlings) {
                this.socket.on(handlings[i].name, handlings[i].func);
            }
        },
        /**
         * Send message to connected socket server.
         *
         * @method send
         * @param {String} name
         * @param {Object} data
         */
        send: function send(name, data) {
            this.socket.emit(name, data);	
        }
    };
};
