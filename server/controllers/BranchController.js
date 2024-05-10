const Filial = require('../database/models/BranchSchema');

// Cria uma nova filial
exports.createFilial = async (req, res) => {
  try {
    const novaFilial = new Filial({
      cnpj: req.body.cnpj,
      endereco: req.body.endereco,
      nome: req.body.nome,
      telefone: req.body.telefone
    });
    await novaFilial.save();
    res.status(201).send(novaFilial);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Busca uma filial pelo ID
exports.getFilial = async (req, res) => {
  try {
    const filial = await Filial.findById(req.params.id);
    if (!filial) {
      return res.status(404).send({ message: 'Filial não encontrada' });
    }
    res.status(200).send(filial);
  } catch (error) {
    res.status(500).send(error);
  }
};

// Atualiza uma filial pelo ID
exports.updateFilial = async (req, res) => {
  try {
    const filialAtualizada = await Filial.findByIdAndUpdate(req.params.id, {
      cnpj: req.body.cnpj,
      endereco: req.body.endereco,
      nome: req.body.nome,
      telefone: req.body.telefone
    }, { new: true });
    if (!filialAtualizada) {
      return res.status(404).send({ message: 'Filial não encontrada para atualização' });
    }
    res.status(200).send(filialAtualizada);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Deleta uma filial pelo ID
exports.deleteFilial = async (req, res) => {
  try {
    const filialDeletada = await Filial.findByIdAndDelete(req.params.id);
    if (!filialDeletada) {
      return res.status(404).send({ message: 'Filial não encontrada para exclusão' });
    }
    res.status(204).send(); // Nenhum conteúdo para retornar, mas indica sucesso
  } catch (error) {
    res.status(500).send(error);
  }
};