const exs = require("express")

//Imports
const ProductosRuta = require ("./Productos/Productos.route")
const LotesRuta = require ("./Lotes/Lotes.route")
const VentasRuta = require ("./Ventas/Ventas.route")

function routes(app){
  const ruta = exs.Router()
  app.use("/API/v1", ruta)
  ruta.use("/productos", ProductosRuta);
  ruta.use("/lotes", LotesRuta);
  ruta.use("/ventas", VentasRuta);
}

module.exports = routes;
