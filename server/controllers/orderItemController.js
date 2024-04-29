const OrderItem = require('../models/OrderItem');
const Product = require('../models/Product'); // Supondo que você possa precisar buscar informações do produto

// Adicionar um novo item a um pedido
exports.createOrderItem = async (req, res) => {
    try {
        const { pedido, produto, quantidade, precoUnitario } = req.body;
        const subtotal = precoUnitario * quantidade;

        const orderItem = new OrderItem({
            pedido,
            produto,
            quantidade,
            precoUnitario,
            subtotal
        });

        await orderItem.save();
        res.status(201).send(orderItem);
    } catch (error) {
        res.status(400).send(error);
    }
};

// Atualizar um item de pedido
exports.updateOrderItem = async (req, res) => {
    try {
        const { quantidade, precoUnitario } = req.body;
        const orderItem = await OrderItem.findById(req.params.id);

        if (!orderItem) {
            return res.status(404).send({ message: 'Item de pedido não encontrado' });
        }

        orderItem.quantidade = quantidade;
        orderItem.precoUnitario = precoUnitario;
        orderItem.subtotal = quantidade * precoUnitario;

        await orderItem.save();
        res.status(200).send(orderItem);
    } catch (error) {
        res.status(400).send(error);
    }
};

// Deletar um item de pedido
exports.deleteOrderItem = async (req, res) => {
    try {
        const orderItem = await OrderItem.findByIdAndDelete(req.params.id);
        if (!orderItem) {
            return res.status(404).send({ message: 'Item de pedido não encontrado' });
        }
        res.status(200).send({ message: 'Item de pedido deletado com sucesso' });
    } catch (error) {
        res.status(500).send(error);
    }
};

module.exports = {
    createOrderItem,
    updateOrderItem,
    deleteOrderItem
};
