const fs = require('fs');
const colors = require('colors')

let listarTabla = (base, limite) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`EL valor introducido ${base} no es un número`);
            return;
        }

        if (!Number(limite)) {
            reject(`EL valor introducido ${limite} no es un número`);
            return;
        }

        let data = '';

        console.log('=================================='.trap);
        console.log(`======== TABLA DE ${base} HASTA ${limite} ======`.rainbow);
        console.log('=================================='.rainbow);
        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${i*base}\n`;
        }

        resolve(data);
    })
}

let crearArchivos = (base, limite) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`EL valor introducido ${base} no es un número`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${i*base}\n`;
        }

        fs.writeFile(`archivos/Tabla-${ base }.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`Tabla-${ base }.txt`)
        });
    })
}

module.exports = {
    crearArchivos,
    listarTabla
}