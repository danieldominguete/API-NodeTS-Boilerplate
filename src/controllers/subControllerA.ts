import { RequestLocal, Response } from 'express'
import logger from '../logger/logger'
import servicesA from '../services/servicesA'

declare module 'express' {
  export interface RequestLocal {
    query: any
    body: any
  }
}

class ControllerA {
  public async sumCall (req: RequestLocal, res:Response) {
    logger.debug('Service sumCall requested from controller')
    try {
      const test = await servicesA.sum(req)
      return res.json(test)
    } catch {
      logger.error('Service error')
      return res.status(500).json('Internal service error')
    }
  }

  public async multiplyCall (req: RequestLocal, res:Response) {
    logger.debug('Service multiplyCall requested from controller')
    try {
      const test = await servicesA.multiply(req)
      return res.json(test)
    } catch {
      logger.error('Service error')
      return res.status(500).json('Internal service error')
    }
  }
}

export default new ControllerA()
