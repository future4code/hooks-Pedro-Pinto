import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";

export class UserController {
    async create (req: Request, res: Response){
        try {
            const {name, email, password} = req.body

            const userBusiness = new UserBusiness()
            await userBusiness.create(name, email, password)

            res.status(200).send("User created successfully")
        } catch (error:any) {
            res.status(400).send(error.message)
        }
    }
}