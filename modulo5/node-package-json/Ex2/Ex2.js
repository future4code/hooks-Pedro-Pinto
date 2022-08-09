//2 - 

let operacao = process.argv[2]
let num1 = Number(process.argv[3])
let num2 = Number(process.argv[4])
 

if(process.argv[3] && process.argv[4]){

switch(operacao) {
  case "soma":
   console.log (num1 + num2)
    break;
  case "sub":
    console.log (num1 - num2)
    break;
  case "div":
    console.log (num1 / num2)
    break;
  case "mult":cd
    console.log (num1 * num2)
    break;
  default:
    console.log("Erro")
}  
 
}else{

console.log ("Passe mais de um algarismo...")

}