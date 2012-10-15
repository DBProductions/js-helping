JSHELPING.loadedmodule.event = function() {
    return {
        add: function(obj, type, fn) {
	    if (obj.addEventListener) {
	        obj.addEventListener( type, fn, false );
	    } else if (obj.attachEvent) {
		obj["e"+type+fn] = fn;
		obj[type+fn] = function() {obj["e"+type+fn]( window.event );}
		obj.attachEvent( "on"+type, obj[type+fn] );
	    }
	},
	remove: function(obj, type, fn) {
	    if (obj.removeEventListener) {
	        obj.removeEventListener( type, fn, false );
		obj[type] = undefined;
	    } else if (obj.detachEvent) {
	        obj.detachEvent( "on"+type, obj[type+fn] );
		obj[type+fn] = null;
		obj["e"+type+fn] = null;
	    }
	},
        cancelBubbling: function(evt) {
	    if(!evt) var evt = window.event;
	    evt.cancelBubble = true; // IE
	    if (evt.stopPropagation) evt.stopPropagation(); // MOZ
	}
    }
}
