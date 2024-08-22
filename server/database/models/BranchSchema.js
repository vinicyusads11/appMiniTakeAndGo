const mongoose = require('mongoose');
const { Schema } = mongoose;

// Esquema para Filial
const branchSchema = new Schema({
    cnpj: { type: String, required: true }, // CNPJ pode precisar de um formato específico ou validação
    endereco: { type: String, required: true },
    nome: { type: String, required: true },
    telefone: { type: String, required: true } // Telefone pode precisar de um formato específico ou validação
}, { timestamps: true, strict: true });

const Filial = mongoose.model('Filial', branchSchema);
module.exports = Filial;