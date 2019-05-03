const sequencia = {
    _valor: 1, //convenção, dizendo que essa variável só pode ser acessada internamente. 
    get valor(){ return this._valor++},
    set valor(valor) { 
        if(valor > this._valor){
            this._valor = valor
        }
    }
}

console.log(sequencia.valor, sequencia.valor)
//Set new value
sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor)

//trying to set lower value
sequencia.valor = 900
console.log(sequencia.valor, sequencia.valor)