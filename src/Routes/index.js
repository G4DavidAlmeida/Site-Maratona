// Importa uma rota do express
const { Router } = require('express')

const SessionController = require('../app/controllers/SessionController')
const sessionValidator = require('../app/validators/session')

const { ensureAuthenticated } = require('../config/auth')

const register = require('./register')

const routes = Router()

// middleware de autenticação
routes.use('/dashboard', ensureAuthenticated)

//  Tela de login Tela que mostra todos o problemas cadastrados (tela principal)
routes.route('/')
  .get((req, res) => res.render('login'))
  .post(sessionValidator, SessionController.store)

// Tela que mostra todos o problemas cadastrados (tela principal)
routes.get('/dashboard',
  (req, res) => res.render('dashboard'))

// rotas de cadastros
routes.use('/dashboard/register', register)

module.exports = routes
