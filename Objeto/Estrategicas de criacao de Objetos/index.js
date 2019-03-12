//usando a notação literal
const obj1 ={}
console.log(obj1)

//Object em JS
console.log(typeof Object, typeof new Object)
//Criando Objeto a partir da função construtora
const obj2 = new Object

console.log(obj2)

//Criando suas proprias funções construtoras
function Produto(nome, preco, desc){
    this.nome = nome
    this.getPrecoComDesconto = () => {
        return preco * (1 - desc)
    }
}

const p1 = new Produto('Caneta', 7.99, 0.15)
const p2 = new Produto('Notebbok', 2998.99, 0.25)
console.log( p1.getPrecoComDesconto(), p2.getPrecoComDesconto())

//Função Factory, fabrica um objeto
function criarFuncionario(nome, salarioBase, faltas){
    return {
        nome, 
        salarioBase,
        faltas,
        getSalario() {
            return (salarioBase / 30) * (30 - faltas)
        }
    }
}

const f1 = criarFuncionario('Ronaldo', 7980, 4)
const f2 = criarFuncionario('Maria', 11400, 1)
console.log(f1.getSalario(), f2.getSalario())


//Object.create
const filha = Object.create(null)
filha.nome = 'Ana'
filha.idade = 35
console.log(filha)

//uma função famosa que retorna Objeto, transforma json num objsto, já fiz isso.
const fromJSON = JSON.parse('{"info": "Sou o Ronaldo"}')
console.log(fromJSON.info)