import { Router } from "express";
import { AuthenticateUserController } from "./src/controllers/AuthenticateControllerUser";
 import { CreateMessageController } from "./src/controllers/CreateMessageController";
import { GetLast3MessagesController } from "./src/controllers/GetLast3MessagesController";
import { ProfileUserController } from "./src/controllers/ProfileUserController";
import { ensureAuthenticated } from "./src/middleware/ensureAuthenticated";

const router = Router()

router.post('/authenticate', new AuthenticateUserController().handle)
router.post('/messages', ensureAuthenticated, new CreateMessageController().handle)

router.get('/messages/last3', new GetLast3MessagesController().handle)
router.get('/profile/', ensureAuthenticated, new ProfileUserController().handle)


export {router}