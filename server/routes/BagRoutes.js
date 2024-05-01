const express = require('express');
const router = express.Router();
const BagController = require('../controllers/BagController');

// Rota para criar uma nova cesta
router.post('/', BagController.createBag);

// Rota para buscar uma cesta pelo ID
router.get('/:id', BagController.getBag);

// Rota para atualizar uma cesta pelo ID
router.put('/:id', BagController.updateBag);

// Rota para deletar uma cesta pelo ID
router.delete('/:id', BagController.deleteBag);

module.exports = router;
