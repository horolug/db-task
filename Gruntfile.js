// const sass = require('node-sass');
//
// require('load-grunt-tasks')(grunt);
//
// grunt.initConfig({
// 	sass: {
// 		options: {
// 			implementation: sass,
// 			sourceMap: true
// 		},
// 		dist: {
// 			files: {
// 				'main.css': 'main.scss'
// 			}
// 		}
// 	}
// });
//
// grunt.registerTask('default', ['sass']);

module.exports = function(grunt) {

  grunt.initConfig({

    sass: {
      dist: {
        files: {
          "dev/css/styles.css" : "src/scss/styles.scss"
        }
      }
    },
    watch: {
      css: {
        files: 'src/scss/**/*.scss',
        tasks: ['sass'],
      },
    },

  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');

  grunt.registerTask('default', ['watch']);
};
