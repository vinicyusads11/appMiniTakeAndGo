const ItemCesta = require('../database/models/BagItemSchema');

// Cria um novo item na cesta
exports.createItemCesta = async (req, res) => {
  try {
    const novoItemCesta = new ItemCesta({
      idCesta: req.body.idCesta,
      idEstoque: req.body.idEstoque,
      idProduto: req.body.idProduto,
      precoMomento: req.body.precoMomento,
      quantidade: req.body.quantidade
    });
    await novoItemCesta.save();
    res.status(201).send(novoItemCesta);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Busca um item da cesta pelo ID
exports.getItemCesta = async (req, res) => {
  try {
    const itemCesta = await ItemCesta.findById(req.params.id)
      .populate('idCesta')
      .populate('idEstoque')
      .populate('idProduto');
    if (!itemCesta) {
      return res.status(404).send({ message: 'Item da cesta não encontrado' });
    }
    res.status(200).send(itemCesta);
  } catch (error) {
    res.status(500).send(error);
  }
};

// Atualiza um item da cesta pelo ID
exports.updateItemCesta = async (req, res) => {
  try {
    const itemCestaAtualizado = await ItemCesta.findByIdAndUpdate(req.params.id, {
      idCesta: req.body.idCesta,
      idEstoque: req.body.idEstoque,
      idProduto: req.body.idProduto,
      precoMomento: req.body.precoMomento,
      quantidade: req.body.quantidade
    }, { new: true });
    if (!itemCestaAtualizado) {
      return res.status(404).send({ message: 'Item da cesta não encontrado para atualização' });
    }
    res.status(200).send(itemCestaAtualizado);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Deleta um item da cesta pelo ID
exports.deleteItemCesta = async (req, res) => {
  try {
    const itemCestaDeletado = await ItemCesta.findByIdAndDelete(req.params.id);
    if (!itemCestaDeletado) {
      return res.status(404).send({ message: 'Item da cesta não encontrado para exclusão' });
    }
    res.status(204).send(); // Nenhum conteúdo para retornar, mas indica sucesso
  } catch (error) {
    res.status(500).send(error);
  }
};