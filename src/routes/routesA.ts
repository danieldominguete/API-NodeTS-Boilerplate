import { Router } from 'express'
import AuthController from "../controllers/AuthController";
import { checkJwt } from "../middlewares/checkJwt";

const routers = Router()

// example1 route
routers.post("/route1", AuthController.login)

// example2 route
routers.post("/route2", [checkJwt], AuthController.changePassword)

export default routers
