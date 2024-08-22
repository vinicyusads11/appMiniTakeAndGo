const express = require('express');
const router = express.Router();
const StockController = require('../controllers/StockController');

// Rota para criar um novo registro de estoque
router.post('/', StockController.createEstoque);

// Rota para buscar um registro de estoque pelo ID
router.get('/:id', StockController.getEstoque);

// Rota para atualizar um registro de estoque pelo ID
router.put('/:id', StockController.updateEstoque);

// Rota para deletar um registro de estoque pelo ID
router.delete('/:id', StockController.deleteEstoque);

module.exports = router;
