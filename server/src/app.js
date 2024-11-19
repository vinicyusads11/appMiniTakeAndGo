import express from 'express';
import { Payment, MercadoPagoConfig } from 'mercadopago';
import { v4 as uuidv4 } from 'uuid';
import dotenv from 'dotenv';

// Configurar dotenv para carregar variáveis de ambiente
dotenv.config();

// Step 1: Configure MercadoPago Client
const client = new MercadoPagoConfig({
  accessToken: process.env.ACCESS_TOKEN, // Carrega o token do .env
});

const payment = new Payment(client);

// Step 2: Create Express App
const app = express();
app.use(express.json()); // Middleware to parse JSON

// Step 3: Criar pagamento via PIX
app.post('/criar-pix', async (req, res) => {
  try {
    const { transaction_amount, description, paymentMethodId} = req.body;

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
        Authorization: `Bearer ${process.env.ACCESS_TOKEN}`, // Certifique-se de que o token está correto
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


// Inicia o servidor
const PORT = 3000; 
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});