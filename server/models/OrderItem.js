const mongoose = require('mongoose');

const orderItemSchema = new mongoose.Schema({
    pedido: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Order',
        required: true
    },
    produto: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true
    },
    quantidade: { type: Number, required: true },
    precoUnitario: { type: Number, required: true },
    subtotal: { type: Number, required: true },
    // Adicione outros campos conforme necessário
});

const OrderItem = mongoose.model('OrderItem', orderItemSchema);
module.exports = OrderItem;
