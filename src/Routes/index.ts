/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Router } from 'express'
const routes = Router()

routes.route('/') // Tela que mostra todos o problemas cadastrados (tela principal)
  .get((req, res) => {})

routes.route('/login') // Tela de login
  .get((req, res) => {})

routes.route('/userconfig') // Tela onde usuário configura seus dados
  .get((req, res) => {})

routes.route('/cadastro/problemas') //  Cadastra/Editar problemas
  .get((req, res) => {})

routes.route('/cadastro/tipos') // Cadastrar/editar TIPO
  .get((req, res) => {})

routes.route('/cadastro/site') // Cadastrar/Editar SITE
  .get((req, res) => {})

export default routes
