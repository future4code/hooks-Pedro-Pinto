//1. Exercícios de interpretação de código

//a.Trocou a "Virginia Cavendish" pelo "Denise Fraga"

//2.a)

//Cachorro
///nome: "Juca", 
// 	idade: 3, 
// 	raca: "SRD"

//Gato


//Exercícios de escrita de código
//1.a) 

const pessoa = {

    nome: "Pedro",
    apelido: ["Pedrim", "Pedrinho", "PP"] 
}

console.log (`Eu sou o ${pessoa.nome}, mas pode me chamar de: ${pessoa.apelido} `)

//a.

const novaPessoa = {
    ...pessoa,
    apelido: ["Pedrim2", "Pedrinho2", "PP2"]

}
console.log (novaPessoa)

//DUVIDA

//2.a) 

const pessoa1 = {

    nome: "Igor",
    idade: 35,
    profissao: "Adm"

}

const pessoa2 = {

    nome: "Manuel",
    idade: 42,
    profissao: "pescador"
}

function imprimeInfo(info) {

    return [

        info.nome,
        info.nome.lenght,
    ]
}

console.log(imprimeInfo(pessoa))
console.log(imprimeInfo(pessoa2))



//3.)

 const carrinho = []

const fruta1 = {
    nome: "Pera",
    diponibilidade: true
    
}

const fruta2 = {
    nome: "Maça",
    diponibilidade: true
    
}

const fruta3 = {
    nome: "Banana",
    diponibilidade: true
    
}

function adicionarNoCarrinho (objeto) //objeto

{

    carrinho.push (objeto)
}

adicionarNoCarrinho(fruta1) // argumento
adicionarNoCarrinho(fruta2)
adicionarNoCarrinho(fruta3)

console.log(carrinho) 

