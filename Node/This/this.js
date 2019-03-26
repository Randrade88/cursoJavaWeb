console.log(this === global)
console.log(this === module)

console.log(this === module.exports)
console.log(this === exports)


function logThis() {
    console.log('Dentro de uma função ...')
    //Como está dentro da função ele vai dar false
    console.log(this === exports)
    //This dentro da function ele aponta para global
    console.log(this === global)
}

logThis()