const {Client} = require('pg');

async function getConnection(){
  const client = new Client({
    host: 'localhost',
    port: 5432,
    user: 'usuario01',
    password: '1234',
    database: 'apiventas'
  });

  await client.connect();
  return client;
}

module.exports = getConnection;
