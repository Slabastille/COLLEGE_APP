const Sequelize = require('sequelize');
const db = require('../database');

module.exports = db.define('campuses', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  imageUrl: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  address: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
    description: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
});
