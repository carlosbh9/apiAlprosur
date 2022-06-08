const exs = require("express")
const rtr = exs.Router()

const productoService = require("../../Servicios/Productos.service");
const controlValidarDato = require("../../middlewares/validar.middleware")
const {crearProductoEsquema, actProductoEsquema, buscarProductoEsquema } = require("../../schemas/producto.schema")
const svc = new productoService

rtr.get('/', (req, res) =>{
  res.send("Ventana de Productos")
})

//Lista de Productos
rtr.get('/lista', (req, res) =>{
  res.status(200).json(svc.Lista())
})

//Nuevo Producto
rtr.post('/', controlValidarDato(crearProductoEsquema, 'body') ,(req,res)=>{
  const aux = req.body
  svc.Nuevo(aux)

  res.status(201).json({
    mensaje: "Producto agregado",
    Datos: aux
  })
})

//Actualizar Producto
rtr.put('/:id',controlValidarDato(actProductoEsquema, 'body') ,async (req,res,next) =>{
 try {
   const { id } = req.params
  const aux = req.body
  const msj = await svc.Actualizar(id, aux)
  res.json({
    mensaje: msj,
    datosInsertados: aux
  })
 } catch (error) {
   next(error)
 }

})

//Actualización Parcial de Producto
rtr.patch('/:id', (req,res) =>{
  const { id } = req.params
  const aux = req.body
  res.json({
    mensaje: svc.ActualizarParcial(id, aux),
    datosInsertados: aux
  })
})

//Borrar Producto
rtr.delete('/:id', (req,res) =>{
  const { id } = req.params

  res.json({
    mensaje: svc.Borrar(id),
  })
})

//Buscar Producto
rtr.get('/:id', (req,res)=>{
  const { id } = req.params

  res.status(200).json({
    mensaje: svc.Buscarmsj(id),
    datos: svc.Buscar(id)
  })
})

//Exports
module.exports = rtr;
