const mongoose = require('mongoose');

const locaisHomeSchema = new mongoose.Schema({
    codigo: Number,
    capital: String,
    foto: String,
    descricao: String,
});

module.exports = mongoose.model('locaisHome', locaisHomeSchema);