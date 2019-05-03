class Avo {
    constructor(sobrenome){
        this.sobrenome = sobrenome
    }
}

class Pai extends Avo{
    constructor(sobrenome, profissao = 'Professor'){
        super(sobrenome)//Passando o valor para o classe Avo
        this.profissao = profissao

    }
}

class Filho extends Pai{
    constructor(){
        super('Andrade')
    }
}

const filho = new Filho
console.log(filho)