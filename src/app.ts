import express from 'express'
import bodyParser from 'body-parser'
import helmet from 'helmet'
import cors from 'cors'
import routes from './routes/indexRoute'
import logger from './logger/logger'

class App {
    public express:express.Application

    public constructor () {
      this.express = express()
      this.middlewares()
      this.routes()
      logger.info('App started!')
    }

    private middlewares (): void {
      this.express.use(bodyParser.json())
      this.express.use(bodyParser.urlencoded({ extended: false }))
      this.express.use(cors())
      this.express.use(helmet())
      // check token for POST or GET calls (use query with auth param for GET and header authorization for POST)
      this.express.use((req, resp, next) => {
        if (req.query.auth === process.env.TOKEN) {
          next()
        } else if (req.headers.authorization === process.env.TOKEN) {
          next()
        } else {
          logger.info('Authorization is failed. URL: ' + req.url)
          resp.status(401).send()
        }
      })
    }

    private routes (): void {
      this.express.use(routes)
    }
}

export default new App().express
