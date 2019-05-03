// const -> endereço de memoria -> valor
const pessoa = { nome: 'Ronaldo'}
pessoa.nome = 'Ronaldo2'
pessoa.idade = '29'
console.log(pessoa)

//Não pode atribuir um novo objeto para a constante pessoa, ele vai tentar pegar um novo endereço de memoria, isso não seria possível.
//pessoa = { nome: 'ana'}
//console.log(pessoa)


//
console.log(typeof Object.freeze)
//Função freeze vai congelar o objeto pessoa, fazendo com que ele não seja mais alterado.
Object.freeze(pessoa)
pessoa.nome = 'Ronaldo3'
console.log(pessoa.nome)//Vai imprimir Ronaldo2

//Não vai adicionar nada
pessoa.end = 'Av das Arapongas'
//E nem deletar
delete pessoa.nome
//A parada congela a porra toda
console.log(pessoa)