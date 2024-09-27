const ItemPedido = require('../database/models/OrderItemSchema');

// Cria um novo item de pedido
exports.createItemPedido = async (req, res) => {
  try {
    const novoItemPedido = new ItemPedido({
      idEstoque: req.body.idEstoque,
      idPedido: req.body.idPedido,
      idProduto: req.body.idProduto,
      precoMomento: req.body.precoMomento,
      quantidade: req.body.quantidade
    });
    await novoItemPedido.save();
    res.status(201).send(novoItemPedido);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Busca um item de pedido pelo ID
exports.getItemPedido = async (req, res) => {
  try {
    const itemPedido = await ItemPedido.findById(req.params.id)
      .populate('idEstoque')
      .populate('idPedido')
      .populate('idProduto');
    if (!itemPedido) {
      return res.status(404).send({ message: 'Item de pedido não encontrado' });
    }
    res.status(200).send(itemPedido);
  } catch (error) {
    res.status(500).send(error);
  }
};

// Atualiza um item de pedido pelo ID
exports.updateItemPedido = async (req, res) => {
  try {
    const itemPedidoAtualizado = await ItemPedido.findByIdAndUpdate(req.params.id, {
      idEstoque: req.body.idEstoque,
      idPedido: req.body.idPedido,
      idProduto: req.body.idProduto,
      precoMomento: req.body.precoMomento,
      quantidade: req.body.quantidade
    }, { new: true });
    if (!itemPedidoAtualizado) {
      return res.status(404).send({ message: 'Item de pedido não encontrado para atualização' });
    }
    res.status(200).send(itemPedidoAtualizado);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Deleta um item de pedido pelo ID
exports.deleteItemPedido = async (req, res) => {
  try {
    const itemPedidoDeletado = await ItemPedido.findByIdAndDelete(req.params.id);
    if (!itemPedidoDeletado) {
      return res.status(404).send({ message: 'Item de pedido não encontrado para exclusão' });
    }
    res.status(204).send(); // Nenhum conteúdo para retornar, mas indica sucesso
  } catch (error) {
    res.status(500).send(error);
  }
};