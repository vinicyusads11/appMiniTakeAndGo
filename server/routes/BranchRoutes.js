const express = require('express');
const router = express.Router();
const BranchController = require('../controllers/BranchController');

// Rota para criar uma nova filial
router.post('/', BranchController.createFilial);

// Rota para buscar uma filial pelo ID
router.get('/:id', BranchController.getFilial);

// Rota para atualizar uma filial pelo ID
router.put('/:id', BranchController.updateFilial);

// Rota para deletar uma filial pelo ID
router.delete('/:id', BranchController.deleteFilial);

module.exports = router;
