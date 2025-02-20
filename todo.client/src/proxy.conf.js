const { env } = require('process');

const target = env.ASPNETCORE_HTTPS_PORT ? `https://localhost:${env.ASPNETCORE_HTTPS_PORT}` :
  env.ASPNETCORE_URLS ? env.ASPNETCORE_URLS.split(';')[0] : 'http://localhost:5285';

const PROXY_CONFIG = [
  {
    context: [
      "/weatherforecast",
      "/api/tasks",
    ],
    target,
    secure: false
  }
]

module.exports = PROXY_CONFIG;
