const db = require('./database');
const Students = require('./models/students');
const Campuses = require('./models/campuses');

Students.belongsTo(Campuses);
Campuses.hasMany(Students);
module.exports = {
  db,
  Students,
  Campuses,
};
