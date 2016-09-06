var Sequelize = require('sequelize');
var db = require('../config/database_config.js');

var Student = db.define('Student', {
  first: Sequelize.STRING,
  last: Sequelize.STRING
});

module.exports = Student;