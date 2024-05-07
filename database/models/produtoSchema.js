const mongoose = require('mongoose');

// Esquema para Produto
const produtoSchema = new mongoose.Schema({
    codigoBarras: { type: String, required: true },
    descricao: { type: String, required: true },
    imagemURL: { type: String, required: true },
    nome: { type: String, required: true }
});
  
const Produto = mongoose.model('Produto', produtoSchema);

module.exports = Produto;
  