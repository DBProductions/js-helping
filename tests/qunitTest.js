window.onload = function() {
    
    var jsc = JSHELPING;

    module("JSHELPING array module");
    var modArray = jsc._array();
    test("isArray", function() {
        expect(3);
        var testArr = [1,2,3], 
            testNum = 3, 
            testStr = 'test';
        equal(true, modArray.isArray(testArr), "returns true it's an array");
        equal(false, modArray.isArray(testNum), "returns false it's a number");
        equal(false, modArray.isArray(testStr), "returns false it's a string");			
    });
    test("equalArray", function() {
        var testArr1 = [1,2,3];
        var testArr2 = [1,2,3];
        equal(true, modArray.equalArray(testArr1, testArr2), "returns true arrays are equal");
        testArr2.shift();
        equal(false, modArray.equalArray(testArr1, testArr2), "returns false arrays are not equal");
    });
    test("each and remove", function() {
        expect(6);
        function countup(x) { return x += 1; }
        var arr = [1,2,3,4,5];
        modArray.each(arr, countup);
        equal(2, arr[0], "returns right value");
        equal(4, arr[2], "returns right value");
        equal(6, arr[4], "returns right value");
        arr = modArray.remove(arr, 6);
        equal(5, arr[3], "last element has right value");
        equal(4, arr.length, "right length");
        arr.push(7);
        equal(5, arr.length, "right length");
    });

    module("JSHELPING element module");
    var modElement = jsc._element();    
    test("add and remove testing", function() {
        expect(2);
        modElement.add('#qunit', 'newTestEle');
        var ele = document.querySelector('#newTestEle');
        equal("object", typeof(ele), "add element");
        modElement.remove('newTestEle');
        ele = document.querySelector('#newTestEle');
        equal(null, ele, "remove element");
    });
    test("add class and has class testing", function() {
        expect(2);
        var ele = document.querySelector('#qunit');
        modElement.addClass(document.querySelector('#qunit'), 'test1');
        modElement.addClass(document.querySelector('#qunit'), 'test2');
        equal(true, modElement.hasClass(ele, 'test1'), "add class test1");
        equal(true, modElement.hasClass(ele, 'test2'), "add class test2");
    });
    test("remove class and has class testing", function() {
        expect(2);
        var ele = document.querySelector('#qunit');
        modElement.removeClass(document.querySelector('#qunit'), 'test1');
        modElement.removeClass(document.querySelector('#qunit'), 'test2');
        equal(false, modElement.hasClass(ele, 'test1'), "remove class test1");
        equal(false, modElement.hasClass(ele, 'test2'), "remove class test2");
    });

    module("JSHELPING object module");
    var o = {};
    var modObject = jsc._object();
    test("set property to object", function() {
        expect(3);
        modObject.setProperty(o, 'a', 'A');
        modObject.setProperty(o, 'b', 'B');
        modObject.setProperty(o, 'c', 'C');
        equal('A', o.a, "object has get property 'a'");
        equal('B', o.b, "object has get property 'b'");
        equal('C', o.c, "object has get property 'c'");
    });
    test("extend an object", function() {
        expect(4);
        var P = function P() {
            this.name = 'value';
            this.getName = function() {
                return this.name;
            }
        };
        var C = function C() {};
        modObject.extend(C, P);
        var D = function D() {};
        modObject.extend(D, C);
        var p = new P();
        var c = new C();
        var d = new D();
        equal('value', c.name, "extended object has the property 'name'");
        equal('value', c.getName(), "extended object has the method 'getName'");
        equal('value', d.name, "second extended object has the property 'name'");
        equal('value', d.getName(), "second extended object has the method 'getName'");
    });
    test("clone an object", function() {
        var P = function() {
            this.name = 'value';
        };
        var p = new P();
        var c = modObject.clone(p);
        equal('value', c.name, "cloned object has the property 'name'");
    });
};