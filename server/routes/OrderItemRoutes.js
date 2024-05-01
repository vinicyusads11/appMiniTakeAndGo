const express = require('express');
const router = express.Router();
const OrderItemController = require('../controllers/OrderItemController');

// Rota para criar um novo item de pedido
router.post('/', OrderItemController.createOrderItem);

// Rota para buscar um item de pedido pelo ID
router.get('/:id', OrderItemController.getOrderItem);

// Rota para atualizar um item de pedido pelo ID
router.put('/:id', OrderItemController.updateOrderItem);

// Rota para deletar um item de pedido pelo ID
router.delete('/:id', OrderItemController.deleteOrderItem);

module.exports = router;
