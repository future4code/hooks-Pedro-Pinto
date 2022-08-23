import express, {Express, response} from 'express'
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

app.get ("/users", (req , resp) => {    const usuarios = users.map ((usuario) => usuario);
    resp.send (usuarios)
})

//ex.5

type Posts = {
id: number,
title: string,
body:string,
userId: number,
}


let postss: Posts[]= [
    {
        "userId": 1,
        "id": 1,
        "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
      },
      {
        "userId": 1,
        "id": 2,
        "title": "qui est esse",
        "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
      },
      {
        "userId": 1,
        "id": 3,
        "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
        "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
      },
]

    //ex7

    app.get ("/posts",(resq,resp)=>{
        const posts = postss.map((posts)=> posts)
        resp.send (posts)
    })

    //ex8

    app.get ("posts/:userId", (rest,resp) => {
        const userId = Number (rest.params.userId)

        const postsByUser = postss.filter((post) => post.userId === userId)

        const findUser = postss.find((post) => {
            return userId === post.userId
        })

        if (!findUser) resp.send ("Usuário não Encontrato")
        else response.send (postsByUser)

    })



  app.listen (3003, () => console.log ("O servidor está online na porta 3003"))