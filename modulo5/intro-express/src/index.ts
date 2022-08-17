import express, {Express} from 'express'
import cors from 'cors'


const app: Express = express();

app.use(express.json());
app.use(cors());


//ex1

app.get("/", (req, res) => {          
    res.send("Hello from Express")
})

//ex2

type User = {
    id: number,
    name: string,
    phone: number,
    email: string,
    website: string,
}

//ex.3

let users: User[] = [

{id: 1,
name: "Jeisas de Jesus",
phone: 1234-1234,
email: "jeias@gmil.com",
website: "www.uol.com.br",
},

{id: 2,
    name: "Adalberto da Maria",
    phone: 4321-4321,
    email: "Adal@gmil.com",
    website: "www.uol.com.br"},

{id: 3,
    name: "Cirandela",
    phone: 1234-1234,
    email: "cirandela@gmil.com",
    website: "www.uol.com.br"}

]


  app.listen (3003, () => console.log ("O servidor está online na porta 3003"))