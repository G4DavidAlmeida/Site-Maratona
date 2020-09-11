const express = require('express')
const expressLayout = require('express-ejs-layouts')
const helmet = require('helmet')
const path = require('path')

const session = require('express-session')
const passport = require('passport')
const flash = require('connect-flash')
const globalVars = require('./middlewares/globalVars')
const defineEnv = require('./utils/defineEnv')

const routes = require('./Routes')

const app = express()

app.use(helmet())// camadas de segurança da aplicação

require('./config/passport')(passport)
defineEnv()

// express session
app.use(session({
  secret: process.env.SECRET,
  resave: true,
  saveUninitialized: true
}))
app.use(passport.initialize())
app.use(passport.session())

// flash and global variables
app.use(flash())
app.use(globalVars)

app.use(express.urlencoded({ extended: false }))

// middlewares
app.use(expressLayout) // definindo layout padrão
app.set('view engine', 'ejs') // view engine
app.set('views', path.resolve(__dirname, 'app', 'views'))// local da pasta views

app.use('/public', // define um rota /public com arquivos estáticos
  express.static(path.resolve(process.cwd(), 'public')))
// definido rotas da aplicação

app.use(routes)

module.exports = app
