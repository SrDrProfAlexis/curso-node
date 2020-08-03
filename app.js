//requireds
//const fs = require('fs');

//const { sumar, restar, multiplicar, dividir } = require('./operaciones/math-operations');

// sumar(base)
//     .then(suma => console.log(`Archivo creado ${suma}`))
//     .catch(err => console.log(err))

// restar(base)
//     .then(resta => console.log(`Archivo creado ${resta}`))
//     .catch(err => console.log(err))

// multiplicar(base)
//     .then(mult => console.log(`Archivo creado ${mult}`))
//     .catch(err => console.log(err))

// dividir(base)
//     .then(div => console.log(`Archivo creado ${div}`))
//     .catch(err => console.log(err))

//-----npm init y darle enter a todo
//-----en descripcion puedes colocar lo que sea
//-----en author puedes colocar tu nombre
//------------------------------------------------------------------------
//------------------------------------------------------------------------

const { crearArchivos, listarTabla } = require('./multiplicar/multiplicar');
const argv = require('./configs/yargs').argv;
const colors = require('colors')

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite)
            .then(info => console.log(info))
            .catch(err => console.log(err))
        break;

    case 'crear':
        crearArchivos(argv.base, argv.limite)
            .then(archivo => console.log('Archivo creado ', colors.yellow(`${archivo}`)))
            .catch(err => console.log(err))
        break;

    default:
        console.log('Comando no reconocido');
}