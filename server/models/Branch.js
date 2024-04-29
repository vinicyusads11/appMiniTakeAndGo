const mongoose = require('mongoose');

const branchSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true,
        trim: true
    },
    endereco: String,
    cnpj: String
}, {
    timestamps: true
});

const Branch = mongoose.model('Branch', branchSchema);

module.exports = Branch;
