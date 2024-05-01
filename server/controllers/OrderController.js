const Order = require('../models/Order');

// Cria um novo pedido
exports.createOrder = async (req, res) => {
  try {
    const newOrder = new Order({
      orderDate: req.body.orderDate,
      idBag: req.body.idBag,
      idBranch: req.body.idBranch,
      idUser: req.body.idUser,
      orderStatus: req.body.orderStatus,
      totalValue: req.body.totalValue
    });
    await newOrder.save();
    res.status(201).send(newOrder);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Busca um pedido pelo ID
exports.getOrder = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id)
      .populate('idBag')
      .populate('idBranch')
      .populate('idUser');
    if (!order) {
      return res.status(404).send({ message: 'Pedido não encontrado' });
    }
    res.status(200).send(order);
  } catch (error) {
    res.status(500).send(error);
  }
};

// Atualiza um pedido pelo ID
exports.updateOrder = async (req, res) => {
  try {
    const updatedOrder = await Order.findByIdAndUpdate(req.params.id, {
      orderDate: req.body.orderDate,
      idBag: req.body.idBag,
      idBranch: req.body.idBranch,
      idUser: req.body.idUser,
      orderStatus: req.body.orderStatus,
      totalValue: req.body.totalValue
    }, { new: true });
    if (!updatedOrder) {
      return res.status(404).send({ message: 'Pedido não encontrado para atualização' });
    }
    res.status(200).send(updatedOrder);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Deleta um pedido pelo ID
exports.deleteOrder = async (req, res) => {
  try {
    const deletedOrder = await Order.findByIdAndDelete(req.params.id);
    if (!deletedOrder) {
      return res.status(404).send({ message: 'Pedido não encontrado para exclusão' });
    }
    res.status(204).send(); // Nenhum conteúdo para retornar, mas indica sucesso
  } catch (error) {
    res.status(500).send(error);
  }
};
