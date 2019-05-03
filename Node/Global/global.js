//console.log(global)

global.MinhaApp = {
    saudacao() {
        return 'Estou em todos os lugares!'
    },
    nome: 'Sistema Legal'
}
//Assim não deixo o objeto ser alterado
global.MinhaApp2 = Object.freeze({
    saudacao() {
        return 'Estou de boas'
    },
    nome: 'Ronaldo'
})