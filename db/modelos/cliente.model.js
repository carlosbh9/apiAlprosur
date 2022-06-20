const { Model, Sequelize, DataTypes } = require("sequelize")

const CLIENTE_TABLE = 'clientes'

const clienteSchema = {
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  ruc: {
    allowNull: true,
    unique: true,
    type: DataTypes.STRING
  },
  dni: {
    allowNull: false,
    unique: true,
    type: DataTypes.STRING
  },
  nombre:{
    allowNull: false,
    type: DataTypes.STRING
  },
  aPaterno:{
    allowNull: false,
    type: DataTypes.STRING
  },
  aMaterno:{
    allowNull: false,
    type: DataTypes.STRING
  },
  telefono:{
    allowNull: false,
    type: DataTypes.STRING
  },
  correo:{
    allowNull: false,
    type: DataTypes.STRING
  }
}

class Cliente extends Model{
  static associate(){

  }

  static config(sequelize){
    return{
      sequelize,
      tableName: CLIENTE_TABLE,
      modelName: 'cliente',
      timestamps: false
    }
  }
}

module.exports = { CLIENTE_TABLE, clienteSchema, Cliente }
