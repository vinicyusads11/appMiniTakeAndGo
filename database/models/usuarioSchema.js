const mongoose = require('mongoose');

// Esquema para Usuário
const usuarioSchema = new mongoose.Schema({
  email: { type: String, required: true },
  idFilial: { type: mongoose.Schema.Types.ObjectId, ref: 'Filial', required: true },
  nome: { type: String, required: true },
  senha: { type: String, required: true },
  telefone: { type: String, required: true }, // Telefone pode precisar de um formato específico ou validação
  tipoUsuario: { type: Number, required: true }
});

const Usuario = mongoose.model('Usuario', usuarioSchema);

module.exports = Usuario;