
var vm = new Vue({
  el: 'main',
  data: {
    listado: [
      { title: 'gi joe', fecha: 2014, imagen: 'img/gi-joe.jpg' },
      { title: 'el señor de los anillos', fecha: 2012, imagen: 'img/el-senor-de-los-anillos.jpg' },
      { title: 'transformers 5', fecha: 2017, imagen: 'img/transformers-5.jpg' },
      { title: 'pacific rim 2', fecha: 2018, imagen: 'img/pacific-rim-2.jpg' },
      { title: 'alpha', fecha: 2018, imagen: 'img/alpha.jpg' },
      { title: 'el extranjero', fecha: 2018, imagen: 'img/el-extranjero.jpg' },
      { title: 'increibles 2', fecha: 2018, imagen: 'img/increibles-2.jpg' },
      { title: 'kickboxer-2', fecha: 2018, imagen: 'img/kickboxer-2.jpg' },
      { title: 'tomb raider', fecha: 2018, imagen: 'img/tomb-raider.jpg' },
      { title: 'aniquilacion', fecha: 2018, imagen: 'img/aniquilacion.jpg' },
      { title: 'pacific rim', fecha: 2015, imagen: 'img/pacific-rim.jpg' },
      { title: 'acusada', fecha: 2017, imagen: 'img/acusada.jpg' },
      { title: 'gamer', fecha: 2012, imagen: 'img/gamer.jpg' },
      { title: 'looper', fecha: 2011, imagen: 'img/looper.jpg' },
      { title: 'mako mermaids', fecha: 2008, imagen: 'img/new.jpg' },
    ],
    search: '',
  },
  computed: {
    searchByTitle() {
      return this.listado.filter((search) => search.title.includes(this.search))
    },
  },
})