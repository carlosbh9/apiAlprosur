const { rejects, throws } = require("assert")
const boom = require("@hapi/boom");
const joi = require("@hapi/joi");

class VentasService{
Ventas = []

  constructor(){
    this.Ventas = []
  }


  //Nueva Venta
  create(aux){
    const tamaño = this.Ventas.length
    if (tamaño == 0){
      aux.id = 1
    }else{
      aux.id = this.Ventas[tamaño-1].id + 1
    }
    this.Ventas.push(aux)

  }


  //Actualizar Venta
  async update(id, aux){
    const index = Number(id);
    const posicion = this.Ventas.findIndex(item => item.id === index);
    if(posicion === -1){
      throw new Error('Error, ID no válida/encontrada')
    }
    this.Ventas[posicion]= aux;
    return this.Ventas[posicion];

  }

  //Actualización Parcial de una Venta
  async updateParcial(id, aux){
    const index = Number(id)
    const posicion = this.Ventas.findIndex(item => item.id === index);
    console.log(posicion);
    if(posicion === -1){
      throw boom.notFound('Error, ID no válida/encontrada')
    }
    const vent = this.Ventas[posicion];
    this.Ventas[posicion]={
      ...vent,
      ...aux
    };

    return this.Ventas[posicion];

  }

  //Borrar venta
  delete(id){
    const index = Number(id)
    const posicion = this.Ventas.findIndex(item => item.id === index);
    if(posicion===-1){
      throw boom.notFound('Error, ID no válida/encontrada');
    }
    this.Ventas.splice(posicion,1);
    return {
      mensaja: 'operacion realizada',
      index
    }


    // if (index <= 0 || index > this.Ventas.length){
    //   throw boom.notFound('Error, ID no válida/encontrada')
    // }else{
    //   this.Ventas.splice(index-1,1)
    //   msj = "Venta borrada"

    // }
    // return msj
  }

  //BuscarVenta
  Buscarmsj(index){
    let msj = ""
    if (this.Ventas.length <= 0){
      msj = "La tabla de Ventas está vacía"
    }else if (index <= 0 || index > this.Ventas[this.Ventas.length-1].id){
      throw boom.notFound('Error, ID no válida/encontrada')
    }else{
      msj = "Venta Encontrada"
    }
    return msj
  }

  findBy(id){

    const index = Number(id)
    const venta = this.Ventas.find(item => item.id === index)
    if (!venta){
      throw boom.notFound('Error, ID no válida/encontrada');
    }if(!venta.esVisible){
      throw boom.forbidden('venta no encontrada');
    }
    return venta;
  }

  findAll(){
    return new Promise((resolve, rejects) =>{
      setTimeout(() => {
        resolve(this.Ventas);
      }, 5000);
    });

  }

  // findBy(id){
  //   return this.Ventas.find(item => item.id === id);
  // }
}

module.exports = VentasService
