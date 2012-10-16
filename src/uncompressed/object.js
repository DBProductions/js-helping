JSHELPING.loadedmodule.object = function() {
    return {
        extend: function(c, p) {
            c.prototype = p.prototype;
	    c.prototype = new p();            
        },
	clone: function(obj) {
            var target = {};
            for (var i in obj) {
	        if (obj.hasOwnProperty(i)) {
		    target[i] = obj[i];
	        }
            }
            return target;
        }
    }
}
