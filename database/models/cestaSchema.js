const mongoose = require('mongoose');

// Esquema para Cesta
const cestaSchema = new mongoose.Schema({
    idFilial: { type: mongoose.Schema.Types.ObjectId, ref: 'Filial', required: true },
    idUsuario: { type: mongoose.Schema.Types.ObjectId, ref: 'Usuario', required: true },
    itens: [itemCestaSchema],
    status: { type: String, required: true },
    valorTotal: { type: Number, required: true }
});

const Cesta = mongoose.model('Cesta', cestaSchema);

module.exports = Cesta;