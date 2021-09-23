const { config } = require('./wdio.shared.conf');

// ============
// Specs
// ============
config.specs = [
    './src/features/web/**/*.feature'
];

// ================
// Cucumber Options
// ================
config.cucumberOpts = {
    require: ['./src/step-definitions/*'],
    backtrace: false,
    requireModule: [],
    dryRun: false,
    failFast: false,
    format: ['pretty'],
    snippets: true,
    source: true,
    profile: [],
    strict: false,
    tagExpression: '@task',
    timeout: 120000,
    ignoreUndefinedDefinitions: false
},

    // ======================
    // Services Configuration
    // 'safaridriver','docker','chromedriver','appium'
    // ======================
    config.port = 4723,
    config.services = ['chromedriver'];

// ============
// Capabilities
// ============
config.capabilities = [
    {
        maxInstances: 5,
        browserName: 'chrome',
        // 'goog:chromeOptions': {
        //     args: ['--headless', '--window-size=1792,1080']
        // },

        'cjson:metadata': {
            device: 'MacBook Pro',
            platform: {
                version: '10.15.1'
            }
        } // metadata
    } // chrome

    // , 
    // {
    //     maxInstances: 5,
    //     browserName: 'safari',
    //     'cjson:metadata': {
    //         device: 'MacBook Pro',
    //         platform: {
    //             version: '10.15.1'
    //         }
    //     } // metadata
    // } // safari

];

exports.config = config;