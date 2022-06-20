const { Model, Sequelize, DataTypes } = require("sequelize")

const PEDIDO_TABLE = 'pedidos'

const pedidoSchema = {
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  codigo: {
    allowNull: false,
    unique: true,
    type: DataTypes.STRING
  },
  precio: {
    allowNull: false,
    type: DataTypes.DECIMAL
  },
  fechaEmision:{
    allowNull: false,
    type: DataTypes.DATE
  },
  fechaVencimiento:{
    allowNull: false,
    type: DataTypes.DATE
  },
  estado:{
    allowNull: true,
    type: DataTypes.STRING
  },
  clienteId: {
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: 'clientes'
    },
    field: 'perteneceCliente'
  }
}

class Pedido extends Model{
  static associate(models){
    this.belongsTo(models.cliente, {
      as: 'cliente'
    })
  }

  static config(sequelize){
    return{
      sequelize,
      tableName: PEDIDO_TABLE,
      modelName: 'pedido',
      timestamps: false
    }
  }
}

module.exports = { PEDIDO_TABLE, pedidoSchema, Pedido }
