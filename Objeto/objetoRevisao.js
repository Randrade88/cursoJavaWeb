//coleção dinâmica de pares chave/valor
const produto = new Object
produto.nome =  'Cadeira'
produto['Marca do produto'] = 'Generica'
produto.preco = 220

console.log(produto)
delete produto.preco
console.log(produto)

const carro = {
    modelo: 'A4',
    valor: 89000,
    proprietario: {
        nome: 'Ronaldo',
        idade: '30',
        endereco: {
            logradouro: 'Av das Arapongas',
            numero: '123'
        }
    },
    //Objeto dentro de um objeto
    condutores: [{
        nome: 'Junior',
        idade: 24
    }, {
        nome: 'Ana',
        idade: 32
    }],
    //colocando função dentro do objeto
    calcularValorSeguro: function(){

    }
}

//Formas de acessar dados do objeto
carro.proprietario.endereco.numero = 1000
carro['proprietario']['endereco']['logradouro'] = 'Av Gigante'
console.log(carro )


//Deletando atributos do objeto
delete carro.condutores
delete carro.proprietario.endereco.logradouro
delete carro.calcularValorSeguro



console.log(carro)