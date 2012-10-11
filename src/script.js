/**
 * V.0.1
 */
var JSHELPING = {};
JSHELPING.loadedmodule = {};

JSHELPING.Core = {
    modules: {}
};
JSHELPING.Core.register = function(name, func) {
    this.modules[name] = func;
	//console.log('register module ' + name);
};
JSHELPING.Core.getModule = function(name) {
    //console.log('get ' + name);
	//console.log(this.modules); 
    return this.modules[name]();
};
JSHELPING.Core.loadModule = function(name) {
    var s = document.createElement('script');
	s.async = true;
	s.src = 'src/' + name + '.js';
	document.getElementsByTagName('head')[0].appendChild(s);
	var that = this;
	s.onload = function() {
	    //console.log(name);
	    JSHELPING.Core.register(name, JSHELPING.loadedmodule[name]);
	}	
};
JSHELPING.Core.init = (function() {
    // which modules should be loaded
	var scripts = document.getElementsByTagName('script');
	var index = scripts.length - 1;
	var myScript = scripts[index];
	var queryString = myScript.src.replace(/^[^\?]+\??/,'');
	var modules = queryString.split(',');
	for(var i = 0; i < modules.length; i++) {
		JSHELPING.Core.loadModule(modules[i]);
	}
}());
