//função feita normalmente.
let dobro = function(a){
    return  2 * a
}

//função feita com arrow
dobro = (a) => {
    return 2 * a
}
//funções de uma única linha, de um único trabalho
dobro = a => 2 * a
console.log(dobro(Math.PI))

ola = () => 'Olá'

ola = _ => 'Olá2'//Possui um parâmetro

console.log(ola())
