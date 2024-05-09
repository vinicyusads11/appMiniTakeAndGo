const mongoose = require('mongoose');
const { Schema } = mongoose;

// Esquema para Cesta
const bagSchema = new Schema({
    idFilial: { type: Schema.Types.ObjectId, ref: 'Filial', required: true },
    idUsuario: { type: Schema.Types.ObjectId, ref: 'Usuario', required: true },
    itens: [{ type: Schema.Types.ObjectId, ref: 'ItemCesta' }], // Referência aos IDs dos itens da cesta
    status: { type: String, required: true },
    valorTotal: { type: Number, required: true }
}, { timestamps: true, strict: true });

const Cesta = mongoose.model('Cesta', bagSchema);
module.exports = Cesta;
