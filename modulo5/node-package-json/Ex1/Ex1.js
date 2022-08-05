// 1-  
//a) através do comando process.argv[2]
//b) 

let nome = process.argv[2]
let idade = Number(process.argv[3])
let idadeMaisSete = Number(process.argv[3]) + 7

console.log (`Olá, ${nome}! Você tem ${idade} anos.`)
console.log (`${nome}, daqui a 7 anos você terá ${idadeMaisSete} anos.`)

