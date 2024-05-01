const express = require('express');
const router = express.Router();
const BagItemController = require('../controllers/BagItemController');

// Rota para criar um novo item na cesta
router.post('/', BagItemController.createBagItem);

// Rota para buscar um item da cesta pelo ID
router.get('/:id', BagItemController.getBagItem);

// Rota para atualizar um item da cesta pelo ID
router.put('/:id', BagItemController.updateBagItem);

// Rota para deletar um item da cesta pelo ID
router.delete('/:id', BagItemController.deleteBagItem);

module.exports = router;
