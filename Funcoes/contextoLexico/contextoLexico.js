const valor = 'Ronaldo'
//Vericia aonde a função se encontra dentro do código
function minhaFuncao(){
    console.log(valor)
}

function exec(){
    const valor = "Ronaldo2"
    minhaFuncao()
}
exec()