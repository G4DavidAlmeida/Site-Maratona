const connection = require('../../database/connection')

module.exports = class User {
  static async list () {
    return await connection
      .query('SELECT * FROM `usuario`')
  }
}
