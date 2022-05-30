const mongoose = require('mongoose');

const passagemSchema = new mongoose.Schema({
    codigo: Number,
    voo: { type: mongoose.Schema.Types.ObjectId, ref: 'voo' },
    cliente: { type: mongoose.Schema.Types.ObjectId, ref: 'cliente' },
    total: Number
});

module.exports = mongoose.model('passagem', passagemSchema);