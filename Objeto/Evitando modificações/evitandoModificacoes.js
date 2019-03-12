//Object.preventExtensions não deixa adicionar novos atributos, pode excluir, mas não aumentar os atributos

const produto = Object.preventExtensions({
    nome: 'Ronaldo', preco: 1.99, tag: 'foda'
})

console.log(produto)
produto.nome = 'Ronaldo 2'
produto.descricao = 'Ele é foda'//Não vai permitir add descricao
delete produto.tag
console.log(produto)

//Object.seal Só pode alterar os atributos do objeto
const pessoa = {nome:'Ronaldo', idade:30}
Object.seal(pessoa)
console.log('Selado:', Object.isSealed(pessoa))

pessoa.sobrenome = 'ROnaldo andrade'//Não vai deixar add
delete pessoa.nome//E nem deletar
pessoa.idade = 31
console.log(pessoa)