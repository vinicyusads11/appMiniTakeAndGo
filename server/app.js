const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Middlewares básicos
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Rotas
const productRoutes = require('./routes/productRoutes');
const userRoutes = require('./routes/userRoutes');
const bagItemRoutes = require('./routes/bagItemRoutes');
const bagRoutes = require('./routes/bagRoutes');
const branchRoutes = require('./routes/branchRoutes');
const categoryRoutes = require('./routes/categoryRoutes');
const orderItemRoutes = require('./routes/categoryRoutes');
const orderRoutes = require('./routes/orderRoutes');
const stockRoutes = require('./routes/stockRoutes');

app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);
app.use('/api/bagItem', bagItemRoutes)
app.use('/api/bag', bagRoutes);
app.use('/api/branch', branchRoutes);
app.use('/api/category', categoryRoutes);
app.use('/api/orderItem', orderItemRoutes);
app.use('/api/order', orderRoutes);
app.use('/api/stock', stockRoutes);

// ... configure outras rotas

module.exports = app;
