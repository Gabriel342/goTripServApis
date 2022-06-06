const locaisHomeModel = require('../models/locaisHomeModel');

class locaisHomeController {

    async salvar(req, res) {
        const max = await locaisHomeModel.findOne({}).sort({ codigo: -1 });
        const locaisHome = req.body;
        locaisHome.codigo = max == null ? 1 : max.codigo + 1;
        const resultado = await locaisHomeModel.create(locaisHome);
        res.status(201).json(resultado);
    }

    async listar(req, res) {
        const resultado = await locaisHomeModel.find({});
        res.status(200).json(resultado);
    }

    async buscarPorCodigo(req, res) {
        const codigo = req.params.codigo;
        const resultado = await locaisHomeModel.findOne({ 'codigo': codigo });
        res.status(200).json(resultado);
    }

    async atualizar(req, res) {
        const codigo = req.params.codigo;
        const _id = String((await locaisHomeModel.findOne({ 'codigo': codigo }))._id);
        await locaisHomeModel.findByIdAndUpdate(String(_id), req.body);
        res.status(200).send();
    }

    async excluir(req, res) {
        const codigo = req.params.codigo;
        const _id = String((await locaisHomeModel.findOne({ 'codigo': codigo }))._id);
        await locaisHomeModel.findByIdAndRemove(String(_id));
        res.status(200).send();
    }
}

module.exports = new locaisHomeController();