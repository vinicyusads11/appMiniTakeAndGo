const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  email: { type: String, required: true },
  name: String,
  password: { type: String, required: true },
  username: { type: String, required: true }
});

module.exports = mongoose.model('Usuario', userSchema);
