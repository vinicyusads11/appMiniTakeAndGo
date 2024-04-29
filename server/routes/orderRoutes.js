const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController'); // Ajuste o caminho conforme necessário

// Rota para criar um novo pedido
router.post('/', orderController.createOrder);

// Rota para obter todos os pedidos de um usuário específico
router.get('/user/:userId', orderController.getOrdersByUser);

// Rota para atualizar um pedido
router.put('/:id', orderController.updateOrder);

// Rota para deletar um pedido
router.delete('/:id', orderController.deleteOrder);

module.exports = router;
