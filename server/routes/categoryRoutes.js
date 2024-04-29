const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/categoryController'); // Ajuste o caminho conforme necessário

// Rota para criar uma nova categoria
router.post('/', categoryController.createCategory);

// Rota para obter todas as categorias
router.get('/', categoryController.getAllCategories);

// Rota para obter uma categoria específica pelo ID
router.get('/:id', categoryController.getCategoryById);

// Rota para atualizar uma categoria
router.put('/:id', categoryController.updateCategory);

// Rota para deletar uma categoria
router.delete('/:id', categoryController.deleteCategory);

module.exports = router;
