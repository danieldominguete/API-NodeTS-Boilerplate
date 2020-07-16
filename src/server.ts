import * as http from 'http'
import App from './app'
import jconfig from 'config'
import { config } from 'dotenv'
import * as path from 'path'
import { Logger } from './logger/logger'

// env variables
const ENV_FILE = path.join(__dirname, '..', '.env')
config({ path: ENV_FILE })

// config variables
let port = 8080
if (jconfig.has('server.port')) {
  port = jconfig.get('server.port')
}

App.set('port', port)
const server = http.createServer(App)
server.listen(port)

const logger = new Logger()

server.on('listening', function (): void {
  const addr = server.address()
  if (addr !== null) {
    const bind = (typeof addr === 'string') ? `pipe ${addr}` : `port ${addr.port}`
    logger.info(`Listening on ${bind}`)
  }
})

module.exports = App
