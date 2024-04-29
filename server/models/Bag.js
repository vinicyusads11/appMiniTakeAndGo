const mongoose = require('mongoose');

const bagSchema = new mongoose.Schema({
    usuario: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    itens: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'bagItem'
    }],
    valorTotal: Number
}, {
    timestamps: true
});

const Bag = mongoose.model('Bag', bagSchema);

module.exports = Bag;
