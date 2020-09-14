const { checkSchema } = require('express-validator')

module.exports = checkSchema({
  email: {
    isEmail: { errorMessage: 'Estrutura do campo email inválida' }
  },
  senha: {
    isAlphanumeric: { errorMessage: 'Senha deve ser alfanumérica' },
    isLength: {
      options: { min: 4, max: 40 },
      errorMessage: 'Senha deve ter entre 4 e 40 caracteres'
    }
  }
}, ['body'])
