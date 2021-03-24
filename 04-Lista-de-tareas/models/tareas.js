const Tarea = require('./tarea');
require('colors');

class Tareas {
  _listado = {};

  get listadoArr() {
    const listado = [];
    Object.keys(this._listado).forEach((key) => {
      const tarea = this._listado[key];
      listado.push(tarea);
    });

    return listado;
  }

  constructor() {
    this._listado = {};
  }

  loadTareas(tareas = []) {
    tareas.forEach((tarea) => {
      this._listado[tarea.id] = tarea;
    });
  }

  crearTarea(desc = '') {
    const tarea = new Tarea(desc);

    this._listado[tarea.id] = tarea;
  }

  listadoCompleto() {
    const tasks = this.listadoArr;
    console.log();

    for (let i = 0; i < tasks.length; i++) {
      console.log(
        `${`${i + 1}.`.green} ${tasks[i].desc} :: ${
          tasks[i].completadoEn === null ? 'Pendiente'.red : 'Completada'.green
        }`
      );
    }
  }
}

module.exports = Tareas;
