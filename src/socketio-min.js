JSHELPING.loadedmodule.socketio=function(){return{socket:null,connect:function(a,b){this.socket=io.connect(a);for(i in b){this.socket.on(b[i].name,b[i].func)}},send:function(a,b){this.socket.emit(a,b)}}}