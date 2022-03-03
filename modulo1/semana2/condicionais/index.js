//Exercícios de interpretação de código
// a) Explique o que o código faz. Qual o teste que ele realiza? 
// O código faz teste se o numero é par ou impar

// Para que tipos de números ele imprime no console "Passou no teste"? 
// Par

//Para que tipos de números a mensagem é "Não passou no teste"? 
// Impares

//2. O código abaixo foi feito por uma pessoa desenvolvedora, contratada para automatizar algumas tarefas de um supermercado:
//a) Para que serve o código acima?
// Para retornar o nome da fruta inserido
//b)Qual será a mensagem impressa no console, se o valor de fruta for "Maçã"?
//Preço =2.25
//c)
// Preco = 5.5 e Preco = 5

//3. a) Recebendo um número através do usuário
//Considere um usuário digitou o número 10. Qual será a mensagem do terminal? E se fosse o número -10?
//b) "Esse número passou no teste" / Se for -10 não aparecerá mensagem
//c) Não haverá nenhum erro no console

//1.A, B e C
 
// const idade = Number(prompt("Qual é a sua idade?"))
 
//  function dirigir (idade) {
//   if (idade >= 18) {
   
//     console.log ( "Você pode dirigir")
       
//   }
 
//     console.log("Você NÃO pode dirigir")
// }
 
// dirigir(idade)
 
// 2.
 
// const turnoDoDia1 = prompt ("Qual o turno do dia você estuda? Digite M (matutino) ou V (Vespertino) ou N (Noturno)")
 
// function boasVindas(turnoDoDia) {
 
//   if (turnoDoDia === "M") {
//     console.log ("Bom dia!")
//   } else if (turnoDoDia === "V"){
//       console.log ("Boa Tarde!")
//   } else if (turnoDoDia === "N"){
//         console.log("Boa Noite!")
//   }
 
// }


// boasVindas(turnoDoDia1)

//3.

// const turnoDoDia2 = prompt ("Qual o turno do dia você estuda? Digite M (matutino) ou V (Vespertino) ou N (Noturno)")
 


//     switch (turnoDoDia2) {
//         case "M" :
//             console.log ("Bom dia!")
//             break;
//         case "V":
//             console.log ("Boa Tarde!")
//             break;
//         case "N":
//             console.log("Boa Noite!")
//             break;      
//         default:
//             break;
//     }
    

//4.

const genero = prompt ("Qual o genero de filme você irá assistir?")
const preco = Number(prompt ("Qual o valor do ingresso?"))

function assistirFilme(genero,preco) {
    if (genero==="fantasia" && preco < 15 ){
            console.log ("Bom filme!")
    } else {
    console.log ("Escolha outro filme :(")
    }
}
assistirFilme(genero,preco)