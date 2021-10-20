import {Request, Response} from 'express'
import { AuthenticateUserService } from '../services/AuthentivateUserService'

class AuthenticateUserController {
    async handle(req: Request, res: Response){
        const service = new AuthenticateUserService()
        service.execute('')
    }
}

export { AuthenticateUserController}