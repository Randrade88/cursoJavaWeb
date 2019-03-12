const pessoa = {
    saudacao: 'Bom dia!',
    falar() {
        console.log(this.saudacao)
    }
}

pessoa.falar()
const falar = pessoa.falar
falar() //Vai dar conflito de paradigmas: funcional e OO

//Bind: Serve para amarrar o objs para ser o dono da execução daquele metodo, assim facilitando o uso do this.

const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa();