const passagemModel = require('../models/passagemModel');

class PassagemController {

    async salvar(req, res) {
        const max = await passagemModel.findOne({}).sort({ codigo: -1 });
        const passagem = req.body;
        passagem.codigo = max == null ? 1 : max.codigo + 1;

        const resultado = await passagemModel.create(passagem);
        res.status(201).json(resultado);
    }

    async listar(req, res) {
        const resultado = await passagemModel
            .find({});
        res.status(200).json(resultado);
    }

    async buscarPorCodigo(req, res) {
        const codigo = req.params.codigo;
        const resultado = await passagemModel.findOne({ 'codigo': codigo });
        res.status(200).json(resultado);
    }

    async atualizar(req, res) {
        const codigo = req.params.codigo;
        const _id = String((await passagemModel.findOne({ 'codigo': codigo }))._id);

        const passagem = req.body;

        await passagemModel.findByIdAndUpdate(String(_id), passagem);
        res.status(200).send();
    }

    async excluir(req, res) {
        const codigo = req.params.codigo;
        const _id = String((await passagemModel.findOne({ 'codigo': codigo }))._id);
        await passagemModel.findByIdAndRemove(String(_id));
        res.status(200).send();
    }
}

module.exports = new PassagemController();