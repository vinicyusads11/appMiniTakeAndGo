const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// Configurar multer ou outro middleware para upload de imagens aqui
// const multer = require('multer');
// const upload = multer({ dest: 'uploads/' });

// Rota para criar um novo produto
router.post('/', productController.createProduct);

// Rota para obter todos os produtos
router.get('/', productController.getProducts);

// Rota para obter um produto específico pelo ID
router.get('/:id', productController.getProductById);

// Rota para atualizar um produto específico pelo ID
router.put('/:id', productController.updateProduct);

// Rota para deletar um produto específico pelo ID
router.delete('/:id', productController.deleteProduct);

// Rota para upload de imagem de um produto
// Certifique-se de que o nome 'image' corresponda ao nome do campo na requisição de upload do frontend
// router.post('/:id/upload', upload.single('image'), productController.uploadImage);

module.exports = router;
