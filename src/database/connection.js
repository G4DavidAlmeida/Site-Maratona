const mysql = require('mysql2')
const defineEnv = require('../utils/defineEnv')

defineEnv()
const { DB_HOST, DB_USER, DB_PASSWORD, DB_DATABASE } = process.env

const connection = mysql.createConnection({
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_DATABASE
})

module.exports = {
  ...connection,
  query: (sql, args) =>
    new Promise((resolve, reject) => {
      connection.query(sql, args, (err, results, fields) => {
        if (err) reject(err)
        resolve({ results: results, fields: fields })
      }
      )
    })
}
