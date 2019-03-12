console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)

String.prototype.reverse = function(){
    return this.split('').reverse().join('')
}
console.log('Ronaldo Foda'.reverse())

Array.prototype.first = function(){
    return this[3]
}
console.log([1,2,3,4,5,6].first())

//Nunca substituir funções padrões do sistema
String.prototype.toString =function(){
    return 'Lascou tudo'
}

console.log('Ronaldo foda'.reverse())