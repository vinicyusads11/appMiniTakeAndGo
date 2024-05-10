const Pedido = require('../database/models/OrderSchema');

// Cria um novo pedido
exports.createPedido = async (req, res) => {
  try {
    const novoPedido = new Pedido({
      dataPedido: req.body.dataPedido,
      idCesta: req.body.idCesta,
      idFilial: req.body.idFilial,
      idUsuario: req.body.idUsuario,
      itens: req.body.itens,
      statusPagamento: req.body.statusPagamento,
      valorTotal: req.body.valorTotal
    });
    await novoPedido.save();
    res.status(201).send(novoPedido);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Busca um pedido pelo ID
exports.getPedido = async (req, res) => {
  try {
    const pedido = await Pedido.findById(req.params.id)
      .populate('idCesta')
      .populate('idFilial')
      .populate('idUsuario');
    if (!pedido) {
      return res.status(404).send({ message: 'Pedido não encontrado' });
    }
    res.status(200).send(pedido);
  } catch (error) {
    res.status(500).send(error);
  }
};

// Atualiza um pedido pelo ID
exports.updatePedido = async (req, res) => {
  try {
    const pedidoAtualizado = await Pedido.findByIdAndUpdate(req.params.id, {
      dataPedido: req.body.dataPedido,
      idCesta: req.body.idCesta,
      idFilial: req.body.idFilial,
      idUsuario: req.body.idUsuario,
      itens: req.body.itens,
      statusPagamento: req.body.statusPagamento,
      valorTotal: req.body.valorTotal
    }, { new: true });
    if (!pedidoAtualizado) {
      return res.status(404).send({ message: 'Pedido não encontrado para atualização' });
    }
    res.status(200).send(pedidoAtualizado);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Deleta um pedido pelo ID
exports.deletePedido = async (req, res) => {
  try {
    const pedidoDeletado = await Pedido.findByIdAndDelete(req.params.id);
    if (!pedidoDeletado) {
      return res.status(404).send({ message: 'Pedido não encontrado para exclusão' });
    }
    res.status(204).send(); // Nenhum conteúdo para retornar, mas indica sucesso
  } catch (error) {
    res.status(500).send(error);
  }
};