let valor

console.log(valor)

valor = null //ausência de valor.

//console.log(valor.toString()) //!!Error!

const produto = {}
console.log(produto.preco)

console.log(produto)

produto.preco = 3.50

console.log(produto)

produto.preco = undefined

console.log(!!produto.preco)

console.log(produto )

produto.preco = null
console.log(!!produto.preco)
console.log(produto)