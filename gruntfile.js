module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    copy: {
      dist: {
        files: [
        {
          expand: true,
          flatten: true,
          src: 'vendor/jquery/dist/jquery.min.js',
          dest: 'dist/js/jquery'
        },
        {
          expand: true,
          flatten: true,
          src: 'vendor/bootstrap/dist/js/bootstrap.min.js',
          dest: 'dist/js/bootstrap'
        },
        {
          expand: true,
          flatten: true,
          src: 'vendor/bootstrap/dist/css/bootstrap.min.css',
          dest: 'dist/css/bootstrap'
        }
        ]
      }
    },
    htmlbuild: {
        dist: {
            src: 'src/index.html',
            dest: 'dist/',
            options: {
                beautify: true,
                prefix: '//some-cdn',
                relative: true,
                basePath: false
            }
        }
    },
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
    },
    protractor: {
      options: {
        keepAlive: true, 
        noColor: false, 
      },
      e2e: {
        options: {
          configFile: "e2e-tests/protractor.conf.js", 
        }
      },
    },
  });

  // Load the plugins.
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-html-build');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-jasmine');
  grunt.loadNpmTasks('grunt-protractor-runner');
  grunt.loadNpmTasks('grunt-eslint');

  // Default task(s).
  grunt.registerTask('default', ['copy', 'htmlbuild', 'sass', 'uglify', 'cssmin', 'jasmine', 'protractor', 'eslint']);

};