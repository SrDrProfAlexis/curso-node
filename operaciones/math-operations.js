const fs = require('fs');

// let crearArchivos = (base) => {
//     return new Promise((resolve, reject) => {

//         if (!Number(base)) {
//             reject(`EL valor introducido ${base} no es un número`);
//             return;
//         }

//         let data = '';
//         //2 * 1 = 2
//         //2 * 2 = 4
//         //2 * 3 = 6
//         //...
//         for (let i = 1; i <= 10; i++) {
//             data += `${base} * ${i} = ${i*base}\n`;
//         }

//         fs.writeFile(`archivos/Tabla-${ base }.txt`, data, (err) => {
//             if (err)
//                 reject(err);
//             else
//                 resolve(`Tabla-${ base }.txt`)
//         });
//     })
// }

let multiplicar = (base) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`EL valor introducido ${base} no es un número`);
            return;
        }

        let data = '';
        //2 * 1 = 2
        //2 * 2 = 4
        //2 * 3 = 6
        //...
        for (let i = 1; i <= 10; i++) {
            data += `${base} * ${i} = ${i*base}\n`;
        }

        fs.writeFile(`archivos/Multiplica-${ base }.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`Multiplica-${ base }.txt`)
        });
    })
}

let sumar = (base) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`EL valor introducido ${base} no es un número`);
            return;
        }

        let data = '';
        //2 + 1 = 2
        //2 + 2 = 4
        //2 + 3 = 5
        //...
        for (let i = 1; i <= 10; i++) {
            data += `${base} + ${i} = ${Number(base) + i}\n`;
        }

        fs.writeFile(`archivos/Suma-${ base }.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`Suma-${ base }.txt`)
        });
    })
}

let restar = (base) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`EL valor introducido ${base} no es un número`);
            return;
        }

        let data = '';
        //2 * 1 = 2
        //2 * 2 = 4
        //2 * 3 = 6
        //...
        for (let i = 1; i <= 10; i++) {
            data += `${base} - ${i} = ${Number(base) - i}\n`;
        }

        fs.writeFile(`archivos/Resta-${ base }.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`Resta-${ base }.txt`)
        });
    })
}

let dividir = (base) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`EL valor introducido ${base} no es un número`);
            return;
        }

        let data = '';
        //2 * 1 = 2
        //2 * 2 = 4
        //2 * 3 = 6
        //...
        for (let i = 1; i <= 10; i++) {
            data += `${base} / ${i} = ${Number(base) / i}\n`;
        }

        fs.writeFile(`archivos/Dividir-${ base }.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`Dividir-${ base }.txt`)
        });
    })
}
module.exports = {
    //crearArchivos
    sumar,
    restar,
    multiplicar,
    dividir
}