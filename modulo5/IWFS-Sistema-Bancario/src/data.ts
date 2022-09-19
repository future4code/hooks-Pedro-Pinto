export enum Transacao {
    DEBITO = "Pagamento de conta",
    DEPOSITO = "Depósito de dinheiro",
    TRANSFERENCIA_SAIDA = "Transferência de dinheiro",
    TRANSFERENCIA_ENTRADA = "Recebimento de transferência de dinheiro"
}

export type DadosUsuario = {
    name: string,
    cpf:string,
    birthday: string,
}

export type DadosConta = {
    saldo: number,
    extrato: Extrato[]

}

export type Extrato = {
    valor: number,
    data: string,
    descricao: Transacao,
    status?: string
}

export type Conta = DadosUsuario & DadosConta

export const usuarios: Conta[] = [
    {
        name: "Pedro",
        cpf: "111.111.111-11",
        birthday:"27/06/1990",
        saldo: 2000.00,
        extrato: [
            {
                valor: 100.0,
                data: "26/08/2022",
                descricao: Transacao.DEBITO,
            },
            {
                valor: 500.0,
                data: "02/08/2022",
                descricao: Transacao.DEBITO,
            },
            {
                valor: 1000.0,
                data: "02/08/2022",
                descricao: Transacao.DEBITO,
            }

        ]
    },

    {
        name: "Rengar",
        cpf: "452.546.754-06",
        birthday: "15/01/1997",
        saldo: 5000.00,
        extrato: [
            {
                valor: 5000.00,
                data: "08/04/2022",
                descricao: Transacao.DEPOSITO,
            },
            {
                valor: 1000.00,
                data: "08/04/2022",
                descricao: Transacao.DEBITO,
            },
            {
                valor: 1500.00,
                data: "08/04/2022",
                descricao: Transacao.DEBITO,
            },
            {
                valor: 1200.00,
                data: "09/04/2022",
                descricao: Transacao.DEBITO,
            },
        ],
    }
    
]