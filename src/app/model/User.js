const connection = require('../../database/connection')
const { hash } = require('bcryptjs')

module.exports = class User {
  constructor (nome, email, senha, userMovto) {
    this.nome = nome
    this.email = email
    this.senha = senha
    this.ativo = true
    this.userMovto = userMovto
  }

  async create () {
    const { senha, email, ativo, nome, userMovto } = this
    return await connection.query(
      'insert into usuario ' +
      '(`senha`, `email`, `ativo`, `nome`, `usuario_insert`, `data_insert`, `usuario_movto`, `data_movto`) ' +
      'values (?, ?, ?, ?, ?, ?, ?, ?);',
      [await hash(senha, 9), email, ativo, nome, userMovto, new Date(), userMovto, new Date()]
    )
  }

  static async findOne (params) {
    // pega todos os atributos de params e os joga dentro de uma array
    const arrayValues = Object.keys(params).map(key => params[key])

    // criar um script sql de acordo com os campos pedidos
    let sql = 'select * from usuario where '
    Object.keys(params).map(key => {
      sql = sql + `${key} = ? `
    })

    // realiza a busca
    const { results } = await connection.query(sql, arrayValues)
    return results[0] // retorna o primeiro resultado
  }
}
