var JSHELPING = JSHELPING || {};
/** */
describe("JSHELPING object module", function() {    
    var modObject = JSHELPING._object();
    /** */
    it("set property to object", function() {
        var o = {};
        modObject.setProperty(o, 'a', 'A');
        modObject.setProperty(o, 'b', 'B');
        modObject.setProperty(o, 'c', 'C');
        expect(o.a).toBe('A');
        expect(o.b).toBe('B');
        expect(o.c).toBe('C');
    });
    /** */
    it("extend an object", function() {
        var P = function P() {
            this.name = 'value';
            this.getName = function() {
                return this.name;
            };
        };
        var C = function C() {};
        modObject.extend(C, P);
        var D = function D() {};
        modObject.extend(D, C);
        var p = new P();
        var c = new C();
        var d = new D();
        expect(c.name).toBe('value');
        expect(c.getName()).toBe('value');
        expect(d.name).toBe('value');
        expect(d.getName()).toBe('value');
    });
    /** */
    it("extend an object", function() {
        var P = function() {
            this.name = 'value';
        };
        var p = new P();
        var c = modObject.clone(p);
        expect(c.name).toBe('value');
    });
});