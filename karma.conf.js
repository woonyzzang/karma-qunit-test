// Karma configuration
// Generated on Wed Nov 07 2018 15:39:03 GMT+0900 (대한민국 표준시)

module.exports = function(config) {
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: './',

        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        // 테스트코드가 qunit 기반
        frameworks: ['qunit'],

        plugins: [
            'karma-ie-launcher',
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-opera-launcher',
            'karma-phantomjs-launcher',
            'karma-qunit',
            'karma-coverage'
        ],

        // karma-qunit를 사용해야 client 설정을 할 수 있음.
        // client configuration
        client: {
            clearContext: false,
            qunit: {
                showUI: true,
                testTimeout: 5000
            }
        },

        // list of files / patterns to load in the browser
        files: [
            'src/js/**/*.js',
            'test/**/*.js'
        ],

        // list of files / patterns to exclude
        exclude: [],

        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        // 웹서버에 파일을 올리기 전 전처리 기능 설정
        preprocessors: {
            'test/**/*.js': ['coverage']
        },

        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        // 콘솔에 테스트 결과를 점 형태로 출력
        reporters: ['progress', 'coverage'], // ['progress' , 'dots']

        // optionally, configure the reporter
        coverageReporter: {
            type: 'html',
            dir: 'coverage/'
        },

        // web server port
        port: 9876,

        // enable / disable colors in the output (reporters and logs)
        colors: true,

        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,

        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,

        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        // 브라우저를 자동으로 열도록 설정
        browsers: ['PhantomJS'], // ['PhantomJS', 'IE', 'Chrome', 'ChromeCanary', 'Firefox', 'Safari', 'Opera']

        phantomjsLauncher: {
            // Have phantomjs exit if a ResourceError is encountered (useful if karma exits without killing phantom)
            exitOnResourceError: true
        },

        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        // 명령어 한번에 한번의 테스트를 수행하도록 설정
        singleRun: false,

        // Concurrency level
        // how many browser should be started simultaneous
        concurrency: Infinity
    })
}
