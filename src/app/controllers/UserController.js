const User = require('../model/User')

class UserController {
  /**
     * @param {import('express').Request} req
     * @param {import('express').Response} res
     * */// melhora o intellisense
  async store (req, res) {}

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
