const mongoose = require('mongoose');

// Esquema para Filial
const filialSchema = new mongoose.Schema({
    cnpj: { type: String, required: true }, // CNPJ pode precisar de um formato específico ou validação
    endereco: { type: String, required: true },
    nome: { type: String, required: true },
    telefone: { type: String, required: true } // Telefone pode precisar de um formato específico ou validação
});

const Filial = mongoose.model('Filial', filialSchema);

module.exports = Filial;