const express = require('express');
const app = express(); 
const port = 3000;

const categorias = require('./categorias');
const cestas = require('./cestas');
const estoques = require('./estoques');
const filiais = require('./filiais');
const itensCesta = require('./itensCesta');
const itensPedido = require('./itensPedido');
const pedidos = require('./pedidos');
const produtos = require('./produtos');
const usuarios = require('./usuarios');


app.use(express.json());
app.use('/categorias', categorias);
app.use('/cestas', cestas);
app.use('/estoques', estoques);
app.use('/filiais', filiais);
app.use('/itensCesta', itensCesta);
app.use('/itensPedido', itensPedido);
app.use('/pedidos', pedidos);
app.use('/produtos', produtos);
app.use('/usuarios', usuarios);

app.listen(port, () => {
  console.log(`Servidor está rodando na porta: ${port}`);
});