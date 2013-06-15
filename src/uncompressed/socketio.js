if(!JSHELPING) {
    var JSHELPING = {};
}
JSHELPING._socketio = function _socketio() {
    'use strict';
    return {
        socket: null,
        connect: function connect(url, handlings) {
            this.socket = io.connect(url);
            for (var i in handlings) {
                this.socket.on(handlings[i].name, handlings[i].func);
            }
        },
        send: function send(name, data) {
            this.socket.emit(name, data);	
        }
    };
};
