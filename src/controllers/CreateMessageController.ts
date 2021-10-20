import { Request, Response } from 'express'
import { CreateMessageService } from '../services/CreateMessageService'

class CreateMessageController {
    async handle(req: Request, res: Response) {
        const { texto } = req.body
        const { user_id } = req.body

        const service = new CreateMessageService()
        const result = await service.excute(texto, user_id)

        return res.json(result)
    }
}
 
export { CreateMessageController }