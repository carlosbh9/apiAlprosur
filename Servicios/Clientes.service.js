const boom = require("@hapi/boom");
const joi = require("@hapi/joi");
const boomManejaError = require('../middlewares/error.middleware');

const {models} = require('../lib/sequelize');
const cliente = require('../db/modelos');
//const pool = require('../lib/postgres.pool');

class ClientesService{

  constructor(){

  }
  //Nueva Venta
  async create(cliente){
    const nuevoCliente ={

      ...cliente
    }
    const {id ,ruc , dni, nombre,apellidoP, apellidoM,telefono,correo }= nuevoCliente;
      const salida = await models.cliente.create(nuevoCliente);
      return salida;
  };


  //Actualizar Venta
  async update(id, aux){
    const nuevoCliente ={
      id,
      ...aux
    }
    const {ruc , dni, nombre,apellidoP, apellidoM,telefono,correo }= nuevoCliente;
    const salida = await models.cliente.update(nuevoCliente,{where: {id}});
    return await models.cliente.findByPk(id);
  };

  //Actualización Parcial de una Venta
  async updateParcial(id, aux){
    const nuevoCliente ={
      ...aux
    }
    const salida = await models.cliente.update(nuevoCliente,{where: {id}});
    return await models.cliente.findByPk(id);
  };

  //Borrar venta
  async delete(id){
    const data = await models.cliente.destroy({where: {id}})
    return "operacion exitosa";
  };


  async findBy(id){
    const data = await models.cliente.findByPk(id);
    if (data!= null){
      return data;
    }else{
      throw boom.notFound('Error, ID no válida/encontrada');
    }
  };

  async findAll(){
    const data = await models.cliente.findAll();
    return data;
  };
}


module.exports = ClientesService

