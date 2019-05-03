function soBoaNoticia(nota){
    if(nota >= 7){//Se a nota for igual ou maior que 7, o bloco vai ser executado.
        console.log('Aprovado com ' + nota )
    }
}

soBoaNoticia(8.1)
soBoaNoticia(6.1)

function seForVerdadeEuFalo(valor){
    if(valor){ //vai verificar se a variável valor é verdadeiro ex: true
        console.log('É verdadeiro....' + valor )
    }
}

seForVerdadeEuFalo()
seForVerdadeEuFalo(null)
seForVerdadeEuFalo(undefined)
seForVerdadeEuFalo(NaN)
seForVerdadeEuFalo("")
seForVerdadeEuFalo(0)
seForVerdadeEuFalo(-1) //Ele diz que é verdadeiro, mesmo com o valor nagativo(cuidado)
seForVerdadeEuFalo(" ")// String com espaço já é alguma coisa.
seForVerdadeEuFalo('?')
seForVerdadeEuFalo([])
seForVerdadeEuFalo([1, 2])
seForVerdadeEuFalo({})//Objeto vazio tbm é verdadeiro