const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        //demand: true,
        alias: 'l',
        default: 10
    }
}

const argv = require('yargs')
    .command('listar', 'Mostrar tabla de multiplicar', opts)
    .command('crear', 'Crear tabla de multiplicar', opts)
    .help()
    .argv;

module.exports = {
    argv
}