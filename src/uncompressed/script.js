/**
 * V.0.1
 */
var JSHELPING = {};
JSHELPING.loadedmodule = {};
JSHELPING.Core = {};
JSHELPING.Core.modules = {};

JSHELPING.Core.register = function(name, func) {
    this.modules[name] = func;
};
JSHELPING.Core.getModule = function(name) { 
    return this.modules[name]();
};
JSHELPING.Core.loadModule = function(name) {
    var s = document.createElement('script');
	s.async = true;
	s.src = 'src/' + name + '-min.js';
	document.getElementsByTagName('head')[0].appendChild(s);
	var that = this;
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
