import express, { Application } from 'express'
import expressLayout from 'express-ejs-layouts'
import helmet from 'helmet'
import cors from 'cors'
import path from 'path'

import routes from './Routes'

class App {
    public express: Application

    public constructor () {
      this.express = express()

      this.middlewares()
      this.routes()
    }

    private middlewares () {
      this.express.use(helmet())

      this.express.set('view engine', 'ejs')
      this.express.set('views', path.resolve(__dirname, 'app', 'views'))
      this.express.use(expressLayout)

      this.express.use(express.urlencoded({ extended: false }))
      this.express.use(express.json())

      this.express.use(cors())
    }

    private routes () {
      this.express.use(routes)
    }
}

export default new App()
