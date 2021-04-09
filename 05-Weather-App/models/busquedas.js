const axios = require('axios');

class Busquedas {
  historial = ['Tegucigalpa', 'Madrid', 'San José'];

  constructor() {
    // TODO: leer DB si existe
  }

  async ciudad(lugar = '') {
    try {
      // peticion http
      const resp = await axios.get(
        'https://api.mapbox.com/geocoding/v5/mapbox.places/ottawa.json?access_token=pk.eyJ1IjoibWF0dGNvMjMiLCJhIjoiY2tuYWVoOG5jMG16eDJwbXJpMTl5bGhrMiJ9.CsxND9sZzMSTVR6vqK5lcQ&limit=5&language=es'
      );
      console.log(resp.data);

      return [];
    } catch (error) {
      return [];
    }

    return []; // retornar lugares
  }
}

module.exports = Busquedas;
