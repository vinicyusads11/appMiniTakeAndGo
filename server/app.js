const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Middlewares básicos
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Rotas
const ProductRoutes = require('./routes/ProductRoutes');
const UserRoutes = require('./routes/UserRoutes');
const BagItemRoutes = require('./routes/BagItemRoutes');
const BagRoutes = require('./routes/BagRoutes');
const BranchRoutes = require('./routes/BranchRoutes');
const OrderItemRoutes = require('./routes/OrderItemRoutes');
const OrderRoutes = require('./routes/OrderRoutes');
const StockRoutes = require('./routes/StockRoutes');

app.use('/api/products', ProductRoutes);
app.use('/api/users', UserRoutes);
app.use('/api/bagItem', BagItemRoutes)
app.use('/api/bag', BagRoutes);
app.use('/api/branch', BranchRoutes);
app.use('/api/orderItem', OrderItemRoutes);
app.use('/api/order', OrderRoutes);
app.use('/api/stock', StockRoutes);

// ... configure outras rotas

module.exports = app;
