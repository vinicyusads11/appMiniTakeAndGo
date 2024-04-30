const express = require('express');
const router = express.Router();
const userController = require('../controllers/UserController');

// Rota para criar um novo usuário
router.post('/', userController.createUser);

// Rota para recuperar todos os usuários
router.get('/', userController.listUser);

// Rota para recuperar um usuário específico pelo ID
router.get('/:id', userController.getUserById);

// Rota para atualizar um usuário
router.put('/:id', userController.updateUser);

// Rota para deletar um usuário
router.delete('/:id', userController.deleteUser);

module.exports = router;
