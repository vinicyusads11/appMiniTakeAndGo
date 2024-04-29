const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true,
        trim: true
    },
    descricao: {
        type: String,
        required: true,
        trim: true
    },
    preco: {
        type: Number,
        required: true
    },
    categoria: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category', // Ajuste conforme o nome do seu modelo de Categoria
    },
    imagemURL: String,
    // Adicione outros campos conforme necessário
}, {
    timestamps: true
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
