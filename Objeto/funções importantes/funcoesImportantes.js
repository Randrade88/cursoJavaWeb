const pessoa = {
    nome: 'Ronaldo',
    idade: 31,
    peso: 80
}
//catching keys for objetc
console.log(Object.keys(pessoa))
//catching values for object
console.log(Object.values(pessoa))
//Catching array for keys and values for object
console.log(Object.entries(pessoa))

Object.entries(pessoa).forEach(e => {
    console.log(`${e[0]}: ${[1]}`)
})


//use destructuring 
Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
})

//Definir uma propriedade de um objeto
Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true,
    writable: false,
    //Note que ele vai congelar o valor, freeze
    value: '03/11/1988'
})


pessoa.dataNascimento = '04/03/1988'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

//Object.assing (ECMAScript 2015)
const dest = { a: 1}
const o1 = { b: 2}
const o2 = { c:3, a: 4}
//Vai juntar as contantes o1 e o2  dentro de dest
//Ele vai sobescrever o valor de a, ficando a = 4
const obj = Object.assign(dest, o1, o2 )
console.log(dest)

Object.freeze(obj)
obj.c = 123
console.log(obj)



