const express = require('express');
const router = express.Router();
const BranchController = require('../controllers/BranchController');

// Rota para criar uma nova filial
router.post('/', BranchController.createBranch);

// Rota para buscar uma filial pelo ID
router.get('/:id', BranchController.getBranch);

// Rota para atualizar uma filial pelo ID
router.put('/:id', BranchController.updateBranch);

// Rota para deletar uma filial pelo ID
router.delete('/:id', BranchController.deleteBranch);

module.exports = router;
