module.exports = function(grunt) {
    const sass = require('sass'); // using dart-sass

    grunt.initConfig({
        // SCSS to minified CSS
        sass: {
            dist: {
                options: {
                    outputStyle: 'compressed',
                    implementation: sass,
                    includePaths: ["node_modules/bootstrap/scss"]
                },
                files: [{
                    'src/assets/css/style.min.css': 'src/assets/scss/styles.scss'
                }]
            }
        },

        // JS minification
        uglify: {
            my_target: {
                files: {
                    'src/assets/bundles/libscripts.bundle.js': [
                        'node_modules/jquery/dist/jquery.min.js',
                        'node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
                    ]
                }
            }
        },

        // Copy necessary files to dist/
        copy: {
            main: {
                expand: true,
                cwd: 'real-estate/',
                src: [
                    'index.html',
                    'contact.html',
                    'service.html',
                    'src/assets/css/style.min.css',
                    'src/assets/bundles/libscripts.bundle.js',
                    'src/assets/images/**',
                    'src/assets/fonts/**'
                ],
                dest: 'dist/'
            }
        }
    });

    // Load required grunt plugins
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-copy');

    // Default task
    grunt.registerTask('default', ['sass', 'uglify', 'copy']);
};
