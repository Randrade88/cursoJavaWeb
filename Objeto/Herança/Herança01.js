const ferrari = {
    modelo: 'f40',
    velMax: 324
}

const volvo = {
    modelo: 'v40',
    velMax: 200
}

console.log(ferrari.__proto__)//Existe um objeto pai, mas ele não aparece.
console.log(ferrari.__proto__ === Object.prototype) //__proto__ é uma referencia para o seu prototipo do objeto recorrente.
console.log(volvo.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__)//Não existe objeto maior que Object.prototype.

function meuObjeto() {}
console.log(typeof Object, typeof meuObjeto)
console.log(Object.prototype, meuObjeto.prototype)