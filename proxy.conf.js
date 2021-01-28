const PROXY_CONFIG = [
  {
    context: ['/api'],
    target: 'http://localhost:1080',
    secure: false,
    logLevel: 'debug',
    pathRewrite: { '^/api': '' }
  }
]

module.exports = PROXY_CONFIG;
