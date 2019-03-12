function getInteiroAleatorioEntre(min, max){    
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = 0

while(opcao != -1){//Verifica, se for verdadeiro continua no laço, se for falso cai fora.
    opcao = getInteiroAleatorioEntre(-1,  10)
    console.log(`Opção escolhida foi ${opcao}`)
}

console.log('Até a próxima')