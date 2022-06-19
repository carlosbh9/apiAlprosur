
const { Model, Sequelize, DataTypes } = require('sequelize');

const VENTA_TABLE = 'ventas';//nombre en la base de datos

///declarar los atributos de la tabla
const VentasSchema = {
  id: {
    primaryKey: true,
    type: DataTypes.SMALLINT,
    allowNull: true,
    autoIncrement: true
  },
  cliente: {
    allowNull: false,
    type: DataTypes.STRING,

  },

  fecha: {
    allowNull: false,
    type: DataTypes.DATE
  },
  monto:{
    allowNull: true,
    type: DataTypes.STRING,
    defaultValue: 0
  }

};

class Venta extends Model{
  static associate(){
 }
  static config(sequelize){
    return{
      sequelize,
      tableName :VENTA_TABLE,
      modelName: 'venta',
      timeStamps:false
  }
  }
};


module.exports={VENTA_TABLE,VentasSchema,Venta};
