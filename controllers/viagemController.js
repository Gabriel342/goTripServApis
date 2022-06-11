const viagemModel = require('../models/viagemModel');
const passagemModel = require('../models/passagemModel');
const clienteModel = require('../models/clienteModel')

class viagemController {
    async salvar(req, res) {
        const max = await viagemModel.findOne({}).sort({ codigo: -1 });
        const viagem = req.body;
        viagem.codigo = max == null ? 1 : max.codigo + 1;

        const cliente = await clienteModel.findOne({ codigo: viagem.cliente.codigo });
        viagem.cliente = cliente._id;

        const passagem = await passagemModel.findOne({ codigo: viagem.passagem.codigo });
        viagem.passagem = passagem._id;

        const resultado = await viagemModel.create(viagem);
        res.status(201).json(resultado);
    }

    async listar(req, res) {
        const resultado = await viagemModel.find({ 'usuarioId': req.params.usuarioId }).populate('cliente').populate('passagem');
        res.status(200).json(resultado);
    }

    async buscarPorCodigo(req, res) {
        const { usuarioId, codigo } = req.params;
        const resultado = await viagemModel.findOne({ 'codigo': codigo, 'usuarioId': usuarioId }).populate('cliente').populate('passagem');
        res.status(200).json(resultado);

    }

    async atualizar(req, res) {
        const codigo = req.params.codigo;
        const _id = String((await viagemModel.findOne({ 'codigo': codigo }))._id);
        await viagemModel.findByIdAndUpdate(String(_id), req.body);
        res.status(200).send();
    }

    async excluir(req, res) {
        const codigo = req.params.codigo;
        const _id = String((await viagemModel.findOne({ 'codigo': codigo }))._id);
        await viagemModel.findByIdAndRemove(String(_id));
        res.status(200).send();
    }
}

module.exports = new viagemController();