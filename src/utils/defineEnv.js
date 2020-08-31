const { config } = require('dotenv')

module.exports = function () {
  switch (process.env.NODE_ENV) {
    case 'production':
      config({ path: './env/.env' })
      break
    case 'development':
      config({ path: './env/.env.development' })
      break
    default:
      console.error(new Error('Ambiente não definido'))
      process.exit(1)
  }
}
