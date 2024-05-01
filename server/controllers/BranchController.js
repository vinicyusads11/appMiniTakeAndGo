const Branch = require('../models/Branch');

// Cria uma nova filial
exports.createBranch = async (req, res) => {
  try {
    const newBranch = new Branch({
      cnpj: req.body.cnpj,
      address: req.body.address,
      name: req.body.name
    });
    await newBranch.save();
    res.status(201).send(newBranch);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Busca uma filial pelo ID
exports.getBranch = async (req, res) => {
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

// Atualiza uma filial pelo ID
exports.updateBranch = async (req, res) => {
  try {
    const updatedBranch = await Branch.findByIdAndUpdate(req.params.id, {
      cnpj: req.body.cnpj,
      address: req.body.address,
      name: req.body.name
    }, { new: true });
    if (!updatedBranch) {
      return res.status(404).send({ message: 'Filial não encontrada para atualização' });
    }
    res.status(200).send(updatedBranch);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Deleta uma filial pelo ID
exports.deleteBranch = async (req, res) => {
  try {
    const deletedBranch = await Branch.findByIdAndDelete(req.params.id);
    if (!deletedBranch) {
      return res.status(404).send({ message: 'Filial não encontrada para exclusão' });
    }
    res.status(204).send(); // Nenhum conteúdo para retornar, mas indica sucesso
  } catch (error) {
    res.status(500).send(error);
  }
};
