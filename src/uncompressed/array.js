if(!JSHELPING) {
    var JSHELPING = {};
}
JSHELPING._array = function() {
    'use strict';
    return {
        isArray: function(testObj) {
            return testObj && !(testObj.propertyIsEnumerable('length')) && typeof testObj === 'object' && typeof testObj.length === 'number';
        },
        each: function(arr, method) {        
            for (var i = arr.length-1; i >= 0; i--) {
                arr[i] = method(arr[i]);
            }
        },
        remove: function(arr, item) {
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
