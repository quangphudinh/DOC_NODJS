const express = require('express')
// const mongoose = require('mongoose');

const routes = require('./routes/client/index.route');

// mongoose.connect('mongodb://127.0.0.1:27017/products-test')
// const Product = mongoose.model('Product', {
//   title: String,
//   price: Number,
//   thumbnail: String
// });


const app = express()
const port = 3000


app.set('views', './views');
app.set('view engine', 'pug');

//Routes
routes(app);




app.listen(port , () => {
  console.log(`Example app listening at http://localhost:${port}`)
});