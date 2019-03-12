function soma(){
    let soma = 0    
    for(i in arguments){
        soma += arguments[i]
    }
    return soma
}

console.log(soma(2, 4, 5, 6))
console.log(soma(10, 20, 'teste'))