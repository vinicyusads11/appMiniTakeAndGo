const mongoose = require('mongoose');

// Esquema para ItemCesta
const itemCestaSchema = new mongoose.Schema({
    idCesta: { type: mongoose.Schema.Types.ObjectId, ref: 'Cesta', required: true },
    idEstoque: { type: mongoose.Schema.Types.ObjectId, ref: 'Estoque', required: true },
    idProduto: { type: mongoose.Schema.Types.ObjectId, ref: 'Produto', required: true },
    precoMomento: { type: Number, required: true },
    quantidade: { type: Number, required: true }
});

const ItemCesta = mongoose.model('ItemCesta', itemCestaSchema);

module.exports = ItemCesta;