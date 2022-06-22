const enjoi = require('@hapi/joi')

//ID
const id = enjoi.number()
//codigo
const dni = enjoi.string()
//nombre
const ruc = enjoi.string()
//detalles
const nombre  = enjoi.string()
//precio
const aPaterno = enjoi.string()
const aMaterno = enjoi.string()
const telefono = enjoi.string()
const correo = enjoi.string()

const crearClienteEsquema = enjoi.object({
  id: id.required(),
  dni: dni.required(),
  ruc: ruc.required(),
  nombre: nombre.required(),
  aPaterno: aPaterno.required(),
  aMaterno: aMaterno.required(),
  telefono: telefono.required(),
  correo: correo.required()
})

const actClienteEsquema = enjoi.object({
  id,
  dni,ruc,
  nombre,
  aPaterno,
  aMaterno,telefono,correo
})

const buscarClienteEsquema = enjoi.object({
  id: id.required()
})

module.exports = {crearClienteEsquema, actClienteEsquema, buscarClienteEsquema}
