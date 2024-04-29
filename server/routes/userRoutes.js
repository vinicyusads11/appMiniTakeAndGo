const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Rota para criar um novo usuário
router.post('/', userController.createUser);

// Rota para obter todos os usuários
router.get('/', userController.getUsers);

// Rota para obter um usuário pelo ID
router.get('/:id', userController.getUserById);

// Rota para atualizar um usuário pelo ID
router.put('/:id', userController.updateUser);

// Rota para deletar um usuário pelo ID
router.delete('/:id', userController.deleteUser);

// ...adicionar aqui outras rotas para métodos específicos do usuário

module.exports = router;
