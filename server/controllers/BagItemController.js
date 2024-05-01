const BagItem = require('../models/BagItem');

// Cria um novo item na cesta
exports.createBagItem = async (req, res) => {
  try {
    const newBagItem = new BagItem({
      idBag: req.body.idBag,
      idStock: req.body.idStock,
      idProduct: req.body.idProduct,
      currentPrice: req.body.currentPrice,
      quantity: req.body.quantity
    });
    await newBagItem.save();
    res.status(201).send(newBagItem);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Busca um item da cesta pelo ID
exports.getBagItem = async (req, res) => {
  try {
    const bagItem = await BagItem.findById(req.params.id)
      .populate('idBag')
      .populate('idStock')
      .populate('idProduct');
    if (!bagItem) {
      return res.status(404).send({ message: 'Item da cesta não encontrado' });
    }
    res.status(200).send(bagItem);
  } catch (error) {
    res.status(500).send(error);
  }
};

// Atualiza um item da cesta pelo ID
exports.updateBagItem = async (req, res) => {
  try {
    const updatedBagItem = await BagItem.findByIdAndUpdate(req.params.id, {
      idBag: req.body.idBag,
      idStock: req.body.idStock,
      idProduct: req.body.idProduct,
      currentPrice: req.body.currentPrice,
      quantity: req.body.quantity
    }, { new: true });
    if (!updatedBagItem) {
      return res.status(404).send({ message: 'Item da cesta não encontrado para atualização' });
    }
    res.status(200).send(updatedBagItem);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Deleta um item da cesta pelo ID
exports.deleteBagItem = async (req, res) => {
  try {
    const deletedBagItem = await BagItem.findByIdAndDelete(req.params.id);
    if (!deletedBagItem) {
      return res.status(404).send({ message: 'Item da cesta não encontrado para exclusão' });
    }
    res.status(204).send(); // Nenhum conteúdo para retornar, mas indica sucesso
  } catch (error) {
    res.status(500).send(error);
  }
};
