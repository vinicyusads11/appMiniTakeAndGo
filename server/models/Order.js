const mongoose = require('mongoose');
const { Schema } = mongoose;

const orderSchema = new Schema({
  orderDate: { type: Date, required: true },
  idBag: { type: Schema.Types.ObjectId, ref: 'Cesta', required: true },
  idBranch: { type: Schema.Types.ObjectId, ref: 'Filial', required: true },
  idUser: { type: Schema.Types.ObjectId, ref: 'Usuario', required: true },
  orderStatus: { type: Boolean, required: true },
  totalValue: { type: Number, required: true }
});

module.exports = mongoose.model('Pedido', orderSchema);
