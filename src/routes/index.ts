import { Router } from 'express'
import routesA from './routesA'
import routesB from './routesB'

const routes = Router()

// handle subset paths of routes
routes.use('/routeA', routesA)
routes.use('/routeB', routesB)

// handle undefined routes
// eslint-disable-next-line @typescript-eslint/no-unused-vars
routes.use('*', (_req, res, _next) => {
  res.send('This URL not exist.')
})

export default routes
