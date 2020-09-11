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
          .send(result.array())
      }

      const { nome, email, senha } = req.body

      const user = new User(nome, email, senha)

      await user.create()

      return res.redirect('/login')
    } catch (err) {
      console.error(err)
      return res.status(500).send('erro na requisição')
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
