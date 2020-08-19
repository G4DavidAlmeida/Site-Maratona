/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-unused-vars */
import ProblemsController from '@controllers/ProblemsController'
import SessionController from '@controllers/SessionController'

/***************************************
 ****** Routes of the application ******
 ***************************************/
/* | | | | | | | | | | | | | | | | | | | */
/* | | | | | | | | | | | | | | | | | | | */
/* V V V V V V V V V V v V V V V V V V V */

// Importa uma rota do express
import { Router } from 'express'
const routes = Router()

//  Tela de login Tela que mostra todos o problemas cadastrados (tela principal)
routes.route('/')
  .get((req, res) => {
    console.log('Teste debugging')
    return res.render('login')
  })
  .post(SessionController.store)

// Tela que mostra todos o problemas cadastrados (tela principal)
routes.route('/dashboard')
  .get((req, res) => {})

// Tela onde usuário configura seus dados
routes.route('/conta')
  .get((req, res) => {})

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

// exporta a rota para nada, para default
export default routes
