module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: ['js/src/progressbar.js', 'js/src/display.js', 'js/src/main.js'],
        dest: 'js/build/module.min.js'
      }
    },
    cssmin: {
  	  target: {
  	    files: [{
  	      expand: true,
  	      cwd: 'css',
  	      src: ['*.css', '!*.min.css'],
  	      dest: 'css',
  	      ext: '.min.css'
  	    }]
  	  }
  	},
    jasmine: {
      test: {
        src: ['js/src/progressbar.js', 'js/src/display.js'],
        options: {
            specs: 'tests/*Spec.js'
        }
      }
    },
    eslint: {
      options: {
        configFile: 'eslint.json',
        reset: true
      },
      target: ['js/src/*.js']
    }
  });

  // Load the plugins.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-jasmine');
  grunt.loadNpmTasks('grunt-eslint');

  // Default task(s).
  grunt.registerTask('default', ['uglify', 'cssmin', 'jasmine', 'eslint']);

};