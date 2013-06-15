if(!JSHELPING) {
    var JSHELPING = {};
}
JSHELPING._array = function _array() {
    'use strict';
    return {
        isArray: function isArray(testObj) {
            return (Object.prototype.toString.call(testObj) === '[object Array]');
        },
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
        each: function each(arr, method) {
            var i;        
            for (i = arr.length-1; i >= 0; i--) {
                arr[i] = method(arr[i]);
            }
        },
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
