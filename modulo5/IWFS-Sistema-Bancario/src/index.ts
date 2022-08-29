import express, {Request, response, Response} from 'express'
import cors from 'cors'
import { usuarios, Conta, DadosUsuario, Transacao, Extrato } from './data';
import { verificaIdade } from './utils/valida-idade';
import { gerarDataAtual } from "./utils/gera-data-atual";
import { calcularTransacoes } from "./utils/calcula-transacoes"


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

// Faz uma transferencia entre contas

app.post("/usuarios/transf",(req: Request, res: Response)=>{
try {
    const cpf = req.headers.authorization1
    const name = req.headers.authorization2
    const {cpfTransferencia, nameTransferencia, valor} = req.body

    const usuario: Conta | undefined = usuarios.find (
        (usuario) =>
            usuario.name === name && usuario.cpf === cpf
    )

    if(!usuario) {
        throw new Error("Favor inserir o usuário corretamente");
        
    }

    const usuarioTransferencia: Conta | undefined = usuarios.find(
        (usuario)=> usuario.name === nameTransferencia && usuario.cpf === cpfTransferencia
    )

    if (!usuarioTransferencia) {
        throw new Error("Usuario transferencia não encontrato")
    }

    if (usuario.saldo < valor) {
        throw new Error("Não há valor suficiente")
    }

    const data = gerarDataAtual()

    const transferenciaSaida: Extrato = {
        valor,
        data,
        descricao: Transacao.TRANSFERENCIA_SAIDA,
    }

    const transferenciaEntrada: Extrato = {
        valor,
        data,
        descricao: Transacao.TRANSFERENCIA_ENTRADA,
    }

    usuario.extrato.push(transferenciaSaida)
    usuarioTransferencia.extrato.push(transferenciaEntrada)

    response.status(200).send(transferenciaSaida)


} catch (error:any) {
    res.status(400).send(error.message)
}

})

app.listen (3003, () => console.log ("O servidor está online na porta 3003"))