const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');

// Rota para criar um novo usuário
router.post('/', UserController.createUser);

// Rota para buscar um usuário pelo ID
router.get('/:id', UserController.getUser);

// Rota para atualizar um usuário pelo ID
router.put('/:id', UserController.updateUser);

// Rota para deletar um usuário pelo ID
router.delete('/:id', UserController.deleteUser);

module.exports = router;
