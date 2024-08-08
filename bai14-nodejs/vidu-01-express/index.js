const express = require('express')
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/products-test')
const Product = mongoose.model('Product', {
  title: String,
  price: Number,
  thumbnail: String
});


const app = express()
const port = 3000


app.set('views', './views');
app.set('view engine', 'pug');
//publish file
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('index.pug',{
    titlePage : "Trang Chu",
    message : "Xin chao cac ban"
  })
})

app.get('/products',async (req, res) => {
  const products = await Product.find({});
  console.log(products);
  res.render("products.pug", {
    titlePage : "Trang SP",
    products : products
  })
})

app.get('/contact', (req, res) => {
  res.render("contact.pug", {
    titlePage : "Trang LH",
    message : "Lien He voi chung TOi"
  })
})


app.get('/blog', (req, res) => {
  res.send(`<h1>Tran Blog!</h1>`)
})

app.get('/about', (req, res) => {
  res.send(`<h1>Tran About!</h1>`)
})


app.listen(port , () => {
  console.log(`Example app listening at http://localhost:${port}`)
});