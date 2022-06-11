require("./mongodb");
const mongoose = require("mongoose");

const locaisHomeModel = require('../models/locaisHomeModel');
const locaisHomes = require('./locais.json');

const perfilModel = require('../models/perfilModel');
const perfis = require('./perfis.json')

const usuarioModel = require("../models/usuarioModel");
const usuarios = require("./usuarios.json");

const clienteModel = require("../models/clienteModel");
const clientes = require("./clientes.json");

const passagemModel = require('../models/passagemModel');
const passagens = require('./passagens.json');

const viagemModel = require("../models/viagemModel");
const viagens = require('./viagens.json');

async function carregarDados() {
  try {

    //caregando locaisHome
    await locaisHomeModel.deleteMany({});
    for (const locaisHome of locaisHomes) {
      await locaisHomeModel.create(locaisHome);
    }
    console.log("Carga de locais concluída!");

    //carga de perfis
    await perfilModel.deleteMany({});
    for (const perfil of perfis) {
      await perfilModel.create(perfil);
    }
    console.log("Carga de perfis concluída!");

    //carga de usuarios
    await usuarioModel.deleteMany({});
    for (const usuario of usuarios) {
      await perfilModel
        .findOne({ codigo: usuario.perfil })
        .then((perfil) => {
          usuario.perfil = perfil._id;
          return usuario;
        })
        .then(async (usuarioAlterado) => {
          await usuarioModel.create(usuarioAlterado);
        });
    }
    console.log("Carga de usuarios concluída!");

    //carga de clientes
    await clienteModel.deleteMany({});
    for await (const cliente of clientes) {
      await usuarioModel
        .findOne({ codigo: cliente.usuario })
        .then((usuario) => {
          cliente.usuario = usuario._id;
          return cliente;
        })
        .then(async (clienteUsuario) => {
          await clienteModel.create(clienteUsuario);
        });
    }
    console.log("Carga de clientes concluída!");

    //carga de passagens
    await passagemModel.deleteMany({});
    for (const passagem of passagens) {
      await passagemModel.create(passagem);
    }
    console.log("Carga de passagens concluída!")

    //carga de viagens
    await viagemModel.deleteMany({});

    for (const viagem of viagens) {
      await passagemModel
        .findOne({ codigo: viagem.passagem })
        .then((passagem) => {
          viagem.passagem = passagem._id;
        });

      await clienteModel.findOne({ codigo: viagem.cliente })
        .then((cliente) => {
          viagem.cliente = cliente._id;
        });
      await viagemModel.create(viagem);
    }
    console.log("Carga de viagens concluída!");

  } catch (e) {
    console.log(e);
  } finally {
    process.exit();
  }
}

carregarDados();