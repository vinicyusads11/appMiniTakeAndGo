const Category = require('../models/Category');

// Criar uma nova categoria
exports.createCategory = async (req, res) => {
    try {
        const { nome, descricao, imagemURL } = req.body;
        const category = new Category({
            nome,
            descricao,
            imagemURL
        });
        await category.save();
        res.status(201).send(category);
    } catch (error) {
        res.status(400).send(error);
    }
};

// Obter todas as categorias
exports.getAllCategories = async (req, res) => {
    try {
        const categories = await Category.find({});
        res.status(200).send(categories);
    } catch (error) {
        res.status(500).send(error);
    }
};

// Obter uma categoria específica pelo ID
exports.getCategoryById = async (req, res) => {
    try {
        const category = await Category.findById(req.params.id);
        if (!category) {
            return res.status(404).send({ message: 'Categoria não encontrada' });
        }
        res.status(200).send(category);
    } catch (error) {
        res.status(500).send(error);
    }
};

// Atualizar uma categoria
exports.updateCategory = async (req, res) => {
    try {
        const { nome, descricao, imagemURL } = req.body;
        const category = await Category.findByIdAndUpdate(req.params.id, {
            nome,
            descricao,
            imagemURL
        }, { new: true, runValidators: true });

        if (!category) {
            return res.status(404).send({ message: 'Categoria não encontrada' });
        }
        res.status(200).send(category);
    } catch (error) {
        res.status(400).send(error);
    }
};

// Deletar uma categoria
exports.deleteCategory = async (req, res) => {
    try {
        const category = await Category.findByIdAndDelete(req.params.id);
        if (!category) {
            return res.status(404).send({ message: 'Categoria não encontrada' });
        }
        res.status(200).send({ message: 'Categoria deletada com sucesso' });
    } catch (error) {
        res.status(500).send(error);
    }
};

module.exports = {
    createCategory,
    getAllCategories,
    getCategoryById,
    updateCategory,
    deleteCategory
};
