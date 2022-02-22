// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui

const altura = prompt ("Escreva a altura do retangulo")
const largura = prompt ("Escreva a largura do retangulo")
const calculaAreaRetangulo = (altura*largura)
console.log (calculaAreaRetangulo)


}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui

  const anoAtual = prompt ("Qual o seu ano atual?")
  const anoDeNascimento = prompt ("Qual o seu ano de nascimento?")
  const imprimeIdade = anoAtual - anoDeNascimento
  console.log (imprimeIdade)

}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  return calculaIMC = (peso / (altura * altura))
}


// EXERCÍCIO 04

function imprimeInformacoesUsuario() {
  

  const nome = prompt("Digite seu nome")
  const idade = Number(prompt("Digite sua idade"))
  const email = prompt("Digite seu e-mail")
  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)

}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui


  const cor1 = prompt("Qual a sua priemira cor favorita?")
  const cor2 = prompt("Qual a sua segunda cor favorita?")
  const cor3 = prompt("Qual a sua terceira cor favorita?")
  console.log ([cor1, cor2, cor3])
  

}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {

  
  return retornaStringEmMaiuscula = string.toUpperCase()


}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {


 return calculaIngressosEspetaculo = Custo / valorIngresso


}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {

  
  const tamanho1 = string1.length
  const tamanho2 = string2.length 
  return checaStringsMesmoTamanho = tamanho1 === tamanho2

  
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {

  
  return retornaPrimeiroElemento = array[0]


}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {

 
  const tamanho = array.length 
  return tamanho - 1

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {

  
  const primeiro = array [0]
  const ultimo = array [array.length -1]
  return array  


}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}