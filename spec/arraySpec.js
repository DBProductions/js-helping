var JSHELPING = JSHELPING || {};
/** */
describe("JSHELPING array module", function() {
    var modArray = JSHELPING._array();
    function countup(x) { return x += 1; }
    /** */
    it("isArray", function() {
        var testArr = [1,2,3], 
            testNum = 3, 
            testStr = 'test';
        expect(modArray.isArray(testArr)).toBe(true);
        expect(modArray.isArray(testNum)).toBe(false);
        expect(modArray.isArray(testStr)).toBe(false); 
    });
    /** */
    it("equalArray", function() {
        var testArr1 = [1,2,3];
        var testArr2 = [1,2,3];
        expect(modArray.equalArray(testArr1, testArr2)).toBe(true);
        testArr2.shift();
        expect(modArray.equalArray(testArr1, testArr2)).toBe(false);
        testArr2 = [3,2,1];
        //expect(modArray.equalArray(testArr1, testArr2)).toBe(true);
        testArr2.reverse();
        expect(modArray.equalArray(testArr1, testArr2)).toBe(true);
    });
    /** */
    it("equalArray", function() {
        var arr = [1,2,3,4,5];
        modArray.each(arr, countup);
        expect(arr[0]).toBe(2);
        expect(arr[2]).toBe(4);
        expect(arr[4]).toBe(6);
        arr = modArray.remove(arr, 6);
        expect(arr[3]).toBe(5);
        expect(arr.length).toBe(4);
        arr.push(7);
        expect(arr.length).toBe(5);
        arr.push(1);
        arr = modArray.remove(arr, 1);
        expect(arr.length).toBe(5);
    });
});