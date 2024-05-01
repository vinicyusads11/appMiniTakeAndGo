const mongoose = require('mongoose');

// Esquema para ItemPedido
const itemPedidoSchema = new mongoose.Schema({
    idEstoque: { type: mongoose.Schema.Types.ObjectId, ref: 'Estoque', required: true },
    idPedido: { type: mongoose.Schema.Types.ObjectId, ref: 'Pedido', required: true },
    idProduto: { type: mongoose.Schema.Types.ObjectId, ref: 'Produto', required: true },
    precoMomento: { type: Number, required: true },
    quantidade: { type: Number, required: true }
});

const ItemPedido = mongoose.model('ItemPedido', itemPedidoSchema);

module.exports = ItemPedido;