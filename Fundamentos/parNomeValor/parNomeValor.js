const saudacao = "Opa" // contexto léxico 1

function exec(){
    const saudacao = 'Falaa' //Contexto léxico2
    return saudacao
}

//objetos são furpos aninhados de pares nome/valor

const cliente = {
    nome: 'Ronaldo',
    idade: 30,
    peso: 82,
    endereco: {
        logradouro: 'Rua Muito Legal',
        numero: 123
    }
}

console.log(saudacao)

console.log(exec())
console.log(cliente)