const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');

// Rota para criar um novo usuário
router.post('/', UserController.createUsuario);

// Rota para buscar um usuário pelo ID
router.get('/:id', UserController.getUsuario);

// Rota para atualizar um usuário pelo ID
router.put('/:id', UserController.updateUsuario);

// Rota para deletar um usuário pelo ID
router.delete('/:id', UserController.deleteUsuario);

module.exports = router;
