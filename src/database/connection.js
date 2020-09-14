const mysql = require('mysql2')

const connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'Password1',
  database: 'maratonaFib'
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
