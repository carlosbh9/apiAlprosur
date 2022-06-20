const { Model, Sequelize, DataTypes } = require("sequelize")

const DETALLEPEDIDO_TABLE = 'detallespedido'

const detallePedidoSchema = {
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  cantidad: {
    allowNull: false,
    type: DataTypes.INTEGER
  },
  monto:{
    allowNull: false,
    type: DataTypes.DECIMAL
  },
  pedidoId: {
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: 'pedidos'
    },
    field: 'pertenecePedido'
  }
}

class DetallePedido extends Model{
  static associate(models){
    this.belongsTo(models.pedido, {
      as: 'pedido'
    })
  }

  static config(sequelize){
    return{
      sequelize,
      tableName: DETALLEPEDIDO_TABLE,
      modelName: 'detallepedido',
      timestamps: false
    }
  }
}

module.exports = { DETALLEPEDIDO_TABLE, detallePedidoSchema, DetallePedido }
