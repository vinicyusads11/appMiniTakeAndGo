const mongoose = require('mongoose');
const { Schema } = mongoose;

// Esquema para Estoque
const stockSchema = new Schema({
    estoqueMax: { type: Number, required: true },
    estoqueMin: { type: Number, required: true },
    idFilial: { type: Schema.Types.ObjectId, ref: 'Filial', required: true },
    idProduto: { type: Schema.Types.ObjectId, ref: 'Produto', required: true },
    preco: { type: Number, required: true },
    quantidade: { type: Number, required: true }
}, { timestamps: true, strict: true });

const Estoque = mongoose.model('Estoque', stockSchema);
module.exports = Estoque;