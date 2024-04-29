const Stock = require('../models/Stock');
const Product = require('../models/Product'); // Assumindo que você tem um modelo para os produtos
const Branch = require('../models/Branch'); // Assumindo que você tem um modelo para as filiais

// Adicionar ou atualizar estoque de um produto
exports.modifyStock = async (req, res) => {
    try {
        const { produto, quantidade, filial } = req.body;
        // Verifique se o produto e a filial existem
        const existingProduct = await Product.findById(produto);
        const existingBranch = await Branch.findById(filial);

        if (!existingProduct || !existingBranch) {
            return res.status(404).send({ message: 'Produto ou filial não encontrado' });
        }

        // Verifique se o item já existe no estoque para essa filial
        let stockItem = await Stock.findOne({ produto, filial });

        if (stockItem) {
            // Se sim, atualize a quantidade
            stockItem.quantidade += quantidade;
        } else {
            // Se não, crie um novo item de estoque
            stockItem = new Stock({ produto, quantidade, filial });
        }

        await stockItem.save();
        res.status(200).send(stockItem);
    } catch (error) {
        res.status(400).send(error);
    }
};

// Obter estoque de uma filial
exports.getStockByBranch = async (req, res) => {
    try {
        const { filial } = req.params;
        const stock = await Stock.find({ filial }).populate('produto');
        res.status(200).send(stock);
    } catch (error) {
        res.status(500).send(error);
    }
};

// Remover itens do estoque
exports.removeFromStock = async (req, res) => {
    try {
        const { produto, quantidade, filial } = req.body;

        let stockItem = await Stock.findOne({ produto, filial });

        if (stockItem && stockItem.quantidade >= quantidade) {
            stockItem.quantidade -= quantidade;
            await stockItem.save();
            res.status(200).send(stockItem);
        } else {
            res.status(404).send({ message: 'Não há quantidade suficiente no estoque ou o item não existe' });
        }
    } catch (error) {
        res.status(500).send(error);
    }
};

module.exports = {
    modifyStock,
    getStockByBranch,
    removeFromStock
};
