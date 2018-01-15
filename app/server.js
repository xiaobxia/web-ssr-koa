/**
 * Created by xiaobxia on 2018/1/4.
 */
const fs = require('fs-extra');
const Koa = require('koa');
const microcache = require('route-cache');
const path = require('path');
const error = require('koa-error')
const bluebird = require('bluebird');
const favicon = require('koa-favicon');
const staticCache = require('koa-static-cache')
const sysRoutes = require('./routes');
const config = require('../config/index');
const log = require('./common/logger');

global.Promise = bluebird;
const serverInfo = `koa/${require('koa/package.json').version} `;
const env = process.env.NODE_ENV;
const isDev = env === 'dev';
// const useMicroCache = process.env.MICRO_CACHE !== 'false';

const baseDir = config[env].server.baseDir;
const port = config[env].server.port || 4000;
const assetsSubDirectory = config[env].assetsSubDirectory || '';
const join = file => path.join(baseDir, file);

const app = new Koa();

const serve = (prefix, path, cache) => staticCache(join(path), {
  prefix: prefix,
  gzip: true,
  dynamic: true,
  maxAge: cache && !isDev ? 1000 * 60 * 60 * 24 * 7 : 0
});

const proxyTable = config[env].server.proxyTable;
// if (proxyTable) {
//   Object.keys(proxyTable).forEach(function (context) {
//     let options = proxyTable[context];
//     if (typeof options === 'string') {
//       options = {target: options}
//     }
//     app.use(proxyMiddleware(options.filter || context, options))
//   })
// }

app.use(favicon('favicon.png'));
app.use(serve(assetsSubDirectory, assetsSubDirectory, true));

// 每个人的id是不同的
// app.use(microcache.cacheSeconds(3, (req) => {
//   console.log(req.originalUrl);
//   return useMicroCache && req.originalUrl;
// }));

// 因为只做view层所以统一处理
app.use(async (ctx, next) => {
  const start = Date.now();
  ctx.set("Content-Type", "text/html");
  ctx.set("Server", serverInfo);
  await next();
  const ms = Date.now() - start;
  ctx.set('X-Response-Time', `${ms}ms`);
  log.info(`请求"${ctx.originalUrl}"的累计用时: ${ms}ms`);
});

app.use(error());

app.use(sysRoutes.routes());

app.on('error', (err, ctx) => {
  console.error(`渲染发生错误 : ${ctx.originalUrl}`);
  log.error(err);
});

app.listen(port, () => {
  console.log(`server started at localhost:${port}`);
  console.log(`当前环境是:${env || 'dev'}`)
});
