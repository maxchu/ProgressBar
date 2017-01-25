// Karma configuration
// Generated on Sun Jan 22 2017 21:53:24 GMT+1100 (AEDT)

module.exports = function(config) {
  config.set({

    basePath: '',

    frameworks: ['jasmine'],

    files: [
      'src/js/*.js',
      'unit-tests/*Spec.js'
    ],

    exclude: [
    ],

    preprocessors : {
      'src/js/*.js': 'coverage'
    },

    reporters: ['progress', 'coverage'],

    coverageReporter : {
      type : 'html',
      dir : 'coverage/'
    },

    port: 9876,

    colors: true,

    logLevel: config.LOG_INFO,

    autoWatch: true,

    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity,

    plugins: [
      'karma-coverage',
      'karma-chrome-launcher',
      'karma-firefox-launcher',
      'karma-jasmine',
      'karma-junit-reporter'
    ],

    junitReporter: {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }
    
  })
}
