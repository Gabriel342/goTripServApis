const viagemModel = require('../models/viagemModel');
const vooModel = require('../models/clienteModel');
const clienteModel = require('../models/clienteModel')

class viagemController {
    async salvar(req, res) {
        const max = await viagemModel.findOne({}).sort({ codigo: -1 });
        const viagem = req.body;
        viagem.codigo = max == null ? 1 : max.codigo + 1;

        const resultado = await viagemModel.create(viagem);
        res.status(201).json(resultado);
    }

    async listar(req, res) {
        const resultado = await viagemModel.find({ 'usuarioId': req.params.usuarioId });
        res.status(200).json(resultado);
    }

    async buscarPorCodigo(req, res) {
        const { usuarioId, codigo } = req.params;
        const resultado = await pedidoModel.findOne({ 'codigo': codigo, 'usuarioId': usuarioId });
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