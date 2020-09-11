const SessionController = require('../app/controllers/SessionController')
const UserController = require('../app/controllers/UserController')

const UserValidators = require('../app/validators/user')

/***************************************
 ****** Routes of the application ******
 ***************************************/
/* | | | | | | | | | | | | | | | | | | | */
/* | | | | | | | | | | | | | | | | | | | */
/* V V V V V V V V V V v V V V V V V V V */

// Importa uma rota do express
const { Router } = require('express')
const routes = Router()

//  Tela de login Tela que mostra todos o problemas cadastrados (tela principal)
routes.route('/')
  .get((req, res) => res.render('login'))
  .post(SessionController.store)

// Tela que mostra todos o problemas cadastrados (tela principal)
routes.route('/dashboard')
  .get((req, res) => res.send('dashboard'))

routes.route('/dashboard/register/user')
  .get((req, res) => res.render('newUser'))
  .post(UserValidators.store, UserController.store)

// Tela onde usuário configura seus dados
routes.route('/account')
  .get((req, res) => {
    return res.render('account')
  })

routes.route('/cadastro')
  .get((req, res) => res.render(''))

//  Cadastra/Editar problemas
routes.route('/cadastro/problemas')
  .get((req, res) => {})

// Cadastrar/editar TIPO
routes.route('/cadastro/tipos')
  .get((req, res) => {})

// Cadastrar/Editar SITE
routes.route('/cadastro/site')
  .get((req, res) => {})

module.exports = routes
