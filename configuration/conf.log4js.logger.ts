import log4js from 'log4js';

log4js.configure({
  appenders: {
    combined: { type: 'file', filename: './reports/combined.log' },
    console: { type: 'console' },
  },
  categories: { default: { appenders: ['combined', 'console'], level: 'info' } },
});

const logger = log4js.getLogger('combined');

export default logger;
