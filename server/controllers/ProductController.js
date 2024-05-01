const Product = require('../models/Product');

// Cria um novo produto
exports.createProduct = async (req, res) => {
  try {
    const newProduct = new Product({
      barCode: req.body.barCode,
      description: req.body.description,
      imageURL: req.body.imageURL
    });
    await newProduct.save();
    res.status(201).send(newProduct);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Busca um produto pelo ID
exports.getProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).send({ message: 'Produto não encontrado' });
    }
    res.status(200).send(product);
  } catch (error) {
    res.status(500).send(error);
  }
};

// Atualiza um produto pelo ID
exports.updateProduct = async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(req.params.id, {
      barCode: req.body.barCode,
      description: req.body.description,
      imageURL: req.body.imageURL
    }, { new: true });
    if (!updatedProduct) {
      return res.status(404).send({ message: 'Produto não encontrado para atualização' });
    }
    res.status(200).send(updatedProduct);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Deleta um produto pelo ID
exports.deleteProduct = async (req, res) => {
  try {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);
    if (!deletedProduct) {
      return res.status(404).send({ message: 'Produto não encontrado para exclusão' });
    }
    res.status(204).send(); // Nenhum conteúdo para retornar, mas indica sucesso
  } catch (error) {
    res.status(500).send(error);
  }
};
