const express = require('express');
const router = express.Router();
const bagItemController = require('../controllers/bagItemController'); // Ajuste o caminho conforme necessário

// Rota para criar um novo item na cesta
router.post('/', bagItemController.createBagItem);

// Rota para atualizar um item existente na cesta
router.put('/:id', bagItemController.updateBagItem);

// Rota para deletar um item da cesta
router.delete('/:id', bagItemController.deleteBagItem);

module.exports = router;
