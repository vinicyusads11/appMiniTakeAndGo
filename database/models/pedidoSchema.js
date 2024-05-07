const mongoose = require('mongoose');

// Esquema para Pedido
const pedidoSchema = new mongoose.Schema({
    dataPedido: { type: Date, required: true },
    idCesta: { type: mongoose.Schema.Types.ObjectId, ref: 'Cesta', required: true },
    idFilial: { type: mongoose.Schema.Types.ObjectId, ref: 'Filial', required: true },
    idUsuario: { type: mongoose.Schema.Types.ObjectId, ref: 'Usuario', required: true },
    itens: [itemPedidoSchema],
    statusPagamento: { type: Boolean, required: true },
    valorTotal: { type: Number, required: true }
});

const Pedido = mongoose.model('Pedido', pedidoSchema);

module.exports = Pedido;