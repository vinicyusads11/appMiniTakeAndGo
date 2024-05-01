const mongoose = require('mongoose');
const { Schema } = mongoose;

const branchSchema = new Schema({
  cnpj: { type: String, required: true },
  address: String,
  name: { type: String, required: true }
});

module.exports = mongoose.model('Filial', branchSchema);
