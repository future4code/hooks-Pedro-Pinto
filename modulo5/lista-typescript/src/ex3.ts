
enum GENERO {
	ACAO="ação",
	DRAMA="drama",
	COMEDIA="comédia",
	ROMANCE="romance",
	TERROR="terror"
}

// type Film = {
//     nome: string,
//     ano: number,
//     genero:GENERO.ACAO,
//     pontuação?:number
// }

const getFilms = (nome:string, ano:number, genero:GENERO, pontuacao?:number) => {

    if(pontuacao){
        console.log (`O nome do filme é ${nome}, seu ano de lançamento é ${ano}, o genero é ${genero} e ele tem pontuação de ${pontuacao}.`)
    }else{
        console.log (`O nome do filme é ${nome}, seu ano de lançamento é ${ano} e o seu genero é ${genero}.`)

    }

}

getFilms ("Duna", 2022, GENERO.DRAMA)


