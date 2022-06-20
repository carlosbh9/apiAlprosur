const { Model, Sequelize, DataTypes } = require("sequelize")

const LOTES_TABLE = 'lotes'

const loteSchema = {
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  cantidad: {
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  fechaVenc: {
    allowNull: false,
    type: DataTypes.DATE,
  },

  //Relaciones
  productoId: {
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: 'productos'
    },
    field: 'contieneProducto'
  }
}

class Lote extends Model{
  static associate(models){
    this.belongsTo(models.producto, {
      as: 'producto'
    })
  }

  static config(sequelize){
    return{
      sequelize,
      tableName: LOTES_TABLE,
      modelName: 'lote',
      timestamps: false
    }
  }
}

module.exports = { LOTES_TABLE, loteSchema, Lote }
