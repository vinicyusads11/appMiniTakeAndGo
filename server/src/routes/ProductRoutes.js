const express = require('express');
const router = express.Router();
const ProductController = require('../controllers/ProductController');

// Rota para criar um novo produto
router.post('/', ProductController.createProduto);

// Rota para buscar um produto pelo ID
router.get('/:id', ProductController.getProduto);

// Rota para atualizar um produto pelo ID
router.put('/:id', ProductController.updateProduto);

// Rota para deletar um produto pelo ID
router.delete('/:id', ProductController.deleteProduto);

module.exports = router;
