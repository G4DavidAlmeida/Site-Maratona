const connection = require('../../database/connection')

module.exports = class Tipo {
  constructor (nome, userMovto) {
    this.nome = nome
    this.userMovto = userMovto
  }

  async create () {
    const { nome, userMovto } = this
    return await connection.query(
      'insert into tipo ' +
        '(`nome`, `usuario_insert`, `data_insert`, `usuario_movto`, `data_movto`) ' +
        'values (?, ?, ?, ?, ?);',
      [nome, userMovto, new Date(), userMovto, new Date()]
    )
  }
}
