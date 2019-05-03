const fabricantes = ["Mercedes", "Audi", "BMW"]
//Chama o função para cada elemento dentro do array
function imprimir(nome, indice){
    console.log(`${indice +1}. ${nome}`)
}

fabricantes.forEach(imprimir)
fabricantes.forEach( fabricante => console.log(fabricante))