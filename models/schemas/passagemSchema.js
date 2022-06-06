const mongoose = require('mongoose');

const passagemSchema = new mongoose.Schema({
    codigo: Number,
    origem: String,
    destino: String,
    preco: Number,
    qtde_pessoas: Number,
    data_ida: Date,
    data_volta: Date
});

module.exports = passagemSchema;

/*
local: {
        codigo: String,
        capital: String,
        foto: String,
        descricao: String
    }
*/