const fs = require('fs')

const caminho = __dirname +'/arquivo.json'

//sincrono
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)

// Assincrono
fs.readFile(caminho, 'utf-8', (err, conteudo) => {
    //transformando string em objeto
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}:${config.db.port}`)
})


//Esse vai ser executado antes do anterior, já que ele ainda está esperando o arquivo ser lido
const config = require('./arquivo.json')
console.log(config.db)

fs.readdir(__dirname, (err, arquivos) => {
    console.log('Conteúdo da pasta ....')
    console.log(arquivos)
})