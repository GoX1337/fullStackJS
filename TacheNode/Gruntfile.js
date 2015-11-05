module.exports = function (grunt) {
    "use strict";

    require('jit-grunt')(grunt, {
        useminPrepare: 'grunt-usemin'
    });

    grunt.initConfig({
            useminPrepare: {
                html: 'src/index.html'
            },
            usemin: {
                html: ['dist/*.html']
            },
            copy: {
                dist: {
                    expand: true,
                    cwd: 'src',
                    src: ['*.html'],
                    dest: 'dist/',
                },
            },
            rev: {
                assets: {
                    files: [{
                        src: [
                            'dist/**/*.{css,js}'
                        ]
                    }]
                }
            },
            clean: {
                dist: "dist",
                tmp: ".tmp"
            },
            uglify: {
                dist: {
                    src: 'dist/body.js',
                    dest: 'dist/body.js'
                }
            },
            cdnquery: {
                dist: {}
            }
        }
    );

    grunt.registerMultiTask('cdnquery', 'Bower vers code prod', function () {
        var htmlFile = 'dist/index.html';
        var srcContent = '../bower_components/jquery/dist/jquery.js';
        var destContent = '//code.jquery.com/jquery-1.11.3.min.js';
        var contenu = grunt.file.read(htmlFile);
        contenu = contenu.replace(srcContent, destContent);
        grunt.file.write(htmlFile, contenu);
    });

    grunt.registerTask('default', [
        'clean',
        'useminPrepare',
        'concat:generated',
        'uglify:generated',
        'cssmin:generated',
        'rev',
        'copy:dist',
        'usemin',
        'clean:tmp'
    ]);
}