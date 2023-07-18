import { ReportAggregator, HtmlReporter} from '@rpii/wdio-html-reporter' ;
import { default as logger } from './conf.log4js.logger';
const yargs = require("yargs").argv;

export const config: WebdriverIO.Config = {
    runner: 'local',
    specs: [
        './features/*.feature'
    ],
    exclude: [],
    maxInstances: 10,
    capabilities: [{    
        maxInstances: 5,
        browserName: 'chrome',
        acceptInsecureCerts: true
    }],
    logLevel: 'info',
    bail: 0,
    baseUrl: 'http://localhost',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    services: ['chromedriver'],
    framework: 'cucumber',
    reporters: ['spec',
        [HtmlReporter, {
                outputDir: './reports/html-reports/',
                filename: 'report.html',
                reportTitle: 'Coursera Test Report',
                showInBrowser: true,
                collapseTests: false, 
                LOG: logger
            }
        ]
    ],
    cucumberOpts: {
        require: ['./steps/*.steps.ts', './configuration/hooks.ts'],
        backtrace: false,
        requireModule: [],
        dryRun: false,
        failFast: false,
        format: ['pretty','json:./reports/html-reports/'],
        snippets: true,
        source: true,
        profile: [],
        strict: false,
        tagExpression: yargs.tag || '@coursera',
        timeout: 60000,
        ignoreUndefinedDefinitions: false
    },

    autoCompileOpts: {
        autoCompile: true,
        tsNodeOpts: {
            transpileOnly: true,
            project: 'tsconfig.json'
        }
    },

    onPrepare: function (config, capabilities) {
        let reportAggregator = new ReportAggregator({
            outputDir: './reports/html-reports/',
            filename: 'coursera-report.html',
            browserName: capabilities.browserName,
            reportTitle: 'Coursera Report',
            collapseTests: true,
        });
        reportAggregator.clean() ;

        global.reportAggregator = reportAggregator;
    },

    beforeScenario: async function (world){
        logger.info(`START SCENARIO '${world.pickle.name}'`);
    },    

    afterStep: function (world) {
        logger.info(`STEP '${world.text}'`);
    },
      
    afterScenario: async function (world, result) {
        if(result.passed){
            logger.info(`FINISH SCENARIO '${world.pickle.name}' with success`);
            return;
        }
        logger.info(`FINISH SCENARIO '${world.pickle.name}' with error ${result.error}`);
    },    
    
    onComplete: function(exitCode, config, capabilities, results) {
        (async () => {
            await global.reportAggregator.createReport();
        })();
    }
}
