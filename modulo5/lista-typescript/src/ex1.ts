const nome = "Pedro"
const dataNascimento = "27/06/1990"
 
var dataSeparada = dataNascimento.split("/")
 
const dia = dataSeparada[0]
 
const mes = dataSeparada[1]
 
const ano = dataSeparada[2]
 
console.log(`Olá me chamo ${nome}, nasci no dia ${dia} do mês de ${mes} do ano de ${ano}`)