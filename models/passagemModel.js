const mongoose = require('mongoose');
const passagemSchema = require('./schemas/passagemSchema');
module.exports = mongoose.model('passagem', passagemSchema);