import express, {Request, response, Response} from 'express'
import cors from 'cors'
import { usuarios, Conta, DadosUsuario } from './data';
import { verificaIdade } from './utils/valida-idade';


const app = express();
app.use(express.json());
app.use(cors());

// Mostra todas as contas
app.get ("/usuarios",(req: Request, res: Response)=>{
    res.status(200).send (usuarios)

})

// Mostra saldo da conta de determinado cpf

app.get("/usuarios/saldo",(req: Request, res: Response)=>{
    try {
        const cpf: string = req.headers.authorization as string

        const usuario: Conta | undefined = usuarios.find (
            (usuario) => cpf === usuario.cpf
        )

        if (!usuario) {
            console.log (cpf)

            throw new Error("Usuário não encontrado");
            
        }

        const saldo = usuario.saldo
        res.status(200).send({saldo})
        
    } catch (error: any) {
        res.status(400).send(error.message)
        
    }

})

//Criar uma nova conta

app.post ("/usuarios",(req: Request, res: Response) => {
    try {
        const {name, cpf, birthday}: DadosUsuario = req.body

        if(!verificaIdade(birthday)) {
            throw new Error("Data de nascimento invalida");        
        }

        const verificaCpf = usuarios.find((usuario) => usuario.cpf === cpf)

        if(verificaCpf){
            throw new Error("CPF incorreto");
        }
        
        const novoUsuario: Conta = {
            name,
            cpf,
            birthday,
            saldo:0,
            extrato: [],
        }

        usuarios.push(novoUsuario)

        res.status(201).send("Conta criada.")
        
    } catch (error:any) {
        res.status(400).send(error.message)
    }
})


app.listen (3003, () => console.log ("O servidor está online na porta 3003"))