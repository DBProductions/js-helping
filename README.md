# js-helping

native js script collection see index.html for basic usage, start it with `node server.js`

js-helping works with JSHELPING as namespace, it's basically very simple with some modules `array, object, element, event, form, socketio`.

## Load it.

    <script src="src/build.js"></script>

## Use it.

    var jsc = JSHELPING;
    var modArray = jsc._array();

### array
`isArray(obj)`

`each(array, function)`

`remove(array, item)`

### object
`extend(child, parent)`

`clone(obj)`

### element
`add(parent, id)`

`remove(id)`

`addClass(el, cls)`

`hasClass(el, selector)`

`removeClass(el, cls)`

### event
`add(obj, type, fn)`

`remove(obj, type, fn)`

`cancalBubbling(evt)`

### form
`validate(form)`

### socketio
`connect(url, handlings)`

`send(name, data)`

# Grunt.js
Using grunt to run JSHint, QUnit and UglifyJS. `grunt`
