# js-helping

native js script collection see index.html for basic usage, start it with `node server.js`

js-helping works with JSHELPING as namespace, `script-min.js` load and handle modules.
it's basically very simple with four modules `array, element, event, socket`
define own modules or combine it with other solutions is easy.

### array
`isArray(obj)`

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

### socket
`connect(url, handlings)`
`send(name, data)`
