const Sequelize = require('sequelize');
const db = require('../database');

module.exports = db.define('students', {
  firstName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  email: {
    type: Sequelize.STRING,
    validate: {
      isEmail: true,
      notEmpty: true,
    },
  },
  imageUrl: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  gpa: {
    type: Sequelize.DECIMAL(),
    validate: {
      // min: 0,
      max: 4,
    },
  },
});
