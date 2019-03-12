const imprimirResultado = function (nota) {
    switch (Math.floor(nota)) {
        case 10:
        case 9:
            console.log('Quadro de Honra')
            break //Usar para parar a o processo no switch
        case 8: case 7:
            console.log('Aprovado')
            break
        case 6: case 5: case 4:
            console.log('Recuperação')
        case 3: case 2: case 1:
            console.log('REPROVADO')
            break
        default:
            console.log('Nota Inválida ')
    }
}

imprimirResultado(10)
imprimirResultado(8.9)
imprimirResultado(6.55)
imprimirResultado(2.3)
imprimirResultado(-1)
imprimirResultado(11)

 //Necessário ter break em todos os casos, se não ele vai executar todos os cases abaixo.
 //Switch é uma seleção multipla.
 //Não é uma expressão relacional, que retorna verdadeiro ou false.