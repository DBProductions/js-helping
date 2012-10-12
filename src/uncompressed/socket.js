JSHELPING.loadedmodule.socket = function() {
    return {
    	socket: null,
	connect: function(url, handlings) {
            this.socket = io.connect(url);            
            for(i in handlings) {
            	this.socket.on(handlings[i].name, handlings[i].func);
            }
        },
        send: function(name, data) {
            this.socket.emit(name, data);	
        }
    }
}
