function calculaPrecoTotal(quantidade) {
if (quantidade<12) {
 calculaPrecoTotal = quantidade*1.30
 
} else if (quantidade>=12) { 
  calculaPrecoTotal = quantidade*1.00
  
}
return calculaPrecoTotal
}
