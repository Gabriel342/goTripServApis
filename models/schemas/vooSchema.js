const mongoose = require('mongoose');

const vooSchema = new mongoose.schema({
    codigo: Number,
    origem: String,
    destino: String,
    data_ida: Date,
    data_volta: Date,
    preco: Number,
    taxas: Number,
    qtde_pessoas: Number,
    local: {
        codigo: String,
        capital: String,
        foto: String,
        descricao: String
    }
});

module.exports = vooSchema;

/*
local: {
        codigo: String,
        capital: String,
        foto: String,
        descricao: String
    }
*/