//let e const
{
    var a = 2
    let b = 3
    console.log(b)
}
console.log(a)
//console.log(b)  isso não vai funcionar, o let não está setado nesse escopo.

// Template String
const produto = 'Ipad'
console.log(`${produto} é caro!`)

//Destructuring

const [l, e, ...tras] = "Cod3r"
console.log(l, e, tras)

const [x, y] = [1, 2]
console.log(x, y)

const {idade: i, nome: n} = {nome: 'Ronaldo', idade: 31}
console.log(i, n)