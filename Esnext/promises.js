import { cursorTo } from "readline";

function falarDepoisDe(segundos, frase) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(frase)
        }, segundos * 1000)
    })
}

falarDepoisDe(1, 'teste')
    .then(frase => frase.concat('?!?'))
    .then(outraFrase => console.log(outraFrase))
    .catch(e => console.log(e))
    files.cod3r.com.br/curso-js/turmaA.json