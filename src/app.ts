import express from 'express'
import bodyParser from 'body-parser'
import helmet from 'helmet'
import cors from 'cors'
import routes from './routes/index'
import { Logger } from './logger/logger'

class App {
    public express:express.Application
    public logger: Logger

    public constructor () {
      this.express = express()
      this.middlewares()
      this.routes()
      this.logger = new Logger()
      this.logger.info('App started!')
    }

    private middlewares(): void {
      this.express.use(bodyParser.json())
      this.express.use(bodyParser.urlencoded({ extended: false }))
      this.express.use(cors())
      this.express.use(helmet())
    }

    private routes (): void {
      this.express.use(routes)
    }
}

export default new App().express
