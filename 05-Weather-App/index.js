require('dotenv').config();

const {
  leerInput,
  inquirerMenu,
  pausa,
  listarLugares,
} = require('./helpers/inquirer');
const Busquedas = require('./models/busquedas');

const main = async () => {
  const busquedas = new Busquedas();
  let opt = '';

  do {
    opt = await inquirerMenu();
    switch (opt) {
      case 1:
        // Mostrar mensaje
        const termino = await leerInput('Ciudad: ');

        // Buscar los lugares
        const lugares = await busquedas.ciudad(termino);

        // Seleccionar el lugar
        const id = await listarLugares(lugares);
        if (id === '0') continue;

        const lugarSel = lugares.find((l) => l.id === id);

        // Guardar en DB
        busquedas.agregarHistorial(lugarSel.nombre);

        // Clima
        const tempSel = await busquedas.climaLugar(lugarSel.lat, lugarSel.lng);

        //MOstrar resultados
        console.clear();
        console.log('\nInformación de la ciudad\n'.green);
        console.log('Ciudad:', lugarSel.nombre.green);
        console.log('Lat:', lugarSel.lat);
        console.log('Lon:', lugarSel.lng);
        console.log('Temperatura:', tempSel.temp);
        console.log('Mínima:', tempSel.min);
        console.log('Máxima:', tempSel.max);
        console.log('Descripción:', tempSel.desc.green);

        break;

      case 2:
        busquedas.historialCapitalizado.forEach((lugar, i) => {
          const idx = `${i + 1}.`.green;
          console.log(`${idx} ${lugar}`);
        });
        break;
    }

    if (opt !== 0) await pausa();
  } while (opt !== 0);
};

main();
