let comparaComThis = function (param){
    console.log(this === param)
}
comparaComThis(global)

const obj = {}
comparaComThis = comparaComThis.bind(obj)//Passando o OBJ como parâmetro pelo bind, fazendo ele reponder pelo this
comparaComThis(global)
comparaComThis(obj)


let comparaComThisArrow = param => console.log(this === param)//com arrow vai pegar o this do modulo do node
comparaComThisArrow(global)
comparaComThisArrow(module.exports)