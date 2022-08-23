import express, {Request, Response} from 'express'
import cors from 'cors'


const app = express();
app.use(express.json());
app.use(cors());

//Ex1

app.get("/ping", (req:Request, res:Response ) => {          
    res.send("Pong! 🏓")
})

//Ex2.

type List = {
    userId: number,
    id: number,
    title: string,
    completed: boolean,
  }

  //Ex3.

  let toDoList: List[] = [

    {   userId: 1,
        id: 1,
        title: "Fazer compras para a fazenda",
        completed: false,
      },
    {
        userId: 1,
        id: 14,
        title: "repellendus sunt dolores architecto voluptatum",
        completed: true
      },
      {
        userId: 2,
        id: 15,
        title: "ab voluptatum amet voluptas",
        completed: true
      },
      {
        userId: 2,
        id: 16,
        title: "accusamus eos facilis sint et aut voluptatem",
        completed: true
      },
  ]
  
 //Ex.4

  app.get ("/list",(rest: Request , resp: Response) => {

    const filterByStatus = toDoList.filter((list)=>{
       return list.completed === true 
    })
    resp.send(filterByStatus)
    })

//Ex.5

app.post ("/list/add/",(req: Request, res: Response)=>{

   const {userId,title} = req.body

   const newToDO = {
    userId,
    id: Date.now(),
    title,
    completed:false,
   }

    toDoList.push(newToDO)
    res.send(toDoList)

})



app.listen (3003, () => console.log ("O servidor está online na porta 3003"))