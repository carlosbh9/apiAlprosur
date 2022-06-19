const exs = require("express")
const rtr = exs.Router()


const ventaService = require("../../Servicios/Ventas.service")

const controlValidar = require('../../middlewares/validar.middleware');
const {crearVentaSchema,actualizarVentaSchema,findByVentaSchema} = require('../../schemas/venta.schema');


const svc = new ventaService

rtr.get('/', (req, res) =>{
  res.send("Ventana de ventas")
})

//Lista de ventas
rtr.get('/lista', async (req, res,next) =>{
  try {
    const productos = await svc.findAll()
  res.status(200).json(productos)
  } catch (error) {
    next(error)
  }

})

//Nuevo venta
rtr.post('/', controlValidar(crearVentaSchema, 'body'),async (req,res, next )=>{

  try {
    const body = req.body;
  const venta = await svc.create(body);
  res.status(201).json(venta);
  } catch (error) {
    next(error);
  }

})

//Actualizar venta
rtr.put('/:id', controlValidar(actualizarVentaSchema,'body'), (req,res, next) =>{
  try {
    const { id } = req.params;
  const aux = req.body;
  const venta = svc.update(id, aux);
  res.status(200).json(venta);
  } catch (error) {
    next(error);
  }

});

//Actualización Parcial de una venta
rtr.patch('/:id', controlValidar(actualizarVentaSchema,'body'),async (req,res, next) =>{
try {
      const { id } = req.params;
  const aux = req.body;
  const venta = await svc.updateParcial(id, aux);
  res.status(200).json(venta);
} catch (error) {
  next(error);
}
})

//Borrar venta
rtr.delete('/:id',controlValidar(findByVentaSchema, 'params') , async(req,res, next) =>{
  try {
     const { id } = req.params;
  const venta = await svc.delete(id);
  res.status(200).json(venta);
  } catch (error) {
    next(error);
  }


});

//Buscar venta
rtr.get('/:id', controlValidar(findByVentaSchema, 'params'), async(req,res ,next)=>{
  try {
    const { id } = req.params;
    const venta = await svc.findBy(id);
  res.status(200).json(venta);
  } catch (error) {
    next(error);
  }

})

//Exports
module.exports = rtr;
