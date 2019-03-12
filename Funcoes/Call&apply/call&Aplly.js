function getPreco(imposto = 0, moeda = 'R$'){
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}
//cria objeto produto
const produto = {
    nome: 'Notebook',
    preco: 4589,
    desc: 0.15,
    //add o metodo getPreco(função)
    getPreco
}

global.preco=20
global.desc=0
console.log(getPreco())
console.log(produto.getPreco())


const carro = {preco: 49990, desc: 0.20 }

console.log(getPreco.call(carro))
console.log(getPreco.apply(carro))

//mode de passar os parâmetros via call, sempre o primeiro vai ser o contexto e o resto os parâmetros
console.log(getPreco.call(carro, 0.17, '$'))

//para passar os parâmetros via apply, coloca-se um array.
console.log(getPreco.apply(global, [0.17, '$']))