const { rejects, throws } = require("assert")
const boom = require("@hapi/boom");
const joi = require("@hapi/joi");
const boomManejaError = require('../middlewares/error.middleware');

const {models} = require('../lib/sequelize');
const venta = require('../db/modelos');


class VentasService{

  constructor(){

  }
  //Nueva Venta
  async create(venta){
    const nuevaVenta ={
      ...venta
    }
      const {cliente , fecha, monto,clienteId }= nuevaVenta;
      const salida = await models.venta.create(nuevaVenta);
      return salida;
  };


  //Actualizar Venta
  async update(id, aux){
    const nuevaVenta ={
      ...aux
    }
    const {cliente , fecha, monto }= nuevaVenta;
    const salida = await models.venta.update(nuevaVenta,{where: {id}});
    return await models.venta.findByPk(id);
  };

  //Actualización Parcial de una Venta
  async updateParcial(id, aux){
    const nuevaVenta ={
      ...aux
    }
    const salida = await models.venta.update(nuevaVenta,{where: {id}});
    return await models.venta.findByPk(id);
  };

  //Borrar venta
  async delete(id){
    const index = Number(id);
    const data = await models.venta.destroy({where: {id}})
  };


  async findBy(id){
    const data = await models.venta.findByPk(id);
    if (data!= null){
      return data;
    }else{
      throw boom.notFound('Error, ID no válida/encontrada');
    }
  };

  async findAll(){
    const data = await models.venta.findAll({order: [
      ['createdAt', 'ASC'],
    ]});
    return data;
  };
}


module.exports = VentasService
