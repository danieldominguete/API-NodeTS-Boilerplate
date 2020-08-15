import { Request, Response } from 'express'
import logger from '../logger/logger'

class MainController {
  public test (req: Request, res:Response): Response {
    logger.debug('Service test of MainController requested in URL ' + req.url)
    return res.status(200).json({ return: 'Test sucessfull!' })
  };

  public echo (req: Request, res:Response): Response {
    logger.debug('Service echo of MainController requested in URL ' + req.url)
    const test = req.body
    return res.status(200).json(test)
  }
}

export default new MainController()
