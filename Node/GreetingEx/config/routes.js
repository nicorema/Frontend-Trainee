const greetController = require('../controllers/greetingController')

module.exports = app => {
  app.get('/greet', greetController.greet);
  app.get('/goodbye', greetController.goodbye);
};
