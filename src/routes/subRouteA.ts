import { Router } from 'express'
import ControllerA from '../controllers/subControllerA'

const routes = Router()

// example1 routes
routes.get('/sum', ControllerA.sumCall)
routes.post('/multiply', ControllerA.multiplyCall)

// handle undefined routes
// eslint-disable-next-line @typescript-eslint/no-unused-vars
routes.use('*', (_req, res, _next) => {
  res.status(404).send('This URL not exist.')
})

export default routes
