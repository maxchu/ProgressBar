module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {
      dist: {
        files: [{
          expand: true,
          cwd: 'src/css',
          src: ['*.scss'],
          dest: 'dist/css',
          ext: '.css'
        }]
      }
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: ['src/js/progressbar.js', 'src/js/display.js', 'src/js/main.js'],
        dest: 'dist/js/module.min.js'
      }
    },
    cssmin: {
  	  target: {
  	    files: [{
  	      expand: true,
  	      cwd: 'dist/css',
  	      src: ['*.css', '!*.min.css'],
  	      dest: 'dist/css',
  	      ext: '.min.css'
  	    }]
  	  }
  	},
    jasmine: {
      test: {
        src: ['src/js/progressbar.js', 'src/js/display.js'],
        options: {
            specs: 'unit-tests/*Spec.js'
        }
      }
    },
    eslint: {
      options: {
        configFile: 'eslint.json',
        reset: true
      },
      target: ['src/js/*.js']
    }
  });

  // Load the plugins.
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-jasmine');
  grunt.loadNpmTasks('grunt-eslint');

  // Default task(s).
  grunt.registerTask('default', ['sass', 'uglify', 'cssmin', 'jasmine', 'eslint']);

};