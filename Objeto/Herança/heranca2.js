//Cadeia de protótipos (prototype chain)
const avo = { attr1: 'A'}
const pai = { __proto__: avo, attr2: 'b', attr3: 'Z'}
const filho = { __proto__: pai, attr3: 'c'}

console.log(filho.attr1)//Acessando o atribulo do objeto avo, que está sendo referenciando.
console.log(filho.attr3)//Vai imprimir c, ele vai sobescrever.
console.log(filho.attr1, filho.attr2)


const carro = {
    velAtual: 0,
    velMax: 200,

    acelerarMais(delta){
        if(this.velAtual + delta <= this.velMax){
            this,this.velAtual += delta
        }else{
            this.velAtual = this.velMax
        }
    },
    status(){
        return `${this.velAtual}km/h de ${this.velMax}km/h`
    }
}

const ferrari = {
    modelo: 'f40',
    velMax: 324,//Vai sobescrever o valor que está dentro de carro(SHADOWING)
}

const volvo = {
    modelo: 'v40',
    status(){
        return `${this.modelo}: ${super.status()}`//Super vai pegar o status do objeto carro
    }
}

Object.setPrototypeOf(ferrari, carro)// estabelece uma função de prototipo entre o objeto ferrari e o carro(Sendo carro o pai de ferrari)
Object.setPrototypeOf(volvo, carro)

console.log(ferrari)
console.log(volvo)
volvo.acelerarMais(100)//Acesando a função que está dentro de carro
console.log(volvo.status())

ferrari.acelerarMais(220)

//Vai mostrar a velocidade máxima pegando o valor do objeto ferrari e não de carro(Shadowing)
console.log(ferrari.status())