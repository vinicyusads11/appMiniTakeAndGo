const mongoose = require('mongoose');
const { Schema } = mongoose;

// Esquema para Pedido
const orderSchema = new Schema({
    dataPedido: { type: Date, required: true },
    idCesta: { type: Schema.Types.ObjectId, ref: 'Cesta', required: true },
    idFilial: { type: Schema.Types.ObjectId, ref: 'Filial', required: true },
    idUsuario: { type: Schema.Types.ObjectId, ref: 'Usuario', required: true },
    itens: [{ type: Schema.Types.ObjectId, ref: 'ItemPedido' }], // Referência aos IDs dos itens do pedido
    statusPagamento: { type: Boolean, required: true },
    valorTotal: { type: Number, required: true }
}, { timestamps: true, strict: true });

const Pedido = mongoose.model('Pedido', orderSchema);
module.exports = Pedido;