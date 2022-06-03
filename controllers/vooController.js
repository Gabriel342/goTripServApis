const vooModel = require('../models/vooModel');

class vooController {

    async salvar(req, res) {
        const max = await vooModel.findOne({}).sort({ codigo: -1 });
        const voo = req.body;
        voo.codigo = max == null ? 1 : max.codigo + 1;

        const resultado = await vooModel.create(voo);
        res.status(201).json(resultado);
    }

    async listar(req, res) {
        const resultado = await vooModel
            .find({});
        res.status(200).json(resultado);
    }

    async buscarPorCodigo(req, res) {
        const codigo = req.params.codigo;
        const resultado = await vooModel.findOne({ 'codigo': codigo });
        res.status(200).json(resultado);
    }

    async atualizar(req, res) {
        const codigo = req.params.codigo;
        const _id = String((await vooModel.findOne({ 'codigo': codigo }))._id);

        const voo = req.body;

        await vooModel.findByIdAndUpdate(String(_id), voo);
        res.status(200).send();
    }

    async excluir(req, res) {
        const codigo = req.params.codigo;
        const _id = String((await vooModel.findOne({ 'codigo': codigo }))._id);
        await vooModel.findByIdAndRemove(String(_id));
        res.status(200).send();
    }
}

module.exports = new vooController();