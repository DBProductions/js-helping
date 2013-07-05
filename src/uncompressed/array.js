if(!JSHELPING) {
    var JSHELPING = {};
}
/**
 * This is the description for the array class.  
 * It offers some basic methods to help working with arrays.
 *
 * @class array
 */
JSHELPING._array = function _array() {
    'use strict';
    return {
        /**
         * check if given parameter is an array
         *
         * @method isArray
         * @param {Function} obj
         * @return {Boolean} 
         */
        isArray: function isArray(obj) {
            return (Object.prototype.toString.call(obj) === '[object Array]');
        },
        /**
         * check if the two given arrays are equal
         *
         * @method equalArray
         * @param {Array} array1
         * @return {Array} array2
         */
        equalArray: function equalArray(array1, array2) {
            if (array1.length !== array2.length) {
                return false;
            }
            var areEqual = true, i;
            for (i = 0; (i < array2.length) && areEqual; i++) {
                areEqual = (array1[i] === array2[i]);
            }
            return areEqual;
        },
        /**
         * call the given function on every element in the array
         *
         * @method each
         * @param {Array} arr
         * @return {Function} func 
         */
        each: function each(arr, func) {
            var i;        
            for (i = arr.length-1; i >= 0; i--) {
                arr[i] = func(arr[i]);
            }
        },
        /**
         * removes the item from the array
         *
         * @method remove
         * @param {Array} arr
         * @return {Object} item 
         */
        remove: function remove(arr, item) {
            var i = 0;
            while (i < arr.length) {
                if (arr[i] === item) {
                    arr.splice(i, 1);
                } else {
                    i += 1;
                }
            }
            return arr;
        }
    };
};
