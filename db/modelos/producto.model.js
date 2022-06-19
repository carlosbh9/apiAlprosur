const DataTypes = require('faker/lib/datatype');
const { Model, Sequelize, DataTypes } = require('sequelize');

const PRODUCTO_TABLE = 'productos';//nombre en la base de datos

///declarar los atributos de la tabla
const ProductosSchema = {
  id: {
    primaryKey: true,
    type: DataTypes.UUID
  },
  nombre: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true
  },
  precio: {
    allowNull: false,
    type: DataTypes.DECIMAL
  },
  imagen:{
    allowNull: true,
    type: DataTypes.STRING,
  },
  esVisible:{
    allowNull: false,
    type: DataTypes.BOOLEAN
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATA,
    field: 'created_at',
    defaultValue: Sequelize.NOW
  }
};

class Producto extends Model{
  static associate(){
 }
  static config(sequelize){
    return{
      sequelize,
      tableName :PRODUCTO_TABLE,
     modelName: 'producto',
      timeStamps:false
  }
  }
};

module.exports={PRODUCTO_TABLE,ProductosSchema,Producto};
