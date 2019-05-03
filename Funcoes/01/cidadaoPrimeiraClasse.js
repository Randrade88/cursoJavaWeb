//Craindo um função de forma litera
//Obrigatório uso de chaves
function fun1 (){}


//armazenando função numa variável.
const fun2 = function () {}

//armezanando função num array(Não sei como poderia usar isso.)
const array = [function (a, b) {return a+b}, fun1, fun2]
console.log(array[0](2, 5))

//Podemos adicionar uma função num objeto.
 const obj = {}
 obj.falar = function (){return 'Opa'}
 console.log(obj.falar())

 //Como passa uma função como parêmetro.
 function run(fun){
     fun()//Executando a função que veio como parâmetro
 }

 run(function(){ console.log("Executando....")})


//Função pode retornar e conter uma outra função.
function soma(a ,b){
    return function(c){
        console.log( a+ b + c)
    }
}

soma(2, 5)(4)