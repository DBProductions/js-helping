JSHELPING.loadedmodule.array = function() {
    return {
        isArray: function(testObj) {
            return testObj && !(testObj.propertyIsEnumerable('length')) && typeof testObj === 'object' && typeof testObj.length === 'number';
        }
    }
}
