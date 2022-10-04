const { createProxyMiddleware } = require('http-proxy-middleware');
const devConfig = require('../dev.config.json');
console.log(devConfig);

module.exports = (app) => {
  app.use(
    ['/api', '/files'],
    createProxyMiddleware(
      {
        target: devConfig.proxy,
        secure: false,
        changeOrigin: true,
      }
    )
  );
};
