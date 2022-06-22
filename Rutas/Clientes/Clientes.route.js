const exs = require("express")
const rtr = exs.Router()


const clienteService = require("../../Servicios/Clientes.service")

const controlValidar = require('../../middlewares/validar.middleware');
const {crearClienteEsquema, actClienteEsquema, buscarClienteEsquema} = require('../../schemas/cliente.schema');


const svc = new clienteService

rtr.get('/', (req, res) =>{
  res.send("Ventana de Clientes")
})

//Lista de ventas
rtr.get('/lista', async (req, res,next) =>{
  try {
    const clientes = await svc.findAll()
  res.status(200).json(clientes)
  } catch (error) {
    next(error)
  }

})


rtr.post('/', controlValidar(crearClienteEsquema, 'body'),async (req,res, next )=>{

  try {
    const body = req.body;
  const cliente = await svc.create(body);
  res.status(201).json(cliente);
  } catch (error) {
    next(error);
  }

})

//Actualizar venta
rtr.put('/:id', controlValidar(actClienteEsquema,'body'), (req,res, next) =>{
  try {
    const { id } = req.params;
  const aux = req.body;
  const cliente = svc.update(id, aux);
  res.status(200).json(cliente);
  } catch (error) {
    next(error);
  }

});

//Actualización Parcial de una venta
rtr.patch('/:id', controlValidar(actClienteEsquema,'body'),async (req,res, next) =>{
try {
      const { id } = req.params;
  const aux = req.body;
  const cliente = await svc.updateParcial(id, aux);
  res.status(200).json(cliente);
} catch (error) {
  next(error);
}
})

//Borrar venta
rtr.delete('/:id',controlValidar(buscarClienteEsquema, 'params') , async(req,res, next) =>{
  try {
     const { id } = req.params;
  const cliente = await svc.delete(id);
  res.status(200).json(cliente);
  } catch (error) {
    next(error);
  }


});

//Buscar venta
rtr.get('/:id', controlValidar(buscarClienteEsquema, 'params'), async(req,res ,next)=>{
  try {
    const { id } = req.params;
    const cliente = await svc.findBy(id);
  res.status(200).json(cliente);
  } catch (error) {
    next(error);
  }

})

//Exports
module.exports = rtr;
