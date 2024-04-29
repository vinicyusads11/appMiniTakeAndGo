const express = require('express');
const router = express.Router();
const bagController = require('../controllers/bagController');  // Ajuste o caminho conforme necessário

// Rota para criar uma nova cesta
router.post('/', bagController.createBag);

// Rota para obter a cesta de um usuário específico
router.get('/:userId', bagController.getBagByUser);

// Rota para adicionar um item à cesta
router.post('/:bagId/items', bagController.addItemToBag);

// Rota para remover um item da cesta
router.delete('/:bagId/items/:itemId', bagController.removeItemFromBag);

// Rota para atualizar uma cesta
router.put('/:bagId', bagController.updateBag);

// Rota para deletar uma cesta
router.delete('/:bagId', bagController.deleteBag);

module.exports = router;
