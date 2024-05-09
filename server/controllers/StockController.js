const Estoque = require('../database/models/StockSchema');

// Cria um novo registro de estoque
exports.createEstoque = async (req, res) => {
  try {
    const novoEstoque = new Estoque({
      estoqueMax: req.body.estoqueMax,
      estoqueMin: req.body.estoqueMin,
      idFilial: req.body.idFilial,
      idProduto: req.body.idProduto,
      preco: req.body.preco,
      quantidade: req.body.quantidade
    });
    await novoEstoque.save();
    res.status(201).send(novoEstoque);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Busca um registro de estoque pelo ID
exports.getEstoque = async (req, res) => {
  try {
    const estoque = await Estoque.findById(req.params.id)
      .populate('idFilial')
      .populate('idProduto');
    if (!estoque) {
      return res.status(404).send({ message: 'Estoque não encontrado' });
    }
    res.status(200).send(estoque);
  } catch (error) {
    res.status(500).send(error);
  }
};

// Atualiza um registro de estoque pelo ID
exports.updateEstoque = async (req, res) => {
  try {
    const estoqueAtualizado = await Estoque.findByIdAndUpdate(req.params.id, {
      estoqueMax: req.body.estoqueMax,
      estoqueMin: req.body.estoqueMin,
      idFilial: req.body.idFilial,
      idProduto: req.body.idProduto,
      preco: req.body.preco,
      quantidade: req.body.quantidade
    }, { new: true });
    if (!estoqueAtualizado) {
      return res.status(404).send({ message: 'Estoque não encontrado para atualização' });
    }
    res.status(200).send(estoqueAtualizado);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Deleta um registro de estoque pelo ID
exports.deleteEstoque = async (req, res) => {
  try {
    const estoqueDeletado = await Estoque.findByIdAndDelete(req.params.id);
    if (!estoqueDeletado) {
      return res.status(404).send({ message: 'Estoque não encontrado para exclusão' });
    }
    res.status(204).send(); // Nenhum conteúdo para retornar, mas indica sucesso
  } catch (error) {
    res.status(500).send(error);
  }
};