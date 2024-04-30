// Exemplo de modelo Mongoose para 'Usuario'
const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  email: { type: String, required: true },
  nome: String,
  senha: { type: String, required: true },
  username: { type: String, required: true }
});

module.exports = mongoose.model('Usuario', userSchema);
