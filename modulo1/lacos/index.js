//Exercícios de escrita de código
//1. Pergunte ao usuário quantos bichinhos de estimação ele tem e guarde esse dado em uma variável. 


// let quantidadeBichos = Number(prompt("Quantos bichinhos de estimação você tem?"))
// let arrayDeBichos = []
 
//a.
//  if (quantidadeBichos === 0) {
   
// console.log ("Que pena! Você pode adotar um pet!")
     
//  } else {
//       for (let i = 0 ; i < quantidadeBichos ; i++ ) {
//       arrayDeBichos.push(prompt ("Qual o nome do seu amiguinho?"))
//     }        
//   }
 
// console.log (arrayDeBichos)

//2. 

let arrayOriginal = [1,3,6,9,12]

//a.

// function imprimeArray(arrayOriginal) {

//     for (let i = 0; i < arrayOriginal.length; i++) {
//         const element = arrayOriginal[i];
//         console.log (element)

//     }
// }

// imprimeArray(arrayOriginal)

//b.

// function imprimeArray(arrayOriginal) {

//     for (let i = 0; i < arrayOriginal.length; i++) {
//         const element = arrayOriginal[i];
//         console.log (element/10)

//     }
// }

// imprimeArray(arrayOriginal)

//c.

function imprimeArray(array) {

    const arrayPares =[]

    for (let i = 0; i < arrayOriginal.length; i++) {
        
        if (array[i] % 2 === 0) {
        arrayPares.push (array[i])
    }     
        }
        console.log (arrayPares)
    }

imprimeArray(arrayOriginal)