const OrderItem = require('../models/OrderItem');

// Cria um novo item de pedido
exports.createOrderItem = async (req, res) => {
  try {
    const newOrderItem = new OrderItem({
      idStock: req.body.idStock,
      idOrder: req.body.idOrder,
      idProduct: req.body.idProduct,
      currentPrice: req.body.currentPrice,
      quantity: req.body.quantity
    });
    await newOrderItem.save();
    res.status(201).send(newOrderItem);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Busca um item de pedido pelo ID
exports.getOrderItem = async (req, res) => {
  try {
    const orderItem = await OrderItem.findById(req.params.id)
      .populate('idStock')
      .populate('idOrder')
      .populate('idProduct');
    if (!orderItem) {
      return res.status(404).send({ message: 'Item de pedido não encontrado' });
    }
    res.status(200).send(orderItem);
  } catch (error) {
    res.status(500).send(error);
  }
};

// Atualiza um item de pedido pelo ID
exports.updateOrderItem = async (req, res) => {
  try {
    const updatedOrderItem = await OrderItem.findByIdAndUpdate(req.params.id, {
      idStock: req.body.idStock,
      idOrder: req.body.idOrder,
      idProduct: req.body.idProduct,
      currentPrice: req.body.currentPrice,
      quantity: req.body.quantity
    }, { new: true });
    if (!updatedOrderItem) {
      return res.status(404).send({ message: 'Item de pedido não encontrado para atualização' });
    }
    res.status(200).send(updatedOrderItem);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Deleta um item de pedido pelo ID
exports.deleteOrderItem = async (req, res) => {
  try {
    const deletedOrderItem = await OrderItem.findByIdAndDelete(req.params.id);
    if (!deletedOrderItem) {
      return res.status(404).send({ message: 'Item de pedido não encontrado para exclusão' });
    }
    res.status(204).send(); // Nenhum conteúdo para retornar, mas indica sucesso
  } catch (error) {
    res.status(500).send(error);
  }
};
