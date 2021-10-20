import { Request, Response, NextFunction } from "express";
import { Secret, verify } from "jsonwebtoken";


interface IPayload {
    sub: string
}

export function ensureAuthenticated(req: Request, res: Response, next: NextFunction){
    const authToken = req.headers.authorization

    if(!authToken){
        return res.status(401).json({
            errorCode: 'token.invalid'
        })
    }

    //bearer token
    //ignoro a posição 1 com a virgula
    //é atribuido o token à posição 2
    const [,token] = authToken.split(" ")

    try{
        const {sub} = verify(token, (process.env.JWT_KEY as Secret)) as IPayload
        req.user_id = sub 
        return next()

    } catch(err) {
        return res.status(401).json({ errorCode: "token.expired"})
    }
}