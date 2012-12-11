JSHELPING.loadedmodule.socketio = function() {
    return {
        socket: null,
        connect: function(url, handlings) {
            this.socket = io.connect(url);
            for (var i in handlings) {
                this.socket.on(handlings[i].name, handlings[i].func);
            }
        },
        send: function(name, data) {
            this.socket.emit(name, data);	
        }
    };
};
