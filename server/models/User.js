const mongoose = require('mongoose');

// Definição do esquema do usuário
const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true
    },
    idFilial: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Branch' // Ajuste conforme o nome do seu modelo de Filial
    },
    nome: {
        type: String,
        required: true,
        trim: true
    },
    senha: {
        type: String,
        required: true
    },
    tipoUsuario: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    }
    // Adicione outros campos conforme necessário
}, {
    timestamps: true // Adiciona automaticamente campos para `createdAt` e `updatedAt`
});

// Middleware do Mongoose para tratar/hasing da senha antes de salvar
userSchema.pre('save', async function (next) {
    const user = this;
    if (user.isModified('senha')) {
        // user.senha = await bcrypt.hash(user.senha, 8); // Exemplo de hashing com bcrypt
    }
    next();
});

// Métodos ou statics personalizados para o esquema podem ser adicionados aqui

const User = mongoose.model('User', userSchema);

module.exports = User;
