const a = 1
const b = 2
const c = 3

const obj1 = {a: a, b: b, c: c}
//Não precisa colocar a variavel que está passando se os nomes são iguais
const obj2 = {a ,b ,c}
console.log(obj1, obj2)

const nomeAttr = 'Nota'
const valorAttr = 7.99

const obj3 = {}
obj3[nomeAttr] = valorAttr
console.log(obj3)

const obj4 = {[nomeAttr] : valorAttr}
console.log(obj4)

const obj5 = {
    funcao1: function(){
        //forma antiga
    },
    funcao2(){
        //forma nova, forma mais curta.
    }
}

console.log(obj5)