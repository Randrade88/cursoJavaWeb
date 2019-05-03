//Passando uma função anonima para uma variável
const soma = function (x, y){
    return x + y
}

const imprimirResultado = function (a, b, operacao = soma){//Vai executar o função soma que está sendo passado como parâmetro
    console.log(operacao(a, b))
}

imprimirResultado(4,3)
imprimirResultado(4,3, soma)
imprimirResultado(3,4, function (x, y){//Passando uma função anonima diretamenta para um outra função
    return x -y
})

imprimirResultado(3, 4, (x, y) => x* y) //Passando uma arrow function como parâmetro

//Função dentro do contexto do objeto
const pessoa ={
    falar: function (){
        console.log('Ola')
    }
}

pessoa.falar()