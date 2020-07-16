import { Request, Response} from 'express'
// import { TestSchema } from '../schemas/test'

class Controller {
  public index (_req: Request, res:Response): Response {
    const tmp = { name: 'teste' }
    const test = tmp
    return res.json(test)
  };

  public echo (req: Request, res:Response): Response {
    console.log('url:::::::' + req.url)
    const test = req.body
    return res.json(test)
  }
}

export default new Controller()
