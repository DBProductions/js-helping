module.exports = function(grunt) {
    'use strict';
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        /**
         * check code quality
         */
        jshint: {
            allFiles: ['grunt.js', 
                       'src/uncompressed/**/*.js',
                       'spec/**/*.js'],
            options: {
                jshintrc: '.jshintrc'
            }
        },
        /**
         * run code style linter
         */
        jscs: {
            src: "<%= pkg.srcDir %>**/*.js"
        },
        /**
         * run jasmine tests
         */
        jasmine: {
            pivotal: {
                src: ['src/uncompressed/array.js',
                      'src/uncompressed/element.js',
                      'src/uncompressed/event.js',
                      'src/uncompressed/form.js',
                      'src/uncompressed/object.js'],
                options: {
                    specs: 'spec/**/*.js',
                    template: require('grunt-template-jasmine-istanbul'),
                    templateOptions: {
                        coverage: 'coverage/coverage.json',
                        report: [
                            {
                                type: 'html',
                                options: {
                                    dir: 'coverage/html'
                                }
                            },
                            {
                                type: 'text-summary'
                            }
                        ]
                    }
                }
            }
        },
        /**
         * minifying files
         */
        uglify: {
            options: {
                mangle: {toplevel: false}, //prevent changes to variable and function names
                squeeze: {dead_code: false},
                codegen: {quote_keys: true}
            },
            array: {
                files: {
                    'src/array.min.js': ['src/uncompressed/array.js']
                }
            },
            element: {
                files: {
                    'src/element.min.js': ['src/uncompressed/element.js']
                }
            },
            event: {
                files: {
                    'src/event.min.js': ['src/uncompressed/event.js']
                }
            },
            form: {
                files: {
                    'src/form.min.js': ['src/uncompressed/form.js']
                }
            },
            object: {
                files: {
                    'src/object.min.js': ['src/uncompressed/object.js']
                }
            },
            pubsub: {
                files: {
                    'src/pubsub.min.js': ['src/uncompressed/pubsub.js']
                }
            },
            xhr: {
                files: {
                    'src/xhr.min.js': ['src/uncompressed/xhr.js']
                }
            },
            socketio: {
                files: {
                    'src/socketio.min.js': ['src/uncompressed/socketio.js']
                }
            },
            sockjs: {
                files: {
                    'src/sockjs.min.js': ['src/uncompressed/sockjs.js']
                }
            },
            sse: {
                files: {
                    'src/sse.min.js': ['src/uncompressed/sse.js']
                }
            }
        },
        /**
         * concat files
         */
        concat: {
            dist: {
                src: ['src/array.min.js',
                      'src/element.min.js',
                      'src/event.min.js',
                      'src/form.min.js',                      
                      'src/object.min.js',
                      'src/pubsub.min.js',
                      'src/xhr.min.js',
                      'src/socketio.min.js',
                      'src/sockjs.min.js',
                      'src/sse.min.js'],
                dest: 'js-helping.js'
            }
        },
        /**
         * copy file
         */
        copy: {
            main: {
                src: 'js-helping.js',
                dest: 'examples/js-helping.js',
            },
        },
        /**
         * create api documentation
         */
        yuidoc: {
            compile: {
                name: '<%= pkg.name %>',
                description: '<%= pkg.description %>',
                version: '<%= pkg.version %>',
                options: { 
                    paths: '<%= pkg.srcDir %>',
                    outdir: '<%= pkg.docsDir %>'
                }
            }
        }
    });
    
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-jscs-checker');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-jasmine');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-yuidoc');

    // Default task(s).
    grunt.registerTask('default', ['jshint', 'jscs', 'uglify', 'concat', 'jasmine', 'copy', 'yuidoc']);
};
