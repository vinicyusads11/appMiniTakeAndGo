const mongoose = require('mongoose');
const { Schema } = mongoose;

const bagItemSchema = new Schema({
  idBag: { type: Schema.Types.ObjectId, ref: 'Cesta', required: true },
  idStock: { type: Schema.Types.ObjectId, ref: 'Estoque', required: true },
  idProduct: { type: Schema.Types.ObjectId, ref: 'Produto', required: true },
  currentPrice: { type: Number, required: true },
  quantity: { type: Number, required: true }
});

module.exports = mongoose.model('ItemCesta', bagItemSchema);
