function contaOcorrencia(arrayDeNumeros, numeroEscolhido){
	let contador = 0;

	for(numero of arrayDeNumeros){
		if(numeroEscolhido === numero){
			contador ++
		}
	}
		console.log(`o numero ${numeroEscolhido} aparece ${contador}`)
}
contaOcorrencia([1,2,3,3,],3)