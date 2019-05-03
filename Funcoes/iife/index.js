//função auto invocada.
//ótimo metedodo para definir váriaveis que não podem ser lida pelo usuário no navegador.

//IIFE -> imediately invoked function expressio
(function(){
    console.log('Será executado no hora!')
    console.log('Foge do escopo mais abrangente')
})()


console.log('Será executado no hora!')
console.log('Foge do escopo mais abrangente')