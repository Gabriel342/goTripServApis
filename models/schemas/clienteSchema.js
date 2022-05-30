const mongoose = require('mongoose');

const clienteSchema = new mongoose.Schema({
    codigo: Number,
    nome: {
        type: String,
        require: true
    },
    idade: {
        type: Number,
        require: true
    },
    saldoCarteira: Number,
    usuario: { type: mongoose.Schema.Types.ObjectId, ref: 'usuario' },
});

module.exports = clienteSchema;