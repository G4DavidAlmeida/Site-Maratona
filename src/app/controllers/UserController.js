const User = require('../model/User')
const { validationResult } = require('express-validator')

class UserController {
  /**
     * @param {import('express').Request} req
     * @param {import('express').Response} res
     * */// melhora o intellisense
  async store (req, res) {
    try {
      const result = validationResult(req)

      if (!result.isEmpty()) {
        return res.status(400)
          .render('newUser', {
            errors: result.array(),
            ...req.body
          })
      }

      const { nome, email, senha } = req.body

      const user = new User(nome, email, senha)

      await user.create()

      req.flash('success_msg', 'Usuário criado com sucesso')
      return res.redirect('/dashboard/register/user')
    } catch (err) {
      if (err.errno === 1062) {
        req.flash('error_msg', 'Email já é utilizado por outro usuário')
        return res.status(400).redirect('/dashboard/register/user')
      } else {
        console.error(err)
        return res.status(500).send('erro na requisição')
      }
    }
  }

  /**
     * @param {import('express').Request} req
     * @param {import('express').Response} res
     * */
  async index (req, res) {
    console.log(await User.list()) // nada haver
  }

  /**
     * @param {import('express').Request} req
     * @param {import('express').Response} res
     * */
  async show (req, res) {}

  /**
     * @param {import('express').Request} req
     * @param {import('express').Response} res
     * */
  async update (req, res) {}

  /**
     * @param {import('express').Request} req
     * @param {import('express').Response} res
     * */
  async destroy (req, res) {}
}

module.exports = new UserController()
