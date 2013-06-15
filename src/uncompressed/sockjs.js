if(!JSHELPING) {
    var JSHELPING = {};
}
JSHELPING._sockjs = function _sockjs() {
    'use strict';
    return {
        socket: null,
        connect: function connect(url, callback) {
            this.socket = new SockJS(url);
            this.socket.onmessage = function(e) {
                callback(e.data);
            };
        },
        send: function send(data) {
            this.socket.send(data);	
        }
    };
};