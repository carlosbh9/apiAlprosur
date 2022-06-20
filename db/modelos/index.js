const { VENTA_TABLE,VentasSchema,Venta} = require('./venta.model');
const { LOTES_TABLE, loteSchema, Lote } = require("./lote.model")
const { TB_PRODUCTO, productoSchema, Producto } = require("./producto.model")
const { CLIENTE_TABLE, clienteSchema, Cliente } = require("./cliente.model")
const { FACTURA_TABLE, facturaSchema, Factura } = require("./factura.model")
const { PEDIDO_TABLE, pedidoSchema, Pedido } = require("./pedido.model")
const { DETALLEPEDIDO_TABLE, detallePedidoSchema, DetallePedido } = require("./detallePedido.model")
const { DETALLEATENCION_TABLE, detalleAtencionSchema, DetalleAtencion } = require("./detalleAtencion.model")

function setupModels(sequelize){
  Venta.init(VentasSchema,Venta.config(sequelize));
  Producto.init(productoSchema, Producto.config(sequelize));
  Lote.init(loteSchema, Lote.config(sequelize));
  Cliente.init(clienteSchema, Cliente.config(sequelize));
  Factura.init(facturaSchema, Factura.config(sequelize));
  Pedido.init(pedidoSchema, Pedido.config(sequelize));
  DetallePedido.init(detallePedidoSchema, DetallePedido.config(sequelize));
  DetalleAtencion.init(detalleAtencionSchema, DetalleAtencion.config(sequelize));

  Lote.associate(sequelize.models)
  DetalleAtencion.associate(sequelize.models)
  DetallePedido.associate(sequelize.models)
  Factura.associate(sequelize.models)
  Pedido.associate(sequelize.models)
};
module.exports={setupModels};
