'use strict';
module.exports = function(grunt) {
    grunt.initConfig({
        lint: {
            all: ['grunt.js', 'src/uncompressed/**/*.js']
        },
        jshint: {
            options: {
                curly: true,
                eqeqeq: true,
                eqnull: true,
                browser: true,
                node: true,
                immed: false,
                latedef: true,
                newcap: true,
                noarg: true,
                sub: true,
                undef: true,
                boss: true              
            },
            globals: {
                jQuery: true,
                io: true,
                SockJS: true,
                JSHELPING: true
            }
        },
        min: {
            minarray: {
                src: ['src/uncompressed/array.js'],
                dest: 'src/array.min.js'
            },
            minelement: {
                src: ['src/uncompressed/element.js'],
                dest: 'src/element.min.js'
            },
            minevent: {
                src: ['src/uncompressed/event.js'],
                dest: 'src/event.min.js'
            },
            minform: {
                src: ['src/uncompressed/form.js'],
                dest: 'src/form.min.js'
            },
            minobject: {
                src: ['src/uncompressed/object.js'],
                dest: 'src/object.min.js'
            },
            minsocketio: {
                src: ['src/uncompressed/socketio.js'],
                dest: 'src/socketio.min.js'
            },
            minsockjs: {
                src: ['src/uncompressed/sockjs.js'],
                dest: 'src/sockjs.min.js'
            }
        },
        uglify: {
            mangle: {toplevel: false}, //prevent changes to variable and function names
            squeeze: {dead_code: false},
            codegen: {quote_keys: true}
        },
        concat: {
            deploy: {
                src: ['src/array.min.js','src/element.min.js','src/event.min.js','src/form.min.js','src/object.min.js','src/socketio.min.js','src/sockjs.min.js'],
                dest: 'js-helping.js'
            }
        }
    });
    
    grunt.registerTask('default', 'lint min concat');
};
