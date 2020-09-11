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
    return await new Promise((resolve, reject) => {
      connection.query(
        'insert into usuario ' +
        '(`senha`, `email`, `ativo`, `nome`, `usuario_insert`, `data_insert`) ' +
        'values (?, ?, ?, ?, ?, ?);',
        [senha, email, ativo, nome, 12, new Date()],
        (err, results, fields) => {
          if (err) reject(err)
          resolve({ results: results, fields: fields })
        }
      )
    })
  }

  /*
const employee = { name: 'siddiqui', location: 'Canada' };
connection.query('INSERT INTO employees SET ?', employee, (err, res) => {
  if(err) throw err;

  console.log('Last insert ID:', res.insertId);
});
*/

  static async list () {}
}
// MVC
// M = model = guarda todas as entidades do sistema
// V - View = interface do sistema, parte visual
// C - Controllers = guarda toda regra de negócios do sistema
