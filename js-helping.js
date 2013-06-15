if(!JSHELPING)var JSHELPING={};JSHELPING._array=function(){"use strict";return{"isArray":function(t){return Object.prototype.toString.call(t)==="[object Array]"},"equalArray":function(t,n){if(t.length!==n.length)return!1;var r=!0,i;for(i=0;i<n.length&&r;i++)r=t[i]===n[i];return r},"each":function(t,n){var r;for(r=t.length-1;r>=0;r--)t[r]=n(t[r])},"remove":function(t,n){var r=0;while(r<t.length)t[r]===n?t.splice(r,1):r+=1;return t}}};
if(!JSHELPING)var JSHELPING={};JSHELPING._element=function(){"use strict";return{"add":function(t,n){var r=document.createElement("div");r.setAttribute("id",n),document.querySelector(t).appendChild(r)},"remove":function(t){var n=document.getElementById(t),r=n.parentNode;r.removeChild(n)},"query":function(t){return document.querySelector(t)},"queryAll":function(t){return document.querySelectorAll(t)},"addClass":function(t,n){this.hasClass(t,n)||(t.className+=" "+n)},"hasClass":function(t,n){var r=" "+n+" ",i=t.getAttribute("class");return(" "+i+" ").replace(/[\n\t]/g," ").indexOf(r)>-1?!0:!1},"removeClass":function(t,n){this.hasClass(t,n)&&(t.className=t.className.replace(new RegExp("(\\s|^)"+n+"(\\s|$)")," "))},"getPos":function(t){var n=0,r=0;if(t.offsetParent)do n+=t.offsetLeft,r+=t.offsetTop;while(t=t.offsetParent);return{"x":n,"y":r}}}};
if(!JSHELPING)var JSHELPING={};JSHELPING._event=function(){"use strict";return{"add":function(t,n,r){t.addEventListener?t.addEventListener(n,r,!1):t.attachEvent&&(t["e"+n+r]=r,t[n+r]=function(){t["e"+n+r](window.event)},t.attachEvent("on"+n,t[n+r]))},"remove":function(t,n,r){t.removeEventListener?(t.removeEventListener(n,r,!1),t[n]=undefined):t.detachEvent&&(t.detachEvent("on"+n,t[n+r]),t[n+r]=null,t["e"+n+r]=null)}}};
if(!JSHELPING)var JSHELPING={};JSHELPING._form=function(){"use strict";return{"validate":function(e){var t=document.getElementById(e)||document.getElementsByName(e)[0],n={};for(var r=0;r<t.length;r++)if(t[r].type&&"password"!==t[r].type&&"submit"!==t[r].type&&"reset"!==t[r].type&&"button"!==t[r].type&&"fieldset"!==t[r].type){n[r]={},t[r].name&&(n[r].element=t[r].name),t[r].id&&(n[r].element=t[r].id),t[r].placeholder&&t[r].placeholder===t[r].value&&(n[r].error="placeholder");if(t[r].pattern){var i=new RegExp(t[r].pattern,"g");!1===i.test(t[r].value)&&(n[r].error="pattern")}""===t[r].value&&(n[r].error="empty")}return n}}};
if(!JSHELPING)var JSHELPING={};JSHELPING._object=function(){"use strict";return{"setProperty":function(t,n,r){Object.defineProperty(t,n,{"value":r,"writable":!0,"enumerable":!0,"configurable":!0})},"extend":function(t,n){t.prototype=n.prototype,t.prototype=new n},"clone":function(t){var n={};for(var r in t)t.hasOwnProperty(r)&&(n[r]=t[r]);return n}}};
if(!JSHELPING)var JSHELPING={};JSHELPING._socketio=function(){"use strict";return{"socket":null,"connect":function(t,n){this.socket=io.connect(t);for(var r in n)this.socket.on(n[r].name,n[r].func)},"send":function(t,n){this.socket.emit(t,n)}}};
if(!JSHELPING)var JSHELPING={};JSHELPING._sockjs=function(){"use strict";return{"socket":null,"connect":function(t,n){this.socket=new SockJS(t),this.socket.onmessage=function(e){n(e.data)}},"send":function(t){this.socket.send(t)}}};