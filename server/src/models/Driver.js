const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../db'); 


module.exports = (sequelize) => {

  sequelize.define('Driver', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};