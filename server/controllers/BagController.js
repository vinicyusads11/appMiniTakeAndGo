const Cesta = require('../database/models/BagSchema');

// Cria uma nova cesta
exports.createCesta = async (req, res) => {
  try {
    const novaCesta = new Cesta({
      idFilial: req.body.idFilial,
      idUsuario: req.body.idUsuario,
      itens: req.body.itens,
      status: req.body.status,
      valorTotal: req.body.valorTotal
    });
    await novaCesta.save();
    res.status(201).send(novaCesta);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Busca uma cesta pelo ID
exports.getCesta = async (req, res) => {
  try {
    const cesta = await Cesta.findById(req.params.id)
      .populate('idFilial')
      .populate('idUsuario');
    if (!cesta) {
      return res.status(404).send({ message: 'Cesta não encontrada' });
    }
    res.status(200).send(cesta);
  } catch (error) {
    res.status(500).send(error);
  }
};

// Atualiza uma cesta pelo ID
exports.updateCesta = async (req, res) => {
  try {
    const cestaAtualizada = await Cesta.findByIdAndUpdate(req.params.id, {
      idFilial: req.body.idFilial,
      idUsuario: req.body.idUsuario,
      itens: req.body.itens,
      status: req.body.status,
      valorTotal: req.body.valorTotal
    }, { new: true });
    if (!cestaAtualizada) {
      return res.status(404).send({ message: 'Cesta não encontrada para atualização' });
    }
    res.status(200).send(cestaAtualizada);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Deleta uma cesta pelo ID
exports.deleteCesta = async (req, res) => {
  try {
    const cestaDeletada = await Cesta.findByIdAndDelete(req.params.id);
    if (!cestaDeletada) {
      return res.status(404).send({ message: 'Cesta não encontrada para exclusão' });
    }
    res.status(204).send(); // Nenhum conteúdo para retornar, mas indica sucesso
  } catch (error) {
    res.status(500).send(error);
  }
};