const exs = require("express");
const routes = require('./Rutas')

const { use } = require("./Rutas/Lotes/Lotes.route");

const {mostrarError, manejarError}= require('./middlewares/error.middleware');
const apk = exs();
apk.use(exs.json());

const puerto = 3500;
routes(apk);



apk.use(mostrarError);
apk.use(manejarError);

apk.listen(puerto, () =>{
  console.log("puerto " + puerto + " activo")
});

