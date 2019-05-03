const obj = {a: 1, b: 2, c: 3, soma() { return a + b + c } }
console.log(JSON.stringify(obj))//converte obj em json, a função não vai ser passado, é um formato textual.

console.log(JSON.parse('{ "a":1, "b": 2, "c": 3 }'))//formato json
console.log(JSON.parse('{ "a": 1, "b": "String Ronaldo", "c": true, "d": { "c.1": true}, "e": [] }'))