const nums = [1, 2, 3, 4, 5, 6 ,7 ,8, 9, 10]


for (x in nums){
    if(x == 5) break //Quando chegar no indíce 5 ele vai o processo e vai sair dor for, ele acontece fora do laço corrente. if não é um laço corrente
    console.log(`${x} = ${nums[x]}`)
}

for(y in nums){
    if(y == 5){
        continue//Quando chegar no indíce 5 ele vai pular o indíce 5 e vai para o indíce 6, continuando no for
    }
    console.log(`${y} = ${nums[y]}`)
}
//Não utilizar for dentro de outro, usar metodos e funções melhores.
//Cuidado com esse tipo de estrutura.
externo: for (a in nums){
    for(b in nums){
        if(a == 2 && b ==3)break externo
        console.log(`Par = ${a}, ${b}`)
    }
}