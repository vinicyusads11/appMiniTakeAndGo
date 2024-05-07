const mongoose = require('mongoose');

// Esquema para Estoque
const estoqueSchema = new mongoose.Schema({
    estoqueMax: { type: Number, required: true },
    estoqueMin: { type: Number, required: true },
    idFilial: { type: mongoose.Schema.Types.ObjectId, ref: 'Filial', required: true },
    idProduto: { type: mongoose.Schema.Types.ObjectId, ref: 'Produto', required: true },
    preco: { type: Number, required: true },
    quantidade: { type: Number, required: true }
});

const Estoque = mongoose.model('Estoque', estoqueSchema);

module.exports = Estoque;