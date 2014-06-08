if(!JSHELPING) {
    var JSHELPING = {};
}
/**
 * This is the description for the xhr class.
 *
 * @class xhr
 */
JSHELPING._xhr = function _xhr() {
	'use strict';
    return {
        /**
         * request to server.
         *
         * @method request
         * @param {String} url
         * @param {String} method GET | POST
         * @param {Function} callback
         * @param {String} data
         */
        request: function request(url, method, callback, data) {
            var req = new XMLHttpRequest();
            req.open(method, url, true);            
            if (method === 'POST' || method === 'post') {
                req.setRequestHeader("Content-type","application/x-www-form-urlencoded");
                req.send(data);
            } else {
                req.send();    
            } 
            req.onreadystatechange = function() {
                if (req.readyState === 4 && req.status === 200) {
                    callback(req.responseText);
                }
            };  
        }
    };
};