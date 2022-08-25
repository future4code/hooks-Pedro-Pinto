import express, {Request, response, Response} from 'express'
import cors from 'cors'
import { products } from './data';
import { v4 as generateId } from 'uuid';


const app = express();
app.use(express.json());
app.use(cors());

//ex1.

app.get("/test", (req:Request, res:Response ) => {          
    res.send("API está em funcionamento")
})

//ex3.

app.post ("/list/create",(req:Request, res: Response) => {
   
        const {id,name,price} = req.body
        
        const newListProducts = {
            id:generateId(),
            name,
            price,
        }

        products.push(newListProducts)
        res.status(201).send (products)

})

//ex4.

app.get("/list", (req:Request, res:Response) => {          
    res.send(products)
})

//ex5.

app.post("/list/:id",(req:Request, res:Response) => {

    const productId: string = req.params.productId
    const newProductPrice: number = req.body.price
    const newProductName: string = req.body.name

    let findProduct = products.find((product) => product.id === productId )

})


app.listen (3003, () => console.log ("O servidor está online na porta 3003"))

