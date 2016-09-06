var Users = require('../users/userController.js');
var Classes = require('../users/classController.js');
var Assignments = require('../users/assignmentController.js');
var Students = require('../users/studentController.js');

module.exports = function (app, express) {

  // post new users / classes / assignments

  app.post('/api/users', Users.addOne);
  app.post('/api/classes', Classes.addOne);
  app.post('/api/assignmnets', Assignments.addOne);

  // modify existing users / classes / assignments

  app.put('/api/users/:id', Users.modOne);
  app.put('/api/classes/:id', Classes.modOne);
  app.put('/api/assignmnets/:id', Assignments.modOne);

  // get all classes / assignmnets / students

  app.get('/api/classes', Classes.getAll);
  app.get('/api/assignmnets', Assignments.getAll);
  app.get('/api/students', Students.getAll);

  // get one user / class / assignment / student

  app.get('/api/users/:id', Users.getOne);
  app.get('/api/classes/:id', Classes.getOne);
  app.get('/api/assignmnets/:id', Assignments.getOne);
  app.get('/api/students/:id', Students.getOne);

  // get assignments / students using class id

  app.get('/api/assignmnets/class/:id', Assignments.getClass);
  app.get('/api/students/class/:id', Students.getClass);

};