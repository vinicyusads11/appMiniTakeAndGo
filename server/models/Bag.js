const mongoose = require('mongoose');
const { Schema } = mongoose;

const bagSchema = new Schema({
  idBranch: { type: Schema.Types.ObjectId, ref: 'Filial', required: true },
  idUser: { type: Schema.Types.ObjectId, ref: 'Usuario', required: true },
  status: { type: String, required: true },
  totalValue: { type: Number, required: true }
});

module.exports = mongoose.model('Cesta', bagSchema);
