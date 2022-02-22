

//Exercícios de interpretação de código
//Indique todas as mensagens impressas no console, SEM EXECUTAR o programa.

let array
console.log('a. ', array)
// a.undefined

array = null
console.log('b. ', array)
//b. null

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length)
//c.11

let i = 0
console.log('d. ', array[i])
//d. 0 ?????
// Porque deu 3?

array[i+1] = 19
console.log('e. ', array)
//e. 19 ?????

// const frase = prompt("Digite uma frase")
// console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)


// Exercícios de escrita de código
//1.

// const nome = prompt("Qual o seu nome?")
// const email = prompt ("Qual o seu e-mail?")
// const frase1 = `O e-mail ${email} foi cadastrado com sucesso. Seja bem-vindo ${nome} ! `
// console.log (frase1)

//2.a.
const comidasFavoritas = ["file", "ovos", "babaninha", "frango", "peixe"]
console.log (comidasFavoritas)

//b.
console.log ("Essas são as minhas comidas preferidas: ")
console.log (comidasFavoritas [0])
console.log (comidasFavoritas [1])
console.log (comidasFavoritas [2])
console.log (comidasFavoritas [3])
console.log (comidasFavoritas [4])

//c.


//3.
//a.

const listaDeTarefas = []

//b.
const atividade1 = prompt ("Qual a sua 1 atividade?")
const atividade2 = prompt ("Qual a sua 2 ativadade?")
const atividade3 = prompt ("Qual é a sua 3 atividade?")

//c.
listaDeTarefas.push(atividade1 , atividade2 , atividade3) 
console.log (listaDeTarefas)

//d.

const digiteUmaTarefa = prompt ("Difite uma tarefa jeita")
listaDeTarefas.splice(Number(digiteUmaTarefa,1))
console.log(listaDeTarefas)








