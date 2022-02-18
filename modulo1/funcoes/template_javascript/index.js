//17-02-2022

// Exercícios de interpretação de código
//1.
//a. 10
//50

// function minhaFuncao(variavel) {
// 	return variavel * 5
// }

// console.log(minhaFuncao(2))
// console.log(minhaFuncao(10))

//b. Não iria acontecer nada no console poi não imprimi os resultados

// function minhaFuncao(variavel) {
// 	return variavel * 5
// }

// minhaFuncao(2)
// minhaFuncao(10)

//2.a. Caso o texto contenha "cenoura", a função retorna o texto minusculo

//b.
// i.   Eu gosto de cenoura - eu gosto de cenoura
// ii.  CENOURA é bom pra vista - cenoura é bom para vista
// iii. Cenouras crescem na terra - Cenouras crescem na terra

// let textoDoUsuario = prompt("Insira um texto");

// const outraFuncao = function(texto) {
// 	return texto.toLowerCase().includes("cenoura")
// }

// const resposta = outraFuncao(textoDoUsuario)
// console.log(resposta)

// O meu está retornando só TRUE, está correto?

// Exercícios de escrita de código
//1.a - 

// function sobreVoce () {
// console.log ("Eu sou Caio, tenho 23 anos, moro em São Paulo e sou estudante.")
// }
// sobreVoce()

//b. 

function sobreVoce (nome, idade, cidade, profissao) {
    console.log (`Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao}`)
    }
   
    sobreVoce("Pedro",31,"Belo Horizonte","Analista de Projetos")

//2.
//a.
// function somaDuasEntradas (numero1,numero2) {
// const soma = numero1+numero2
// console.log (soma)

// }
// somaDuasEntradas (2,2)

//b.

// function booleano (numero1,numero2) {
// const maiorOuIgual = numero1>=numero2
// console.log (maiorOuIgual)

// }
// booleano (1,2)

//c.

// function parOuNao (numero1) {
// const ePar = numero1 % 2
// console.log (ePar)

// }
// parOuNao (2)

//caso o resultado da operação for 0 (zero) significa que o resultado é par caso contrario o resultado é ímpar.

//d. 

// function mensagem (texto) {

//  texto = prompt ("Qual é a sua mensagem?")
//  texto = texto.length()
//  texto = texto.toUpperCase()   

// }

// mensagem (texto)

//3.operações básicas

let numero1 = parseInt( prompt("Digite o primeiro numero") )
let numero2 = parseInt( prompt("Digite o segundo numero") )

function soma (numero1, numero2) {
const soma = numero1 + numero2
console.log ("Esta é a soma:", soma)
}

function diferença (numero1, numero2) {
const diferença = numero1 - numero2
console.log ("Esta é a difença:", diferença)   
}

function multiplicacao (numero1, numero2) {
const multiplicacao = numero1 * numero2
console.log ("Esta é a multiplicação:", multiplicacao)
}  

function divisao (numero1, numero2) {
const divisao = numero1 / numero2
console.log ("Esta é a divisão:", divisao)
}

soma()
diferença()
multiplicacao()
divisao()

// fazer o exercicio 3 de outra forma



