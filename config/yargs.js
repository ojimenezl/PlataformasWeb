let opc = {
    id: {
        demand: true,
        alias: 'i'
    }

}


const argv = require('yargs')
    .command('id', 'Imprime en consola', opc)
    //.command('listar', 'Lista labase de datos', opc)
    .help()
    .argv;

module.exports = {
    argv
}