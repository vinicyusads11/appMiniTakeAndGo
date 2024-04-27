const Product = require('../models/product'); // Importando o modelo de Produto

// Adicionar um novo produto
exports.createProduct = async (req, res) => {
  try {
    const newProduct = new Product(req.body);
    await newProduct.save();
    res.status(201).send(newProduct);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Obter a lista de produtos
exports.getProducts = async (_req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).send(products);
  } catch (error) {
    res.status(500).send(error);
  }
};

// Obter um único produto pelo ID
exports.getProductById = async (req, res) => {
    try {
      const product = await Product.findById(req.params.id);
      if (!product) {
        return res.status(404).send();
      }
      res.status(200).send(product);
    } catch (error) {
      res.status(500).send(error);
    }
  };

  // Atualizar um produto pelo ID
exports.updateProduct = async (req, res) => {
    try {
      const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
      });
      if (!product) {
        return res.status(404).send();
      }
      res.status(200).send(product);
    } catch (error) {
      res.status(400).send(error);
    }
  };

  exports.deleteProduct = async (req, res) => {
    try {
      const product = await Product.findByIdAndDelete(req.params.id);
      if (!product) {
        return res.status(404).send();
      }
      res.status(200).send(product);
    } catch (error) {
      res.status(500).send(error);
    }
  };

// Upload de imagem para um produto
exports.uploadImage = async (req, res) => {
    // Implementação de upload de imagem dependerá do middleware de upload que você estiver usando, como multer
  };

  module.exports = {
    createProduct,
    getProducts,
    getProductById,
    updateProduct,
    deleteProduct,
    uploadImage
  };