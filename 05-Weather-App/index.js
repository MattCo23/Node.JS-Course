const { leerInput, inquirerMenu, pausa } = require('./helpers/inquirer');

const main = async () => {
  let opt = '';

  do {
    opt = inquirerMenu();
  } while (opt === 0);
};

main();
