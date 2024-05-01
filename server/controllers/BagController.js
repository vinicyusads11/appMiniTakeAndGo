const Bag = require('../models/Bag');

// Cria uma nova cesta
exports.createBag = async (req, res) => {
  try {
    const newBag = new Bag({
      idBranch: req.body.idBranch,
      idUser: req.body.idUser,
      status: req.body.status,
      totalValue: req.body.totalValue
    });
    await newBag.save();
    res.status(201).send(newBag);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Busca uma cesta pelo ID
exports.getBag = async (req, res) => {
  try {
    const bag = await Bag.findById(req.params.id)
      .populate('idBranch')
      .populate('idUser');
    if (!bag) {
      return res.status(404).send({ message: 'Cesta não encontrada' });
    }
    res.status(200).send(bag);
  } catch (error) {
    res.status(500).send(error);
  }
};

// Atualiza uma cesta pelo ID
exports.updateBag = async (req, res) => {
  try {
    const updatedBag = await Bag.findByIdAndUpdate(req.params.id, {
      idBranch: req.body.idBranch,
      idUser: req.body.idUser,
      status: req.body.status,
      totalValue: req.body.totalValue
    }, { new: true });
    if (!updatedBag) {
      return res.status(404).send({ message: 'Cesta não encontrada para atualização' });
    }
    res.status(200).send(updatedBag);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Deleta uma cesta pelo ID
exports.deleteBag = async (req, res) => {
  try {
    const deletedBag = await Bag.findByIdAndDelete(req.params.id);
    if (!deletedBag) {
      return res.status(404).send({ message: 'Cesta não encontrada para exclusão' });
    }
    res.status(204).send(); // Nenhum conteúdo para retornar, mas indica sucesso
  } catch (error) {
    res.status(500).send(error);
  }
};
