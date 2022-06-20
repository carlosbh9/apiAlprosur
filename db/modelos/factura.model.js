const { Model, Sequelize, DataTypes } = require("sequelize")

const FACTURA_TABLE = 'facturas'

const facturaSchema = {
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  codigo: {
    allowNull: false,
    unique: true,
    type: DataTypes.STRING
  },
  fechaEmision:{
    allowNull: false,
    type: DataTypes.DATE
  },
  montoTotal:{
    allowNull: false,
    type: DataTypes.DECIMAL
  },
  pedidoId: {
    allowNull: false,
    unique: true,
    type: DataTypes.INTEGER,
    references: {
      model: 'pedidos'
    },
    field: 'contienePedido'
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

class Factura extends Model{
  static associate(models){
    this.belongsTo(models.pedido, {
      as: 'pedido'
    })
    this.belongsTo(models.cliente, {
      as: 'cliente'
    })

  }

  static config(sequelize){
    return{
      sequelize,
      tableName: FACTURA_TABLE,
      modelName: 'md_factura',
      timestamps: false
    }
  }
}

module.exports = { FACTURA_TABLE, facturaSchema, Factura }
