const Stock = require('../models/Stock');

// Cria um novo registro de estoque
exports.createStock = async (req, res) => {
  try {
    const newStock = new Stock({
      stockMax: req.body.stockMax,
      stockMin: req.body.stockMin,
      idBranch: req.body.idBranch,
      idProduct: req.body.idProduct,
      price: req.body.price,
      quantity: req.body.quantity
    });
    await newStock.save();
    res.status(201).send(newStock);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Busca um registro de estoque pelo ID
exports.getStock = async (req, res) => {
  try {
    const stock = await Stock.findById(req.params.id)
      .populate('idBranch')
      .populate('idProduct');
    if (!stock) {
      return res.status(404).send({ message: 'Estoque não encontrado' });
    }
    res.status(200).send(stock);
  } catch (error) {
    res.status(500).send(error);
  }
};

// Atualiza um registro de estoque pelo ID
exports.updateStock = async (req, res) => {
  try {
    const updatedStock = await Stock.findByIdAndUpdate(req.params.id, {
      stockMax: req.body.stockMax,
      stockMin: req.body.stockMin,
      idBranch: req.body.idBranch,
      idProduct: req.body.idProduct,
      price: req.body.price,
      quantity: req.body.quantity
    }, { new: true });
    if (!updatedStock) {
      return res.status(404).send({ message: 'Estoque não encontrado para atualização' });
    }
    res.status(200).send(updatedStock);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Deleta um registro de estoque pelo ID
exports.deleteStock = async (req, res) => {
  try {
    const deletedStock = await Stock.findByIdAndDelete(req.params.id);
    if (!deletedStock) {
      return res.status(404).send({ message: 'Estoque não encontrado para exclusão' });
    }
    res.status(204).send(); // Nenhum conteúdo para retornar, mas indica sucesso
  } catch (error) {
    res.status(500).send(error);
  }
};
