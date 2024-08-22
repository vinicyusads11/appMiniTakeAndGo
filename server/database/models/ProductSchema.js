const mongoose = require('mongoose');
const { Schema } = mongoose;

// Esquema para Produto
const productSchema = new Schema({
    codigoBarras: { type: String, required: true },
    descricao: { type: String, required: true },
    imagemURL: { type: String, required: true },
    nome: { type: String, required: true }
}, { timestamps: true, strict: true });
  
const Produto = mongoose.model('Produto', productSchema);
module.exports = Produto;