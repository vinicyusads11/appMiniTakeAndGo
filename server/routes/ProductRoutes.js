const express = require('express');
const router = express.Router();
const ProductController = require('../controllers/ProductController');

// Rota para criar um novo produto
router.post('/', ProductController.createProduct);

// Rota para buscar um produto pelo ID
router.get('/:id', ProductController.getProduct);

// Rota para atualizar um produto pelo ID
router.put('/:id', ProductController.updateProduct);

// Rota para deletar um produto pelo ID
router.delete('/:id', ProductController.deleteProduct);

module.exports = router;
