import { Router } from 'express'
import GeneralController from '../controllers/indexController'
import subRouteA from './subRouteA'

const routes = Router()

// handle main routes
routes.get('/test', GeneralController.test)
routes.post('/echo', GeneralController.echo)

// handle subset paths of routes (URL will be added with /subset-path)
routes.use('/routeA', subRouteA)

// handle undefined routes
// eslint-disable-next-line @typescript-eslint/no-unused-vars
routes.use('*', (_req, res, _next) => {
  res.status(404).send('This URL not exist.')
})

export default routes
