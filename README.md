# js-helping

Small native JavaScript code to create NodeJS prototypes.  
It works with modules and should help with common tasks.  

js-helping works with JSHELPING as namespace.  

Following modules are defined:    
* array
* element
* event
* form
* object
* pubsub
* socketio
* sockjs
* sse
* xhr

## Load it.

    <script type="application/javascript;version=1.8" src="js-helping.js"></script>

## Use it.

    var jsh = JSHELPING;
    var modArray = jsh._array();

## Build it

Using grunt to run JSHint, UglifyJS and YUIDoc.  

    grunt

## Travis CI

The continuous integration service is monitoring this repository: [Link](https://travis-ci.org/DBProductions/js-helping)

![Build Status](https://travis-ci.org/DBProductions/js-helping.svg?branch=master)