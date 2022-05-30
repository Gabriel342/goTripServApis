const mongoose = require('mongoose');

const locaisHomeSchema = new mongoose.Schema({
    codigo: Number,
    local: {type: mongoose.Schema.Types.ObjectId, ref: 'passagem'}
});

module.exports = mongoose.model('locaisHome', locaisHomeSchema);