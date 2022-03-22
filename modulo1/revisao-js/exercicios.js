// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
    let  arrayTamanho = array.length
    return  (arrayTamanho)
   
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
    let arrayInvertido = array.reverse()
    return (arrayInvertido)
  
}

// EXERCÍCIO 03    NÃO ENTENDI COMO SE FAZ
function retornaArrayOrdenado(array) {

    arrayNumCrescente = array.sort(function (a,b) {
        if (a > b) return 1         
        if (a < b) return -1 
        return 0
    })
    return arrayNumCrescente
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    const arrayPares = []
    for (let numero of array)
        if (numero % 2 === 0) {
            arrayPares.push(numero)
            
    }  
    return arrayPares
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    const arrayPares = []
    for (let numero of array)
        if (numero % 2 === 0) {
            arrayPares.push(numero ** 2)
                       
    } 
    return arrayPares
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    let maior = 0
    for (let numero of array) 
        if (numero > maior) {
        maior = numero
    }       
    return maior
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {

    let maiorNumero
    let menorNumero

    if (num1 > num2) {
        maiorNumero = num1
        menorNumero = num2
    } else {
        maiorNumero = num2
        menorNumero = num1
    }

    const maiorDivisivelPorMenor = maiorNumero % menorNumero === 0
    const diferenca = maiorNumero - menorNumero
    
    return {

        maiorNumero: maiorNumero,
        maiorDivisivelPorMenor: maiorDivisivelPorMenor,
        diferenca: diferenca

    }
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
    
    let novoArray = [];
    for (let number = 0; novoArray.length < n; number++){
        if (number % 2 === 0) {
       novoArray.push(number)
    }
}
    return novoArray
}


// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {

    if (ladoA === ladoB && ladoA === ladoC ) {
        return ("Equilátero")
    } else if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC)  {
        return ("Isósceles")
    } else {
        return ("Escaleno")
    }

}

// EXERCÍCIO 10 (teste envio novo pull request)
function retornaSegundoMaiorESegundoMenor(array) {


  
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}