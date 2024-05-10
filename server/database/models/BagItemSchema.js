const mongoose = require('mongoose');
const { Schema } = mongoose;

// Esquema para ItemCesta
const bagItemSchema = new Schema({
    idCesta: { type: Schema.Types.ObjectId, ref: 'Cesta', required: true },
    idEstoque: { type: Schema.Types.ObjectId, ref: 'Estoque', required: true },
    idProduto: { type: Schema.Types.ObjectId, ref: 'Produto', required: true },
    precoMomento: { type: Number, required: true },
    quantidade: { type: Number, required: true }
}, { timestamps: true, strict: true });

const ItemCesta = mongoose.model('ItemCesta', bagItemSchema);
module.exports = ItemCesta;