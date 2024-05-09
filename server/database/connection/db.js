const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../../../.env') });

const mongoose = require('mongoose');

console.log(process.env.MONGO_URI);

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
        });
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (err) {
        console.error(`Error: ${err.message}`);
        process.exit(1);
    }
}

module.exports = connectDB;

// Teste de conexão com o banco de dados
if (require.main === module) {
    connectDB(); // Executa a conexão se este arquivo for executado diretamente
}