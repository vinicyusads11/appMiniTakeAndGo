const express = require('express');
const router = express.Router();
const BagItemController = require('../controllers/BagItemController');

// Rota para criar um novo item na cesta
router.post('/', BagItemController.createItemCesta);

// Rota para buscar um item da cesta pelo ID
router.get('/:id', BagItemController.getItemCesta);

// Rota para atualizar um item da cesta pelo ID
router.put('/:id', BagItemController.updateItemCesta);

// Rota para deletar um item da cesta pelo ID
router.delete('/:id', BagItemController.deleteItemCesta);

module.exports = router;
