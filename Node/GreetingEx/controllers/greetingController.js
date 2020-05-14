const greeting = require('../models/greeting');

const greet = (req, res) => {
  const nombre = req.query.nombre;
  res.render('greet', { message: greeting.greet(nombre) });
};

const goodbye = (req, res) => {
  const nombre = req.query.nombre;
  res.render('goodbye', { message: greeting.goodbye(nombre) });
};

module.exports = {
  greet,
  goodbye,
};
