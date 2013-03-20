# js-helping

native js script collection to create NodeJS prototypes.

js-helping works with JSHELPING as namespace, it's basically very simple. 
Comes with some modules `array, object, element, event, form, socketio, sockjs`.

## Load it.

    <script src="js-helping.js"></script>

## Use it.

    var jsh = JSHELPING;
    var modArray = jsh._array();

# Build it

Using grunt to run JSHint, QUnit and UglifyJS. `grunt`

# Modules

### array
`isArray(obj)`

`each(array, function)`

`remove(array, item)`

### object
`setProperty(obj, key, value)`

`extend(child, parent)`

`clone(obj)`

### element
`add(parent, id)`

`remove(id)`

`query(ele)`

`queryAll(ele)`

`addClass(el, cls)`

`hasClass(el, selector)`

`removeClass(el, cls)`

`getPos(ele)`

### event
`add(obj, type, fn)`

`remove(obj, type, fn)`

### form
`validate(form)`

### socketio
`connect(url, handlings)`

`send(name, data)`

### sockjs
