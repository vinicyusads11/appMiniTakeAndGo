const mongoose = require('mongoose');
const { Schema } = mongoose;

const orderItemSchema = new Schema({
  idStock: { type: Schema.Types.ObjectId, ref: 'Estoque', required: true },
  idOrder: { type: Schema.Types.ObjectId, ref: 'Pedido', required: true },
  idProduct: { type: Schema.Types.ObjectId, ref: 'Produto', required: true },
  currentPrice: { type: Number, required: true },
  quantity: { type: Number, required: true }
});

module.exports = mongoose.model('ItemPedido', orderItemSchema);
