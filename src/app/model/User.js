const connection = require('../../database/connection')

module.exports = class User {
  constructor (nome, email, senha) {
    this.nome = nome
    this.email = email
    this.senha = senha
    this.ativo = true
  }

  async create () {
    const { senha, email, ativo, nome } = this
    return await connection.query(
      'insert into usuario ' +
      '(`senha`, `email`, `ativo`, `nome`, `usuario_insert`, `data_insert`) ' +
      'values (?, ?, ?, ?, ?, ?);',
      [senha, email, ativo, nome, 12, new Date()]
    )
  }

  static async findOne ({ email }) {
    const result = await connection.query(
      'select * from usuario' +
      'where email = ?',
      [email]
    )
    console.log(result)
  }
}
