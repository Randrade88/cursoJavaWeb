//Operador ... rest(juntar)/spread(espalahar)
//Usar rest com parâmetro de função(ver revisao3)

//usar spread com objeto
const funcionario = { nome: 'Ronaldo', salario: 10500.00 }
const clone = { ativo: true, ...funcionario} // espalalhar os elementos do funcionarios na constante clone
console.log(clone)

//Usar spread com Array
const grupoA = ['João', 'Ronaldo', 'Gloria']
const grupoFinal = ['Maria', 'Rafaela', ...grupoA, 'teste']
console.log(grupoFinal)