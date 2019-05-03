let a = 3 

global.b =123


this.c = 456
this.d = false
this.e = 'teste'

console.log(a)
console.log(this.a)
console.log(global.b)
console.log(this.c)
console.log(module.exports.c)
console.log(module.exports === this)
console.log(module.exports)

//criando uma variavel maluca: sem var e let!
abc = 123 //não faça isso em casa!!

console.log(abc)

//entenda os runtimes para aprender a programar melhor.
//não colocar variaveis em escopo global