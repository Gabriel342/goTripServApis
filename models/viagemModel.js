const mongoose = require('mongoose');

const viagemSchema = new mongoose.Schema({
    codigo: Number,
    cliente: { type: mongoose.Schema.Types.ObjectId, ref: 'cliente' },
    passagem: { type: mongoose.Schema.Types.ObjectId, ref: 'passagem' },
    total: Number
})
module.exports = mongoose.model('viagem', viagemSchema);