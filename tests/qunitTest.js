module("JSHELPING.mods.array");
test("isArray", function() {
    expect(3);
    var testArr = [1,2,3], 
        testNum = 3, 
        testStr = 'test';
    equal( true, JSHELPING.mods.array.isArray(testArr), "returns true it's an array" );
    equal( false, JSHELPING.mods.array.isArray(testNum), "returns false it's a number" );
    equal( false, JSHELPING.mods.array.isArray(testStr), "returns false it's a string" );			
});

module("JSHELPING.mods.element");
test("add and remove testing", function() {
    //expect(2);
    JSHELPING.mods.element.add('qunit', 'newTestEle');
    var ele = document.querySelector('#newTestEle');
    equal( "object", typeof(ele), "add element" );
    JSHELPING.mods.element.remove('newTestEle');
    var ele = document.querySelector('#newTestEle');
    equal( null, ele, "remove element" );
});

module("JSHELPING.mods.event");
test("add event testing", function() {        	
    function testFunc() { console.log('click event test'); }
    JSHELPING.mods.event.add(document.querySelector('#qunit'), 'click', testFunc);
    equal( 'function', typeof document.querySelector('#qunit').click, "add event handler" );
});
test("remove event testing", function() {
    function testFunc() { console.log('click event test'); }
    JSHELPING.mods.event.remove(document.querySelector('#qunit'), 'click', testFunc);
    equal( 'undefined', typeof document.querySelector('#qunit').click, "remove event handler" );
});

module("JSHELPING.mods.classes");
test("add class and has class testing", function() {        	
    expect(2);
    var ele = document.querySelector('#qunit');
    JSHELPING.mods.classes.addClass(document.querySelector('#qunit'), 'test1');
	JSHELPING.mods.classes.addClass(document.querySelector('#qunit'), 'test2');
	equal( true, JSHELPING.mods.classes.hasClass(ele, 'test1'), "add class test1" );
	equal( true, JSHELPING.mods.classes.hasClass(ele, 'test2'), "add class test2" );
});
test("remove class and has class testing", function() {        	
    expect(2);
    var ele = document.querySelector('#qunit');
    JSHELPING.mods.classes.removeClass(document.querySelector('#qunit'), 'test1');
	JSHELPING.mods.classes.removeClass(document.querySelector('#qunit'), 'test2');
	equal( false, JSHELPING.mods.classes.hasClass(ele, 'test1'), "remove class test1" );
	equal( false, JSHELPING.mods.classes.hasClass(ele, 'test2'), "remove class test2" );
});