const Branch = require('../models/Branch');

// Criar uma nova filial
exports.createBranch = async (req, res) => {
    try {
        const { nome, endereco, cnpj } = req.body;
        const branch = new Branch({
            nome,
            endereco,
            cnpj
        });
        await branch.save();
        res.status(201).send(branch);
    } catch (error) {
        res.status(400).send(error);
    }
};

// Obter todas as filiais
exports.getAllBranches = async (req, res) => {
    try {
        const branches = await Branch.find({});
        res.status(200).send(branches);
    } catch (error) {
        res.status(500).send(error);
    }
};

// Obter uma filial específica pelo ID
exports.getBranchById = async (req, res) => {
    try {
        const branch = await Branch.findById(req.params.id);
        if (!branch) {
            return res.status(404).send({ message: 'Filial não encontrada' });
        }
        res.status(200).send(branch);
    } catch (error) {
        res.status(500).send(error);
    }
};

// Atualizar uma filial
exports.updateBranch = async (req, res) => {
    try {
        const { nome, endereco, cnpj } = req.body;
        const branch = await Branch.findByIdAndUpdate(req.params.id, {
            nome,
            endereco,
            cnpj
        }, { new: true, runValidators: true });

        if (!branch) {
            return res.status(404).send({ message: 'Filial não encontrada' });
        }
        res.status(200).send(branch);
    } catch (error) {
        res.status(400).send(error);
    }
};

// Deletar uma filial
exports.deleteBranch = async (req, res) => {
    try {
        const branch = await Branch.findByIdAndDelete(req.params.id);
        if (!branch) {
            return res.status(404).send({ message: 'Filial não encontrada' });
        }
        res.status(200).send({ message: 'Filial deletada com sucesso' });
    } catch (error) {
        res.status(500).send(error);
    }
};

module.exports = {
    createBranch,
    getAllBranches,
    getBranchById,
    updateBranch,
    deleteBranch
};
