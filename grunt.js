module.exports = function(grunt) {
    grunt.initConfig({
        lint: {
            all: ['grunt.js', 'src/uncompressed/**/*.js', 'tests/**/*.js']
        },
        jshint: {
            options: {
                browser: true
            }
        },
        qunit: {
            all: ['tests.html']
        },
        min: {
            mininit: {
                src: ['src/uncompressed/init.js'],
                dest: 'src/init.min.js'  
            },
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
            }
        },
        concat: {
            deploy: {
                src: ['src/init.min.js','src/array.min.js','src/element.min.js','src/event.min.js','src/form.min.js','src/object.min.js','src/socketio.min.js'],
                dest: 'src/build.js'
            }
        }
    });
    
    grunt.registerTask('default', 'lint qunit min concat');
};
