function Pessoa(nome) {
        this.nome = nome
    

    this.falar = function (){
        console.log(`Meu nome É ${this.nome}`)
    }
}

const p1 = new Pessoa('Ronaldo')
p1.falar()
