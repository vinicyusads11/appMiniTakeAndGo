require('dotenv').config(); // Carrega as variáveis de ambiente do .env

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Product = require('../src/models/Product');

const app = express();
app.use(cors());
app.use(express.json());

// Conectar ao MongoDB Atlas usando a variável de ambiente
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('Conectado ao MongoDB Atlas');
  })
  .catch((error) => {
    console.log('Erro ao conectar ao MongoDB:', error);
  });

// Endpoint para buscar produto pelo código de barras
app.post('/product', async (req, res) => {
  const { barcode } = req.body;
  console.log('Código de barras recebido:', barcode);
  console.log('Tipo do código de barras recebido:', typeof barcode);

  try {
    // Convertendo explicitamente para string
    const product = await Product.findOne({ barcode: barcode.toString() });
    console.log('Produto encontrado com valor fixo:', product);

    if (!product) {
      console.log('Produto não encontrado no banco de dados');
      return res.status(404).json({ message: 'Produto não encontrado' });
    }

    res.json(product); // Retorna o produto encontrado
  } catch (error) {
    console.error('Erro ao buscar produto:', error);
    res.status(500).json({ message: 'Erro no servidor', error });
  }
});

// Iniciar o servidor
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
