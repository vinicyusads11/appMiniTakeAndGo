const express = require('express');
const router = express.Router();
const OrderController = require('../controllers/OrderController');

// Rota para criar um novo pedido
router.post('/', OrderController.createOrder);

// Rota para buscar um pedido pelo ID
router.get('/:id', OrderController.getOrder);

// Rota para atualizar um pedido pelo ID
router.put('/:id', OrderController.updateOrder);

// Rota para deletar um pedido pelo ID
router.delete('/:id', OrderController.deleteOrder);

module.exports = router;
