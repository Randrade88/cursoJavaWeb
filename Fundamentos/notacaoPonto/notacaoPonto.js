console.log(Math.ceil(6.1))

const obj1 = {}
obj1.nome = 'Ronaldo'

console.log(obj1.nome)

function Obj(nome){
    this.nome = nome
    this.exec = function(){
        console.log('Exec....')
    }
}

const obj2 = new Obj('Cadeira')
const ojb3 = new Obj('Mesa')
console.log(obj2.nome)
console.log(ojb3.nome)

ojb3.exec()