const Sequelize = require('sequelize');
const db = require('./config');

const auththree = db.define('auththree', {

  name: {
    type: Sequelize.STRING
  },

  firstName: {
    type: Sequelize.STRING
  },

  userId: {
    type: Sequelize.INTEGER
  },

  password: {
    type: Sequelize.STRING
  }






}, {timestamps: false});

module.exports = auththree;