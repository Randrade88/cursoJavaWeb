class Pessoa {
    constructor(nome){
        this.nome = nome
    }

    falar(){
        console.log(`Meu nome É ${this.nome}`)
    }
}

const p1 = new Pessoa('Ronaldo')
p1.falar()

const criarPessoa = nome => {
    return {
        falar: () => console.log(`Meu nome é ${nome}`)//Não precisa acessar a variável com o THIS
    }
}

const p2 = criarPessoa('Ronaldo foda')
p2.falar()