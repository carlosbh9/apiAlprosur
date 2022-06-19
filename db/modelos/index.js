const {VENTA_TABLE,VentasSchema,Venta} = require('./venta.model');

function setupModels(sequelize){
  Venta.init(VentasSchema,Venta.config(sequelize));
};
module.exports={setupModels};
