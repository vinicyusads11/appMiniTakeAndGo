const Bag = require('../models/Bag');
const BagItem = require('../models/BagItem'); // Assumindo que você tem um modelo para os itens da cesta

// Criar uma nova cesta
exports.createBag = async (req, res) => {
    try {
        const bag = new Bag({
            usuario: req.body.usuario,
            itens: [], // Inicialmente vazio
            valorTotal: 0 // Inicialmente 0
        });
        await bag.save();
        res.status(201).send(bag);
    } catch (error) {
        res.status(400).send(error);
    }
};

// Obter cesta de um usuário específico
exports.getBagByUser = async (req, res) => {
    try {
        const bag = await Bag.findOne({ usuario: req.params.userId }).populate('itens');
        if (!bag) {
            return res.status(404).send();
        }
        res.status(200).send(bag);
    } catch (error) {
        res.status(500).send(error);
    }
};

// Adicionar item à cesta
exports.addItemToBag = async (req, res) => {
    try {
        const bag = await Bag.findById(req.params.bagId);
        const item = new BagItem(req.body); // Cria um novo item com base no corpo da requisição
        await item.save();
        bag.itens.push(item);
        // Aqui você pode recalcular o valorTotal se necessário
        await bag.save();
        res.status(200).send(bag);
    } catch (error) {
        res.status(400).send(error);
    }
};

// Remover item da cesta
exports.removeItemFromBag = async (req, res) => {
    try {
        const bag = await Bag.findById(req.params.bagId);
        const itemIndex = bag.itens.indexOf(req.params.itemId);
        if (itemIndex > -1) {
            bag.itens.splice(itemIndex, 1);
            // Aqui você pode recalcular o valorTotal se necessário
            await bag.save();
        }
        res.status(200).send(bag);
    } catch (error) {
        res.status(400).send(error);
    }
};

// Atualizar cesta
exports.updateBag = async (req, res) => {
    // Lógica para atualizar a cesta (itens, valorTotal, etc.)
};

// Deletar cesta
exports.deleteBag = async (req, res) => {
    try {
        const bag = await Bag.findByIdAndRemove(req.params.bagId);
        if (!bag) {
            return res.status(404).send();
        }
        res.status(200).send({ message: 'Cesta deletada com sucesso' });
    } catch (error) {
        res.status(500).send(error);
    }
};

// ...outros métodos específicos que você possa precisar para a cesta

module.exports = {
    createBag,
    getBagByUser,
    addItemToBag,
    removeItemFromBag,
    updateBag,
    deleteBag
    // ...exportar outros métodos
};
