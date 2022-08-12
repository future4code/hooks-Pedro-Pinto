//1.A)
// Não é possível atribuir uma variável

//B) 
const meuNumero: number | string = "ola"

//C)

type Pessoa = {
nome: string, 
idade: number, 
corFavorita: string
}

enum ArcoIres {
    VERMERLHO ="vermelho",
    LARANJA = "Laranja",
    AMARELO = "Amarelo",
    VERDE = "Verde",
    AZUL = "azul",
    VIOLETA ="violeta",
    ANIL = "Anil"
}

const pessoa1: Pessoa = {
    nome: "Pedro", 
    idade: 20, 
    corFavorita: ArcoIres.AZUL
}
const pessoa2: Pessoa = {
    nome: "Pedro Alberto", 
    idade: 23, 
    corFavorita: ArcoIres.ANIL
}
const pessoa3: Pessoa = {
    nome: "Rapha", 
    idade: 32, 
    corFavorita: ArcoIres.VERDE
}

console.log (pessoa1)







