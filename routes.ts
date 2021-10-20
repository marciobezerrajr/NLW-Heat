import { Router } from "express";
import { AuthenticateUserController } from "./src/controllers/AuthenticateControllerUser";
// import { AuthenticateUserService } from "./src/services/AuthenticateUserService";

const router = Router()

router.post('/authenticate', new AuthenticateUserController().handle)

export {router}