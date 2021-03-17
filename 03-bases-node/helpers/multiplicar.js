'use strict';

const colors = require('colors');
const fs = require('fs');

const crearArchivo = async (base = 5, listar = false) => {
  try {
    let salida = '';

    for (let i = 1; i <= 10; i++) {
      salida +=
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
      console.log(salida);
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
