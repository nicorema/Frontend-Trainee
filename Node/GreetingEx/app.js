const express = require('express');
const exphbs = require('express-handlebars');
const initRoutes = require('./config/routes');

const app = express();

app.use(express.static('public'));

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');


initRoutes(app);

app.listen(8000, () => {
  console.log('Waiting Request');
});
