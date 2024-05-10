const express = require('express');
const router = express.Router();
const OrderController = require('../controllers/OrderController');

// Rota para criar um novo pedido
router.post('/', OrderController.createPedido);

// Rota para buscar um pedido pelo ID
router.get('/:id', OrderController.getPedido);

// Rota para atualizar um pedido pelo ID
router.put('/:id', OrderController.updatePedido);

// Rota para deletar um pedido pelo ID
router.delete('/:id', OrderController.deletePedido);

module.exports = router;
