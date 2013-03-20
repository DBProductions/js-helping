if(!JSHELPING) {
    var JSHELPING = {};
}
JSHELPING._sockjs = function() {
    'use strict';
    return {
        socket: null,
        connect: function(url, callback) {
            this.socket = new SockJS(url);
            this.socket.onmessage = function(e) {
                callback(e.data);
            };
        },
        send: function(data) {
            this.socket.send(data);	
        }
    };
};