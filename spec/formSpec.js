var JSHELPING = JSHELPING || {};
/** */
describe("JSHELPING form module", function() {
	var modForm = JSHELPING._form();
	beforeEach(function () {
		var form = document.createElement("form");
        form.setAttribute("id", "testForm");
        form.setAttribute("name", "testFormName");
        var input = document.createElement("input");
        input.setAttribute("id", "testInput");
        input.setAttribute("name", "testInputName");
        input.setAttribute("placeholder", "test");
        input.setAttribute("pattern", "[A-Za-z]{3}");
        form.appendChild(input);
        document.getElementsByTagName('body')[0].appendChild(form);
	});
	afterEach(function() {
        document.body.removeChild(document.querySelector('#testForm'));
    });
    /** */
    it("form validation", function() {
        document.querySelector('#testInput').value = "";
        var result = modForm.validate('testForm');
        expect(result).toEqual({0: {element: 'testInput', error: 'empty'}});
    });
    /** */
    it("form validation", function() {
        document.querySelector('#testInput').value = "test";
        var result = modForm.validate('testFormName');
        expect(result).toEqual({0: {element: 'testInput', error: 'placeholder'}});
    });
    /** */
    it("form validation", function() {
        document.querySelector('#testInput').value = "3456";
        var result = modForm.validate('testForm');
        expect(result).toEqual({0: {element: 'testInput', error: 'pattern'}});
    });
    /** */
    it("form validation", function() {
        document.querySelector('#testInput').value = "asdf";
        var result = modForm.validate('testForm');
        expect(result).toEqual({0: {element: 'testInput'}});
    });
});