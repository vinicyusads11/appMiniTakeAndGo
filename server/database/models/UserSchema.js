const mongoose = require('mongoose');
const { Schema } = mongoose;

// Esquema para Usuário
const userSchema = new Schema({
  email: { type: String, required: true },
  idFilial: { type: Schema.Types.ObjectId, ref: 'Filial', required: true },
  nome: { type: String, required: true },
  senha: { type: String, required: true },
  telefone: { type: String, required: true }, // Telefone pode precisar de um formato específico ou validação
  tipoUsuario: { type: Number, required: true }
}, { timestamps: true, strict: true });

const Usuario = mongoose.model('Usuario', userSchema);
module.exports = Usuario;