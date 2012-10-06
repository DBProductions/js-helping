/**
 * V.0.1
 */
var JSHELPING = {};

/** functions */
JSHELPING.mods.functions = {};
/** bind function */
JSHELPING.mods.bind = function(fn, binding) {
    return function(){
        fn.apply(binding, arguments);
    }
}

/** elements */
JSHELPING.mods.element = {};
/** add element */
JSHELPING.mods.element.add = function(parent, id) {
    var newdiv = document.createElement('div');
    newdiv.setAttribute('id', id);
    document.getElementById(parent).appendChild(newdiv);
}
/** remove element */
JSHELPING.mods.element.remove = function(id) {
    var ele = document.getElementById(id);
    var parent = ele.parentNode;
    parent.removeChild(ele);
}

/** events */
JSHELPING.mods.event = {};
/** add event */
JSHELPING.mods.event.add = function(obj, type, fn) {
    if (obj.addEventListener) {
        obj.addEventListener( type, fn, false );
    } else if (obj.attachEvent) {
        obj["e"+type+fn] = fn;
        obj[type+fn] = function() {obj["e"+type+fn]( window.event );}
        obj.attachEvent( "on"+type, obj[type+fn] );
    }
}
/** remove event */
JSHELPING.mods.event.remove = function(obj, type, fn) {
    if (obj.removeEventListener) {
        obj.removeEventListener( type, fn, false );
    } else if (obj.detachEvent) {
        obj.detachEvent( "on"+type, obj[type+fn] );
        obj[type+fn] = null;
        obj["e"+type+fn] = null;
    }
}
/** bubbling event */
JSHELPING.mods.event.cancelBubbling = function(evt) {
    if(!evt) var evt = window.event;
    evt.cancelBubble = true; // IE
    if (evt.stopPropagation) evt.stopPropagation(); // MOZ
}

/** classes */
JSHELPING.mods.classes = {};
/** add a class */
JSHELPING.mods.classes.addClass = function(ele,cls) {
    if (!JSHELPING.mods.classes.hasClass(ele,cls)) { 
	    ele.className += " " + cls;
	}
}
/** remove a class */ 
JSHELPING.mods.classes.removeClass = function(ele,cls) {
    if (JSHELPING.mods.classes.hasClass(ele,cls)) {
        ele.className = ele.className.replace(new RegExp('(\\s|^)'+cls+'(\\s|$)'),' ');
    }
}
/** has a class */
JSHELPING.mods.classes.hasClass = function(ele,cls) {
	return new RegExp('(\\s|^)' + class + '(\\s|$)').test(obj.className);
}