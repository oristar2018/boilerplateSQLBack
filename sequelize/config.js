const Sequelize = require('sequelize');
/*const db = new Sequelize('auththree', 'postgres', '123456', {
  dialect: 'postgres',

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  // http://docs.sequelizejs.com/manual/tutorial/querying.html#operators
  operatorsAliases: false
});*/

const db = new Sequelize('postgres://postgres:lifeiscool@postgres:5432/postgres');


module.exports = db;