const mongoose = require('mongoose');

const stockSchema = new mongoose.Schema({
    produto: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product'
    },
    quantidade: {
        type: Number,
        required: true
    },
    filial: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Branch'
    }
}, {
    timestamps: true
});

const Stock = mongoose.model('Stock', stockSchema);

module.exports = Stock;
