const passagemModel = require('../models/passagemModel');
const vooModel = require('../models/clienteModel');
const clienteModel = require('../models/clienteModel')

class passagemController {
    async salvar(req, res) {
        const max = await passagemModel.findOne({}).sort({ codigo: -1 });
        const passagem = req.body;
        passagem.codigo = max == null ? 1 : max.codigo + 1;

        const resultado = await passagemModel.create(passagem);
        res.status(201).json(resultado);
    }

    async listar(req, res) {
        const resultado = await passagemModel.find({ 'usuarioId': req.params.usuarioId });
        res.status(200).json(resultado);
    }

    async buscarPorCodigo(req, res) {
        const { usuarioId, codigo } = req.params;
        const resultado = await pedidoModel.findOne({ 'codigo': codigo, 'usuarioId': usuarioId });
        res.status(200).json(resultado);

    }

    async atualizar(req, res) {
        const codigo = req.params.codigo;
        const _id = String((await passagemModel.findOne({ 'codigo': codigo }))._id);
        await passagemModel.findByIdAndUpdate(String(_id), req.body);
        res.status(200).send();
    }

    async excluir(req, res) {
        const codigo = req.params.codigo;
        const _id = String((await passagemModel.findOne({ 'codigo': codigo }))._id);
        await passagemModel.findByIdAndRemove(String(_id));
        res.status(200).send();
    }
}

module.exports = new passagemController();