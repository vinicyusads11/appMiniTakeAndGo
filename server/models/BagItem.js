const mongoose = require('mongoose');

const bagItemSchema = new mongoose.Schema({
    produto: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true
    },
    quantidade: {
        type: Number,
        required: true,
        min: 1
    },
    subtotal: Number
}, {
    timestamps: true
});

const BagItem = mongoose.model('BagItem', bagItemSchema);

module.exports = BagItem;
