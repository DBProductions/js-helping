var JSHELPING = JSHELPING || {};
/**
 * This is the description for the form class.
 *
 * @class form
 */
JSHELPING._form = function _form() {
    'use strict';
    return {
        /**
         * Validate the element with placeholder, pattern or is the value empty.
         *
         * @method validate
         * @param {String} ele
         */
        validate: function(ele) {
            var frm = document.getElementById(ele) || document.getElementsByName(ele)[0],
                resObj = {};
            for (var i = 0; i < frm.length; i += 1) {
                if ( frm[i].type && 
                   ("password" !== frm[i].type) && 
                   ("submit" !== frm[i].type) && 
                   ("reset" !== frm[i].type) && 
                   ("button" !== frm[i].type) && 
                   ("fieldset" !== frm[i].type) ) {
                resObj[i] = {};
                if (frm[i].name) { resObj[i].element = frm[i].name; }
                if (frm[i].id) { resObj[i].element = frm[i].id; }
                // placeholder send
                if (frm[i].placeholder) {
                    if ( frm[i].placeholder === frm[i].value ) {
                        resObj[i].error = "placeholder";
                    }
                }
                // pattern false
                if (frm[i].pattern) {
                    var myreg = new RegExp(frm[i].pattern, "g");
                    if ( false === myreg.test( frm[i].value ) ) {
                        resObj[i].error = "pattern";
                    }
                }
                // emtpy value
                if ("" === frm[i].value) {
                    resObj[i].error = "empty";
                }
                }
            }
            return resObj;
        }
    };
};
