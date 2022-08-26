import express, {Request, Response} from 'express'
import cors from 'cors'
import {users,Users,UserType} from "./data"


const app = express();
app.use(express.json());
app.use(cors());

//ex1

// app.get ("/users",(req: Request, res: Response)=>{

//    res.send(users)
// })

//a) Tipo rest
//b) Entidade "Users", lista de usuários

//ex2

app.get("/users/:userType",(req: Request, res: Response)=>{
    try {
        const userType: UserType = req.params.userType as UserType

        if (
            userType.toUpperCase() !== UserType.ADMIN &&
            userType.toUpperCase() !== UserType.NORMAL
        ) {
            throw new Error("Fora do tipo");
            
        }

        const userByType: Users[] = users.filter (
            (user) => user.type === userType.toUpperCase ()
        )

        res.status(200).send (userByType)
        
    } catch (error: any) {
        res.status(400).send(error.message)
    }

})

//ex3

app.get ("/getusers",(req: Request, res: Response)=>{

    try {
        const userName: string = req.query.userName as string
        
        const userFound: Users | undefined = users.find (
            (user) => user.name === userName
        )

        if (!userFound) {
            throw new Error("Insira um usuário corretamente");
        }

        res.status(200).send(userFound)

    } catch (error: any) {
        res.status(400).send(error.message)
        
    }
    
 })

 
//ex4




app.listen (3003, () => console.log ("O servidor está online na porta 3003"))