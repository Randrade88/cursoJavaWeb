function criarProduto(nome, preco){
    return  {
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(criarProduto('NOTEbook', 5.154))
