import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import { Payment, MercadoPagoConfig } from 'mercadopago';
import { v4 as uuidv4 } from 'uuid';
import Product from './models/Product.js'; // Certifique-se de que o caminho está correto

// Configurar dotenv para carregar variáveis de ambiente
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json()); // Middleware para analisar JSON

// Conectar ao MongoDB Atlas
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('Conectado ao MongoDB Atlas');
  })
  .catch((error) => {
    console.error('Erro ao conectar ao MongoDB:', error);
  });

// Configurar MercadoPago Client
const client = new MercadoPagoConfig({
  accessToken: process.env.ACCESS_TOKEN, // Carrega o token do .env
});
const payment = new Payment(client);

// ENDPOINTS DE PRODUTOS

// Endpoint para buscar produto pelo código de barras
app.post('/product', async (req, res) => {
  const { barcode } = req.body;
  console.log('Código de barras recebido:', barcode);

  try {
    const product = await Product.findOne({ barcode: barcode.toString() });

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

// ENDPOINTS DE PAGAMENTOS

// Criar pagamento via PIX
app.post('/criar-pix', async (req, res) => {
  try {
    const { transaction_amount, description, paymentMethodId } = req.body;

    // Validação básica
    if (!transaction_amount || !description || !paymentMethodId) {
      return res.status(400).send('Todos os campos são obrigatórios.');
    }

    const idempotencyKey = uuidv4();

    // Criar pagamento
    const result = await payment.create({
      body: {
        transaction_amount: parseFloat(transaction_amount),
        description,
        payment_method_id: paymentMethodId,
        payer: {
          email: 'cliente@example.com',
        },
      },
      requestOptions: { idempotencyKey },
    });

    console.log('Pagamento criado com sucesso:', result);
    res.status(200).json(result);
  } catch (error) {
    console.error('Erro ao criar pagamento:', error);
    res.status(500).json({
      message: 'Erro ao criar pagamento',
      error: error.message,
      details: error,
    });
  }
});

// Consulta o status do pagamento pelo ID
app.get('/consultar-pagamento/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const response = await fetch(`https://api.mercadopago.com/v1/payments/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
      },
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Erro ao consultar pagamento');
    }

    res.status(200).json(data);
  } catch (error) {
    console.error('Erro ao consultar pagamento:', error);
    res.status(500).json({
      message: 'Erro ao consultar pagamento',
      error: error.message,
    });
  }
});

// INICIAR SERVIDOR
const PORT = process.env.PORT || 3000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
