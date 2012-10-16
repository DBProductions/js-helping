JSHELPING.loadedmodule.object = function() {
    return {
        extend: function(C, P) {
		    C.prototype = P.prototype;
			C.prototype = new P();            
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
