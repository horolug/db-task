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
