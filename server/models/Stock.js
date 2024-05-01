const mongoose = require('mongoose');
const { Schema } = mongoose;

const stockSchema = new Schema({
  stockMax: { type: Number, required: true },
  stockMin: { type: Number, required: true },
  idBranch: { type: Schema.Types.ObjectId, ref: 'Filial', required: true },
  idProduct: { type: Schema.Types.ObjectId, ref: 'Produto', required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true }
});

module.exports = mongoose.model('Estoque', stockSchema);
