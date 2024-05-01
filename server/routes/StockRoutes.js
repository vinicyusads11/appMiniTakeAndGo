const express = require('express');
const router = express.Router();
const StockController = require('../controllers/StockController');

// Rota para criar um novo registro de estoque
router.post('/', StockController.createStock);

// Rota para buscar um registro de estoque pelo ID
router.get('/:id', StockController.getStock);

// Rota para atualizar um registro de estoque pelo ID
router.put('/:id', StockController.updateStock);

// Rota para deletar um registro de estoque pelo ID
router.delete('/:id', StockController.deleteStock);

module.exports = router;
