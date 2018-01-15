const log4js = require('log4js');
const path = require('path');
const config = require('../../config/index');

const loggerConfig = config.logger;
const env = process.env.NODE_ENV;
const isDev = env === 'dev';

log4js.configure({
  appenders: {
    file: {
      type: 'dateFile',
      filename: path.resolve(loggerConfig.dir, loggerConfig.fileName),
      //按日分割
      pattern: '.yyyy-MM-dd-hh',
      encoding: 'utf-8'
      // type: 'file',
      // filename: path.resolve(loggerConfig.dir, loggerConfig.fileName),
      // encoding: 'utf-8'
    },
    console: {type: 'console'}
  },
  categories: {
    default: {appenders: ['console'], level: 'all'},
    prod: {appenders: ['file'], level: 'info'}
  },
  pm2: !isDev
});

const log = log4js.getLogger(isDev ? '' : 'prod');
module.exports = log;

/**
 * logger.trace();
 * logger.debug();
 * logger.info();
 * logger.warn();
 * logger.error();
 * logger.fatal();
 */
