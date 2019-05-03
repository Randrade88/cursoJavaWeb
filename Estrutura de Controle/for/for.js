let contador = 1
/*
while(contador <= 10){
    console.log(`contador = ${contador}`)
    contador++
}
*/
//Ele já incrementa no for, menos linhas.
for(let i = 1; i <= 10; i++){
    console.log(`i = ${i}`)
}

const notas = [6.7, 7.4, 9.8, 8.1, 7.7] 

//Pode ser usado para percorrer um array
for(let i = 0; i < notas.length; i++){ // array.length: pegar o tamanho do array
    console.log(`nota = ${notas[i]}`)
}