const { Model, Sequelize, DataTypes } = require("sequelize")

const DETALLEATENCION_TABLE = 'detallesatencion'

const detalleAtencionSchema = {
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  cantidad: {
    allowNull: false,
    type: DataTypes.INTEGER
  },
  loteId: {
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: 'lotes'
    },
    field: 'provieneDeLote'
  },
  detallepedidoId: {
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: 'detallespedido'
    },
    field: 'indluidoEnDetalleAtencion'
  }
}

class DetalleAtencion extends Model{
  static associate(models){
    this.belongsTo(models.lote, {
      as: 'lote'
    })
    this.belongsTo(models.detallepedido, {
      as: 'detallepedido'
    })
  }

  static config(sequelize){
    return{
      sequelize,
      tableName: DETALLEATENCION_TABLE,
      modelName: 'detalleatencion',
      timestamps: false
    }
  }
}

module.exports = { DETALLEATENCION_TABLE, detalleAtencionSchema, DetalleAtencion }
