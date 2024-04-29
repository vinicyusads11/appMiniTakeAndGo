const express = require('express');
const router = express.Router();
const orderItemController = require('../controllers/orderItemController'); // Ajuste o caminho conforme necessário

// Rota para adicionar um novo item a um pedido
router.post('/', orderItemController.createOrderItem);

// Rota para atualizar um item de pedido
router.put('/:id', orderItemController.updateOrderItem);

// Rota para deletar um item de pedido
router.delete('/:id', orderItemController.deleteOrderItem);

module.exports = router;
