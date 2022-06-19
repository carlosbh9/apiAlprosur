const {Pool} = require('pg');

  const pool = new Pool({
    host: 'localhost',
    port: 5432,
    user: 'usuario01',
    password: '1234',
    database: 'apiventas'
  });



module.exports = pool;
