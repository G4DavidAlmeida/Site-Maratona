const { checkSchema } = require('express-validator')

module.exports = checkSchema({
  nome: {
    isString: { errorMessage: 'O nome deve ser uma string' },
    isAlpha: { errorMessage: 'Nome deve possuir apenas letras' }
  },
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
})
