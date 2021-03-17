'use strict';

const colors = require('colors');
const fs = require('fs');

const crearArchivo = async (base = 5, listar = false, hasta = 10) => {
  try {
    let salida = '';
    let consola = '';

    for (let i = 1; i <= hasta; i++) {
      salida += `${base} x ${i} = ${base * i}\n`;
      consola +=
        `${base} `.blue +
        `x `.yellow +
        `${i} `.blue +
        `= `.yellow +
        `${base * i}\n`.red;
    }
    if (listar) {
      console.log('=========================='.green);
      console.log(`Tabla del ${base}`.rainbow.bgWhite);
      console.log('=========================='.green);
      console.log(consola);
    }

    fs.writeFileSync(`tabla-${base}.txt`, salida);

    return `tabla-${base}.txt`;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  crearArchivo,
};
