module.exports = function(grunt) {
    const sass = require('sass'); // Use dart-sass

    grunt.initConfig({
        // Sass compilation to dist folder
        sass: {
            dist: {
                options: {
                    outputStyle: 'compressed',
                    implementation: sass,
                    includePaths: ["node_modules/bootstrap/scss"],
                },
                files: [{
                    'dist/assets/css/style.min.css': 'src/assets/scss/styles.scss',
                }]
            }
        },

        // Uglify JS to dist folder
        uglify: {
            my_target: {
                files: {
                    'dist/assets/bundles/libscripts.bundle.js': [
                        'node_modules/jquery/dist/jquery.min.js',
                        'node_modules/bootstrap/dist/js/bootstrap.bundle.min.js',
                    ]
                }
            }
        },

        // Copy HTML files to dist folder
        copy: {
            html: {
                expand: true,
                cwd: './',
                src: ['index.html', 'contact.html', 'service.html'],
                dest: 'dist/'
            }
        }
    });

    // Load required plugins
    grunt.loadNpmTasks("grunt-sass");
    grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.loadNpmTasks("grunt-contrib-copy");

    // Define individual tasks
    grunt.registerTask("buildcss", ["sass"]);
    grunt.registerTask("buildjs", ["uglify"]);
    grunt.registerTask("copyhtml", ["copy"]);

    // Master build task for Netlify
    grunt.registerTask("build", ["buildcss", "buildjs", "copyhtml"]);
};
