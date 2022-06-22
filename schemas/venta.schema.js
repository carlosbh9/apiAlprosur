const Joi = require('@hapi/joi');
const { required } = require('@hapi/joi/lib/base');

const id = Joi.number();
const cliente = Joi.string();
const fecha = Joi.date();
const monto = Joi.number();
const clienteId = Joi.number()
const crearVentaSchema = Joi.object({

  cliente: cliente.required(),
  fecha: fecha.required(),
  monto: monto.required(),
  clienteId: clienteId.required()
});

const actualizarVentaSchema = Joi.object({

  cliente ,
  fecha,
  monto
});

const findByVentaSchema = Joi.object({
  id: id.required()

});

module.exports={crearVentaSchema,actualizarVentaSchema,findByVentaSchema};


