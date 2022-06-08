const boom = require('@hapi/boom');

// module.exports= (schema) =>{
//   return async (req, res, next) => {
//    try{
//      await schema.validateAsync(req.body);
//      next();
//    }catch (error){
//      res.send(boom.badData(error))
//    }

//   };
// };

function controlaValidar(schema,objeto){
  return (req, res , next) => {
    const data = req[objeto];
    const {error} = schema.validate(data)

  if (error){
    throw boom.badRequest(error);
  }
  next();
}
}

module.exports=controlaValidar;
