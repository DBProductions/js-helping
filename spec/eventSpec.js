var JSHELPING = JSHELPING || {};
/** */
describe("JSHELPING event module", function() {
	var modEvent = JSHELPING._event();
	beforeEach(function () {
		var container = document.createElement("a");
        container.setAttribute("id", "testEle");
        document.getElementsByTagName('body')[0].appendChild(container);
	});
	afterEach(function() {
        document.body.removeChild(document.querySelector('#testEle'));
    });
    /** */
    it("bind event to object", function() {
        var ele = document.querySelector('#testEle');
        function eventHandle(e) {}  
        modEvent.add(ele, 'click', function (e){});
        expect(ele['click']).toBe(undefined);
        modEvent.remove(ele, 'click', function (e){});
        expect(ele['click']).toBe(undefined);
    });
    /** */
    it("bind event to object", function() {
        var ele = document.querySelector('#testEle');
        ele.addEventListener = null;
        ele.removeEventListener = null;
        ele.attachEvent = function(){};
        ele.detachEvent = function(){};
        function eventHandle(e) {}  
        modEvent.add(ele, 'keydown', eventHandle);
        expect(ele['keydown']).toBe(undefined);
        modEvent.remove(ele, 'keydown', eventHandle);
        expect(ele['keydown']).toBe(undefined);
    });
});