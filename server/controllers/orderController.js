const Order = require('../models/Order');

// Criar um novo pedido
exports.createOrder = async (req, res) => {
    try {
        const { usuario, filial, itens, statusPagamento, valorTotal } = req.body;
        const order = new Order({
            usuario,
            filial,
            itens,
            statusPagamento,
            valorTotal
        });
        await order.save();
        res.status(201).send(order);
    } catch (error) {
        res.status(400).send(error);
    }
};

// Obter todos os pedidos de um usuário
exports.getOrdersByUser = async (req, res) => {
    try {
        const orders = await Order.find({ usuario: req.params.userId })
            .populate('itens')
            .populate('filial', 'nome');
        res.status(200).send(orders);
    } catch (error) {
        res.status(500).send(error);
    }
};

// Atualizar um pedido
exports.updateOrder = async (req, res) => {
    try {
        const { statusPagamento, valorTotal } = req.body;
        const order = await Order.findByIdAndUpdate(req.params.id, {
            statusPagamento,
            valorTotal
        }, { new: true });
        
        if (!order) {
            return res.status(404).send({ message: 'Pedido não encontrado' });
        }
        res.status(200).send(order);
    } catch (error) {
        res.status(400).send(error);
    }
};

// Deletar um pedido
exports.deleteOrder = async (req, res) => {
    try {
        const order = await Order.findByIdAndDelete(req.params.id);
        if (!order) {
            return res.status(404).send({ message: 'Pedido não encontrado' });
        }
        res.status(200).send({ message: 'Pedido deletado com sucesso' });
    } catch (error) {
        res.status(500).send(error);
    }
};

module.exports = {
    createOrder,
    getOrdersByUser,
    updateOrder,
    deleteOrder
};
