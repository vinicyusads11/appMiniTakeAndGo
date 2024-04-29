const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Middlewares básicos
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Rotas
const productRoutes = require('./routes/productRoutes');
const userRoutes = require('./routes/userRoutes');
// ... outras rotas

app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);
// ... configure outras rotas

module.exports = app;
