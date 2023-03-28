var express = require('express');
var app = express();

app.set('view engine', 'ejs');

app.get('/',(req,res)=>{
res.render('pages/home');
});
app.get('/products',(req,res)=>{
res.render('pages/products');
});
app.get('/services',(req,res)=>{
res.render('pages/services');
});
app.get('/contact',(req,res)=>{
res.render('pages/contact');
});
app.get('/*',(req,res)=>{
res.render('pages/invalid');
});

app.listen(8080,()=>{
console.log('server started');
});