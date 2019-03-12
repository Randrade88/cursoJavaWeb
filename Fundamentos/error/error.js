function tratarErrorLancar(erro){
    //throw new Error('...')

    throw {
        name: erro.name,
        msg: erro.message,
        date: new Date
    }
}


function imprimirNomeGriotado(obj){
    try{
    console.log(obj.nome.toUpperCase() + '!!!')
    } catch(e){
        tratarErrorLancar(e)
    } finally{
        console.log('Final')
    }
}

const obj = { name: 'Ronaldo'}
imprimirNomeGriotado(obj)