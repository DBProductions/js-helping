window.onload = function() {

var jsc = JSHELPING.Core;

module("JSHELPING array module");
var modArray = jsc.getModule('array');
test("isArray", function() {
    expect(3);
    var testArr = [1,2,3], 
        testNum = 3, 
        testStr = 'test';
    equal( true, modArray.isArray(testArr), "returns true it's an array" );
    equal( false, modArray.isArray(testNum), "returns false it's a number" );
    equal( false, modArray.isArray(testStr), "returns false it's a string" );			
});
test("each and remove", function() {
    expect(5);
    function countup(x) { return x += 1; }
    var arr = [1,2,3,4,5];
    modArray.each(arr, countup);
    equal( 2, arr[0], "returns right value" );
    equal( 4, arr[2], "returns right value" );
    equal( 6, arr[4], "returns right value" );
    arr = modArray.remove(arr, 6);
    console.log(arr);
    equal( 5, arr[3], "last element has right value" );
    equal( 4, arr.length, "right length" );
});

module("JSHELPING element module");
var modElement = jsc.getModule('element');
test("add and remove testing", function() {
    expect(2);
    modElement.add('qunit', 'newTestEle');
    var ele = document.querySelector('#newTestEle');
    equal( "object", typeof(ele), "add element" );
    modElement.remove('newTestEle');
    var ele = document.querySelector('#newTestEle');
    equal( null, ele, "remove element" );
});
test("add class and has class testing", function() {        	
    expect(2);
    var ele = document.querySelector('#qunit');
    modElement.addClass(document.querySelector('#qunit'), 'test1');
    modElement.addClass(document.querySelector('#qunit'), 'test2');
    equal( true, modElement.hasClass(ele, 'test1'), "add class test1" );
    equal( true, modElement.hasClass(ele, 'test2'), "add class test2" );
});
test("remove class and has class testing", function() {        	
    expect(2);
    var ele = document.querySelector('#qunit');
    modElement.removeClass(document.querySelector('#qunit'), 'test1');
    modElement.removeClass(document.querySelector('#qunit'), 'test2');
    equal( false, modElement.hasClass(ele, 'test1'), "remove class test1" );
    equal( false, modElement.hasClass(ele, 'test2'), "remove class test2" );
});

module("JSHELPING event module");
var modEvent = jsc.getModule('event');
test("add event testing", function() {        	
    function testFunc() { console.log('click event test'); }
    modEvent.add(document.querySelector('#qunit'), 'click', testFunc);
    equal( 'function', typeof document.querySelector('#qunit').click, "add event handler" );
});
test("remove event testing", function() {
    function testFunc() { console.log('click event test'); }
    modEvent.remove(document.querySelector('#qunit'), 'click', testFunc);
    equal( 'undefined', typeof document.querySelector('#qunit').click, "remove event handler" );
});

}
