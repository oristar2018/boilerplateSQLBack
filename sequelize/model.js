const Sequelize = require('sequelize');
const db = require('./config');
const bcrypt = require("bcryptjs");

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


auththree.beforeCreate(async function(user, options) {
  //console.log(this.password);
  try {
    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(user.password, salt);
    user.password = passwordHash;
    return user.password
  } catch (error) {
    console.log(error);
  }
});



module.exports = auththree;