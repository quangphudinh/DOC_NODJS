const express = require('express')
const methodOverride = require('method-override')
const bodyParser = require('body-parser')

require('dotenv').config();

const database = require('./config/database');

const systemConfig = require('./config/system');

const routes = require('./routes/client/index.route');
const routesAdmin = require('./routes/admin/index.route');

database.connect();


const app = express()
const port = process.env.PORT //lay PORT = 3000

app.use(methodOverride('_method'));

//parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

//publish file
app.use(express.static('public'));

app.set('views', './views');
app.set('view engine', 'pug');

// Variables Globales
app.locals.prefixAdmin = systemConfig.prefixAdmin;

//Routes
routes(app);
routesAdmin(app);




app.listen(port , () => {
  console.log(`Example app listening at http://localhost:${port}`)
});