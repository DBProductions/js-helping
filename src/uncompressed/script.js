/**
 * V.0.0.1
 */
var JSHELPING = {};
JSHELPING.loadedmodule = {};
JSHELPING.loadedmodule.deps = {
    'socketio': ['/socket.io/socket.io.js']
};
JSHELPING.Core = {};
JSHELPING.Core.modules = {};

JSHELPING.Core.addScript = function(src) {
    var s = document.createElement('script');
    s.async = true;
    s.src = src;
    document.getElementsByTagName('head')[0].appendChild(s);
    return s;
};
JSHELPING.Core.register = function(name, func) {
    this.modules[name] = func;
};
JSHELPING.Core.getModule = function(name) { 
    return this.modules[name]();
};
JSHELPING.Core.loadModule = function(name) {
    if (JSHELPING.loadedmodule.deps[name]) {
        for(var i = 0; i < JSHELPING.loadedmodule.deps[name].length; i++) {
	    JSHELPING.Core.addScript(JSHELPING.loadedmodule.deps[name][i]);	    
	}
    }
    var s = JSHELPING.Core.addScript('src/' + name + '-min.js');
    s.onload = function() {    	
    	JSHELPING.Core.register(name, JSHELPING.loadedmodule[name]);
    }	
};
JSHELPING.Core.init = (function() {
    var scripts = document.getElementsByTagName('script');
    var queryString = scripts[scripts.length - 1].src.replace(/^[^\?]+\??/,'');
    var modules = queryString.split(',');
    for(var i = 0; i < modules.length; i++) {
        JSHELPING.Core.loadModule(modules[i]);
    }
}());
