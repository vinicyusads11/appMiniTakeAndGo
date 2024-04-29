const BagItem = require('../models/BagItem');
const Product = require('../models/Product'); // Assumindo que você tem um modelo para os produtos

// Criar um novo item da cesta
exports.createBagItem = async (req, res) => {
    try {
        const { produto, quantidade } = req.body;
        // Encontre o produto para obter o preço e calcular o subtotal
        const product = await Product.findById(produto);

        if (!product) {
            return res.status(404).send({ message: 'Produto não encontrado' });
        }

        // Aqui você pode adicionar lógica para verificar se há estoque suficiente

        const subtotal = product.preco * quantidade;

        const bagItem = new BagItem({
            produto,
            quantidade,
            subtotal
        });

        await bagItem.save();

        res.status(201).send(bagItem);
    } catch (error) {
        res.status(400).send(error);
    }
};

// Atualizar um item da cesta
exports.updateBagItem = async (req, res) => {
    try {
        const { quantidade } = req.body;
        const bagItem = await BagItem.findById(req.params.id);

        if (!bagItem) {
            return res.status(404).send({ message: 'Item da cesta não encontrado' });
        }

        // Novamente, verifique se o novo produto está disponível, se você está mudando o produto
        const product = await Product.findById(bagItem.produto);
        bagItem.quantidade = quantidade;
        bagItem.subtotal = product.preco * quantidade;

        await bagItem.save();

        res.status(200).send(bagItem);
    } catch (error) {
        res.status(400).send(error);
    }
};

// Deletar um item da cesta
exports.deleteBagItem = async (req, res) => {
    try {
        const bagItem = await BagItem.findById(req.params.id);

        if (!bagItem) {
            return res.status(404).send({ message: 'Item da cesta não encontrado' });
        }

        await bagItem.remove();

        res.status(200).send({ message: 'Item da cesta removido com sucesso' });
    } catch (error) {
        res.status(500).send(error);
    }
};

module.exports = {
    createBagItem,
    updateBagItem,
    deleteBagItem
};
