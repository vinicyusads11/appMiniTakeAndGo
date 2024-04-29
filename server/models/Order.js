const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    usuario: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    filial: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Branch',
        required: true
    },
    itens: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'OrderItem'
    }],
    statusPagamento: { type: Boolean, required: true },
    valorTotal: { type: Number, required: true },
    // Adicione outros campos conforme necessário
}, {
    timestamps: true
});

const Order = mongoose.model('Order', orderSchema);
module.exports = Order;
