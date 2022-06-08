const Joi = require('@hapi/joi');

const id = Joi.string();
const cliente = Joi.string();
const fecha = Joi.string();
const monto = Joi.number();
const crearVentaSchema = Joi.object({
  id: id.required(),
  cliente: cliente.required(),
  fecha: fecha.required(),
  monto: monto.required()
});

const actualizarVentaSchema = Joi.object({
  id: id.required(),
  cliente ,
  fecha,
  monto
});

const findByVentaSchema = Joi.object({
  id: id.required()

});

module.exports={crearVentaSchema,actualizarVentaSchema,findByVentaSchema};

