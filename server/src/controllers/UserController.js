const Usuario = require('../database/models/UserSchema');

// Cria um novo usuário
exports.createUsuario = async (req, res) => {
  try {
    const novoUsuario = new Usuario({
      email: req.body.email,
      idFilial: req.body.idFilial,
      nome: req.body.nome,
      senha: req.body.senha, // Considere adicionar hashing à senha antes de salvar
      telefone: req.body.telefone,
      tipoUsuario: req.body.tipoUsuario
    });
    await novoUsuario.save();
    res.status(201).send(novoUsuario);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Busca um usuário pelo ID
exports.getUsuario = async (req, res) => {
  try {
    const usuario = await Usuario.findById(req.params.id);
    if (!usuario) {
      return res.status(404).send({ message: 'Usuário não encontrado' });
    }
    res.status(200).send(usuario);
  } catch (error) {
    res.status(500).send(error);
  }
};

// Atualiza um usuário pelo ID
exports.updateUsuario = async (req, res) => {
  try {
    const usuarioAtualizado = await Usuario.findByIdAndUpdate(req.params.id, {
      email: req.body.email,
      idFilial: req.body.idFilial,
      nome: req.body.nome,
      senha: req.body.senha, // Considere adicionar hashing à senha antes de salvar
      telefone: req.body.telefone,
      tipoUsuario: req.body.tipoUsuario
    }, { new: true });
    if (!usuarioAtualizado) {
      return res.status(404).send({ message: 'Usuário não encontrado para atualização' });
    }
    res.status(200).send(usuarioAtualizado);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Deleta um usuário pelo ID
exports.deleteUsuario = async (req, res) => {
  try {
    const usuarioDeletado = await Usuario.findByIdAndDelete(req.params.id);
    if (!usuarioDeletado) {
      return res.status(404).send({ message: 'Usuário não encontrado para exclusão' });
    }
    res.status(204).send(); // Nenhum conteúdo para retornar, mas indica sucesso
  } catch (error) {
    res.status(500).send(error);
  }
};