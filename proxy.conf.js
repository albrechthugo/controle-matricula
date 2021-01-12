import { environment } from './src/environments/environment'

const PROXY_CONFIG = [
  {
    context: ['/api'],
    target: environment.api,
    secure: false,
    logLevel: 'debug',
    pathRewrite: { '^/api': '' }
  }
]

module.exports = PROXY_CONFIG;