var JSHELPING = JSHELPING || {};
/** */
describe("JSHELPING element module", function() {
	var modElement = JSHELPING._element();
	beforeEach(function () {
		var container = document.createElement("div");
        container.setAttribute("id", "testEle");
        document.getElementsByTagName('body')[0].appendChild(container);
	});
	afterEach(function() {
        document.body.removeChild(document.querySelector('#testEle'));
    });
    /** */
    it("add and remove", function() {
        modElement.add('#testEle', 'newTestEle');
        var ele = modElement.query('#newTestEle');
        expect(typeof(ele)).toBe("object");
        modElement.remove('newTestEle');
        ele = modElement.query('#newTestEle');
        expect(ele).toBe(null);
    });
    /** */
    it("add class and has class testing", function() {
        var ele = modElement.query('#testEle');
        modElement.addClass(modElement.query('#testEle'), 'test1');
        modElement.addClass(modElement.query('#testEle'), 'test2');
        expect(modElement.hasClass(ele, 'test1')).toBe(true);
        expect(modElement.hasClass(ele, 'test2')).toBe(true);
    });
    /** */
    it("remove class and has class testing", function() {
        var ele = modElement.query('#testEle');
        modElement.addClass(modElement.query('#testEle'), 'test1');
        modElement.addClass(modElement.query('#testEle'), 'test2');
        modElement.removeClass(modElement.query('#testEle'), 'test1');
        modElement.removeClass(modElement.query('#testEle'), 'test2');
        expect(modElement.hasClass(ele, 'test1')).toBe(false);
        expect(modElement.hasClass(ele, 'test2')).toBe(false);
    });
    /** */
    it("query the DOM", function() {
        var ele = modElement.queryAll('div');
        expect(ele).not.toBe(false);
    });
    /** */
    it("get position of element", function() {
        var ele = modElement.query('#testEle');
        var pos = modElement.getPos(ele);
        expect(pos).toEqual({x: 5, y: 252});
    });
});