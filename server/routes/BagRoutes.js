const express = require('express');
const router = express.Router();
const BagController = require('../controllers/BagController');

// Rota para criar uma nova cesta
router.post('/', BagController.createCesta);

// Rota para buscar uma cesta pelo ID
router.get('/:id', BagController.getCesta);

// Rota para atualizar uma cesta pelo ID
router.put('/:id', BagController.updateCesta);

// Rota para deletar uma cesta pelo ID
router.delete('/:id', BagController.deleteCesta);

module.exports = router;
