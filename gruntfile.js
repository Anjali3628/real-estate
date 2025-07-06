module.exports = function(grunt) {
    const sass = require('sass'); // ✅ Use dart-sass instead of node-sass

    grunt.initConfig({
        sass: {
            dist: {
                options: {
                    outputStyle: 'compressed',
                    implementation: sass, // ✅ correct implementation
                    includePaths: ["node_modules/bootstrap/scss"],
                },
                files: [{
                    'src/assets/css/style.min.css': 'src/assets/scss/styles.scss',
                }]
            }
        },
        uglify: {
            my_target: {
                files: {
                    'src/assets/bundles/libscripts.bundle.js': [
                        'node_modules/jquery/dist/jquery.min.js',
                        'node_modules/bootstrap/dist/js/bootstrap.bundle.min.js',
                    ],
                }
            }
        }
    });

    grunt.loadNpmTasks("grunt-sass");
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask("buildcss", ["sass"]);
    grunt.registerTask("buildjs", ["uglify"]);
};
