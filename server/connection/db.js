const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect('sua-uri-de-conexão', {
      useNewUrlParser: true,
      useUnifiedTopology: true
      // outras opções de configuração...
    });
    console.log('MongoDB conectado com sucesso.');
  } catch (err) {
    console.error('Conexão com MongoDB falhou:', err.message);
    // Encerra o processo com falha
    process.exit(1);
  }
};

module.exports = connectDB;
