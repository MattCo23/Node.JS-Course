const { leerInput, inquirerMenu, pausa } = require('./helpers/inquirer');
const Busquedas = require('./models/busquedas');

const main = async () => {
  const busquedas = new Busquedas();
  let opt = '';

  do {
    opt = await inquirerMenu();
    switch (opt) {
      case 1:
        // Mostrar mensaje
        const lugar = await leerInput('Ciudad: ');
        console.log(lugar);

        // Buscar los lugares

        // Seleccionar el lugar

        // Clima

        //MOstrar resultados
        console.log('\nInformación de la ciudad\n'.green);
        console.log('Ciudad:');
        console.log('Lat:');
        console.log('Lon:');
        console.log('Temperatura:');
        console.log('Mínima:');
        console.log('Máxima:');

        break;
    }

    if (opt !== 0) await pausa();
  } while (opt !== 0);
};

main();
