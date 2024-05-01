const User = require('../models/User');

// Cria um novo usuário
exports.createUser = async (req, res) => {
  try {
    const newUser = new User({
      email: req.body.email,
      name: req.body.name,
      password: req.body.password, // Idealmente, você deve adicionar hashing à senha antes de salvá-la
      username: req.body.username
    });
    await newUser.save();
    res.status(201).send(newUser);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Busca um usuário pelo ID
exports.getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).send({ message: 'Usuário não encontrado' });
    }
    res.status(200).send(user);
  } catch (error) {
    res.status(500).send(error);
  }
};

// Atualiza um usuário pelo ID
exports.updateUser = async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, {
      email: req.body.email,
      name: req.body.name,
      password: req.body.password, // Novamente, considere a segurança da senha
      username: req.body.username
    }, { new: true });
    if (!updatedUser) {
      return res.status(404).send({ message: 'Usuário não encontrado para atualização' });
    }
    res.status(200).send(updatedUser);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Deleta um usuário pelo ID
exports.deleteUser = async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    if (!deletedUser) {
      return res.status(404).send({ message: 'Usuário não encontrado para exclusão' });
    }
    res.status(204).send(); // Nenhum conteúdo para retornar, mas indica sucesso
  } catch (error) {
    res.status(500).send(error);
  }
};
