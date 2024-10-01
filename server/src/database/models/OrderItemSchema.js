const mongoose = require('mongoose');
const { Schema } = mongoose;

// Esquema para ItemPedido
const orderItemSchema = new Schema({
    idEstoque: { type: Schema.Types.ObjectId, ref: 'Estoque', required: true },
    idPedido: { type: Schema.Types.ObjectId, ref: 'Pedido', required: true },
    idProduto: { type: Schema.Types.ObjectId, ref: 'Produto', required: true },
    precoMomento: { type: Number, required: true },
    quantidade: { type: Number, required: true }
}, { timestamps: true, strict: true });

const ItemPedido = mongoose.model('ItemPedido', orderItemSchema);
module.exports = ItemPedido;