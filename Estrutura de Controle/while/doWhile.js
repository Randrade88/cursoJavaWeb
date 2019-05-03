function getInteiroAleatorioEntre(min, max){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor);
}

let opcao = -1

do{
    opcao = getInteiroAleatorioEntre(-1, 10)
    console.log(`Opção escolhida foi ${opcao}`)
}while(opcao != -1)
//Única estrutura de controle que a expressão está depois do bloco
console.log("Sai fora")

