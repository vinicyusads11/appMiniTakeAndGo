const mongoose = require('mongoose');
const { Schema } = mongoose;

const productSchema = new Schema({
  barCode: String,
  description: { type: String, required: true },
  imageURL: String
});

module.exports = mongoose.model('Produto', productSchema);
