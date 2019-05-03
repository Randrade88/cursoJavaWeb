const contadorA = require('./instanciaUnica')
const contadorB = require('./instanciaUnica')

//invocando a função factory, novas instancias
const contadorC = require('./instanciaNova')()
const contadorD = require('./instanciaNova')()

contadorA.inc()
contadorA.inc()
//ele faz cache do contadorA e vai mostrar o número 3 já que chamamos ele duas vezes
console.log(contadorA.valor, contadorB.valor)

contadorC.inc()
contadorC.inc()
console.log(contadorD.valor, contadorC.valor)