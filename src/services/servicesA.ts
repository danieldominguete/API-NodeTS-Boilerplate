import { config } from 'dotenv'
import * as path from 'path'
import logger from '../logger/logger'
import { RequestLocal, ResponseLocal } from 'express'

// env variables
const ENV_FILE = path.join(__dirname, '..', '.env')
config({ path: ENV_FILE })

declare module 'express' {
  export interface RequestLocal {
    query: any
    body: any
  }
}

declare module 'express' {
  export interface ResponseLocal {
    result: number
  }
}

class ServicesExample {
  // function handle from GET calling
  public async sum (request:RequestLocal): Promise<ResponseLocal> {
    logger.debug('sum service running')
    // console.log(request.query)
    const x = parseFloat(request.query.valueX)
    const y = parseFloat(request.query.valueY)
    const resultSum = x + y
    return { result: resultSum }
  }

  public async multiply (request:RequestLocal): Promise<ResponseLocal> {
    logger.debug('multiply service running')
    // console.log(request.body)
    const x = parseFloat(request.body.valueX)
    const y = parseFloat(request.body.valueY)
    const resultSum = x + y
    return { result: resultSum }
  }
}

export default new ServicesExample()
