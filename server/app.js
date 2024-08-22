const express = require('express');
require('dotenv').config(); // Carregar variáveis de ambiente no início
const connectDB = require('./database/connection/db'); // Conexão com o banco de dados

const app = express();

// Conecta ao banco de dados
connectDB();

// Middlewares para parsear o corpo das requisições
app.use(express.json()); // Para parsear requisições com corpos em JSON
app.use(express.urlencoded({ extended: true })); // Para parsear requisições com corpos em URL-encoded

// Importação e uso das rotas
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
app.use('/api/bagItem', BagItemRoutes);
app.use('/api/bag', BagRoutes);
app.use('/api/branch', BranchRoutes);
app.use('/api/orderItem', OrderItemRoutes);
app.use('/api/order', OrderRoutes);
app.use('/api/stock', StockRoutes);

// Middleware para capturar 404 - Not Found
app.use((req, res, next) => {
    res.status(404).send("Desculpa, não conseguimos achar o que procura!");
});

// Middleware de tratamento de erro genérico
app.use((err, req, res, next) => {
    console.error(err.stack); // Loga o erro no console do servidor
    res.status(500).send('Algo está errado!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));

module.exports = app;