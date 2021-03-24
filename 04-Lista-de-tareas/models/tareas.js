'use strict';

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
      const idx = `${i + 1}`.green;
      const { desc, completadoEn } = tasks[i];
      console.log(
        `${idx} ${desc} :: ${
          completadoEn === null ? 'Pendiente'.red : 'Completada'.green
        }`
      );
    }
  }

  listarPendientesCompletadas(completadas = true) {
    const tasks = this.listadoArr;
    let contador = 0;
    console.log();

    tasks.forEach((task) => {
      const { desc, completadoEn } = task;

      if (completadas && completadoEn) {
        contador += 1;
        console.log(
          `${(contador + '.').green} ${desc} :: ${
            completadoEn.toString().green
          }`
        );
      } else if (!completadas && !completadoEn) {
        contador += 1;
        console.log(`${(contador + '.').green} ${desc} :: ${'Pendiente'.red}`);
      }
    });
  }
}

module.exports = Tareas;
