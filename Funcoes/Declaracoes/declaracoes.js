console.log(soma(3, 6))

//declaração de função padrão, vai ser lida antes de executar o código
function soma(x, y){
    return x + y
}

//function expression
const sub = function (x, y){
    return x -y 
}
console.log(sub(7,3))


//named function expression
const mult = function mult(x, y){ //no momento de debugação vai aparecer o nome da função mult
    return x * y
}

console.log(mult(4, 3))