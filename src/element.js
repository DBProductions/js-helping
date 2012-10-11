JSHELPING.loadedmodule.element = function() {
    return {
		add: function(parent, id) {
            var newdiv = document.createElement('div');
            newdiv.setAttribute('id', id);
            document.getElementById(parent).appendChild(newdiv);
        },
		remove: function(id) {
			var ele = document.getElementById(id);
			var parent = ele.parentNode;
			parent.removeChild(ele);
        },
		addClass: function(ele, cls) {
            if (!this.hasClass(ele, cls)) ele.className += " " + cls;
        },
		hasClass: function(el, selector) {
			var className = " " + selector + " ";
			var elemClassName = el.getAttribute("class");
			if ((" " + elemClassName + " ").replace(/[\n\t]/g, " ").indexOf(className) > -1) {
				return true;
			}  
			return false;
		},
		removeClass: function(ele, cls) {
			if (this.hasClass(ele,cls)) {
				ele.className = ele.className.replace(new RegExp('(\\s|^)'+cls+'(\\s|$)'), ' ');
			}
        }
	}
}