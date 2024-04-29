const express = require('express');
const router = express.Router();
const stockController = require('../controllers/stockController'); // Ajuste o caminho conforme necessário

// Rota para modificar (adicionar ou atualizar) estoque de um produto
router.post('/', stockController.modifyStock);

// Rota para obter o estoque de uma filial específica
router.get('/:filial', stockController.getStockByBranch);

// Rota para remover itens do estoque
router.delete('/', stockController.removeFromStock);

module.exports = router;
