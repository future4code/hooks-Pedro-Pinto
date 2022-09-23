import express, { Request, Response } from "express";
import cors from "cors";
import connection from "./database/connection";


const app = express();

app.use(express.json());
app.use(cors());

app.get("/users",async (req: Request, res: Response) => {
  let errorCode = 400
  try{
    const resultado = await connection.raw(`
      select * FROM labecommerce_users;
    `)

    res.status(200).send(resultado[0])
  } catch (error) {
    res.status(errorCode).send(error.message)
  }  
})


app.listen(process.env.PORT || 3003, () => {
  console.log(`Servidor rodando na porta ${process.env.PORT || 3003}`)
});