const mongoose = require('mongoose');
const vooSchema = require('./schemas/vooSchema');
module.exports = mongoose.model('voo', vooSchema);