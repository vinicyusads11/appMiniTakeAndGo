const Produto = require('../database/models/ProductSchema');

// Cria um novo produto
exports.createProduto = async (req, res) => {
  try {
    const novoProduto = new Produto({
      codigoBarras: req.body.codigoBarras,
      descricao: req.body.descricao,
      imagemURL: req.body.imagemURL,
      nome: req.body.nome
    });
    await novoProduto.save();
    res.status(201).send(novoProduto);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Busca um produto pelo ID
exports.getProduto = async (req, res) => {
  try {
    const produto = await Produto.findById(req.params.id);
    if (!produto) {
      return res.status(404).send({ message: 'Produto não encontrado' });
    }
    res.status(200).send(produto);
  } catch (error) {
    res.status(500).send(error);
  }
};

// Atualiza um produto pelo ID
exports.updateProduto = async (req, res) => {
  try {
    const produtoAtualizado = await Produto.findByIdAndUpdate(req.params.id, {
      codigoBarras: req.body.codigoBarras,
      descricao: req.body.descricao,
      imagemURL: req.body.imagemURL,
      nome: req.body.nome
    }, { new: true });
    if (!produtoAtualizado) {
      return res.status(404).send({ message: 'Produto não encontrado para atualização' });
    }
    res.status(200).send(produtoAtualizado);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Deleta um produto pelo ID
exports.deleteProduto = async (req, res) => {
  try {
    const produtoDeletado = await Produto.findByIdAndDelete(req.params.id);
    if (!produtoDeletado) {
      return res.status(404).send({ message: 'Produto não encontrado para exclusão' });
    }
    res.status(204).send(); // Nenhum conteúdo para retornar, mas indica sucesso
  } catch (error) {
    res.status(500).send(error);
  }
};