
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
    descricao: string,
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
                descricao: "teste",
            },
            {
                valor: 500.0,
                data: "02/08/2022",
                descricao: "teste",
            },
            {
                valor: 1000.0,
                data: "02/08/2022",
                descricao: "teste",
            }

        ]
    },

    // {
    //     name: "Miguel",
    //     cpf:"222.222-.22-22",
    //     birthday:"02-04-2016", 
    // },

    // {
    //     name: "Amanda",
    //     cpf: "333.333.333-11",
    //     birthday:"14-10-1992", 
    // }
]