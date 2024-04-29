const express = require('express');
const router = express.Router();
const branchController = require('../controllers/branchController'); // Ajuste o caminho conforme necessário

// Rota para criar uma nova filial
router.post('/', branchController.createBranch);

// Rota para obter todas as filiais
router.get('/', branchController.getAllBranches);

// Rota para obter uma filial específica pelo ID
router.get('/:id', branchController.getBranchById);

// Rota para atualizar uma filial
router.put('/:id', branchController.updateBranch);

// Rota para deletar uma filial
router.delete('/:id', branchController.deleteBranch);

module.exports = router;
