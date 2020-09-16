const { Router } = require('express')

const UserController = require('../app/controllers/UserController')
const UserValidators = require('../app/validators/user')

const routes = Router()

routes.route('/user')
  .get((req, res) => res.render('newUser'))
  .post(UserValidators.store, UserController.store)

routes.route('/site')

routes.route('/tipo')
  .get((req, res) => res.render(''))

routes.route('/problem')

module.exports = routes
