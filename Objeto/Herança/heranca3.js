const pai = { nome: 'Ronaldo', corCabelo:'preto'}
//criando o objeto filha, tendo como prototipo o objeto pai
const filha1 = Object.create(pai)
filha1.nome = 'Ronaldo2'
//Acessando o atributo corCabelo através do objeto pai
console.log(filha1.corCabelo)

const filha2 = Object.create(pai, {
    //Podemos já está passando novos atribulos com valores e opçoes.
    nome: {value: 'ROnaldo', writable: false, enumerable: true}
})

console.log(filha2.nome)
filha2.nome= 'Ronaldo3'
//Vai imprimir o nome ROnaldo já que não pode ser alterado e vai pegar a cor de cabelo preto, que está vindo do objeto pai
console.log(`${filha2.nome}, tem cabelo ${filha2.corCabelo}`)

console.log(Object.keys(filha1))
console.log(Object.keys(filha2))

//imprimir todos os atribulos com for
for(let key in filha2){
    //Saber se o atribulo veio do próprio objeto ou veio por herança
    filha2.hasOwnProperty(key) ?
    console.log(key) : console.log(`Por herança: ${key}`)
}