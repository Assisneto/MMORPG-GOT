/* importa a coneção com mongodb */

let mongo = require('mongodb');

 let connection = ()=>{
  console.log('banco de dados conectado');
  
  let db = new mongo.Db(
    'got',
    new mongo.Server(
      'localhost',
      27017,
      {}
    ),
    {}
  );
  return db
}
module.exports = ()=>{
  return connection;
}