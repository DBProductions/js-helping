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
        }
    });
    
    grunt.registerTask('default', 'lint qunit');
};
