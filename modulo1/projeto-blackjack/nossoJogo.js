/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

console.log ("Boas vindas ao jogo de Blackjack!")


if (confirm ("Quer iniciar uma nova rodada?. Responda ok ou cancelar")) {
 
   const cartasPc = {
      carta1 : comprarCarta(),
      carta2 : comprarCarta()
   }

   const cartasUsuario = {
      carta1 : comprarCarta(),
      carta2 : comprarCarta()
   }

 const pontuacaoPC = cartasPc.carta1.valor + cartasPc.carta2.valor 
 const pontuacaoUsuario = cartasUsuario.carta1.valor + cartasUsuario.carta2.valor 

   console.log (`Computador - ${cartasPc.carta1.texto } ${cartasPc.carta2.texto}  - Pontuação ${pontuacaoPC}`)
   console.log (`Usuário - ${cartasUsuario.carta1.texto} ${cartasUsuario.carta2.texto} - Pontuação ${pontuacaoUsuario} `)

 if (pontuacaoPC === pontuacaoUsuario) {
    console.log("Empate!")

 } else if (pontuacaoPC  >pontuacaoUsuario) {
      console.log("O computador ganhou!")

   } else  {
   console.log("O usuário ganhou!")

    }


} else { 
   console.log ("O jogo acabou.")

}


//TENTATIVA  (FAVOR DESCONSIDERAR)
// function blackJack(texto,valor) {
   
// if (confirm ("Quer iniciar uma nova rodada?. Responda ok ou cancelar")) {

//    const carta = comprarCarta (texto,valor) //porque é preciso colocar o texto e valor aqui dentro?
//    console.log (`Carta ${carta.texto} - Pontuação ${carta.valor}`)

//    } else { 
//       console.log ("O jogo acabou.")
// }

// }

// blackJack ()

     

