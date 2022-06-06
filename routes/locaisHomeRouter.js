const express = require('express');
const locaisHomeController = require('../controllers/locaisHomeController');
const router = express.Router();

router.get('/', locaisHomeController.listar);
router.post('/', locaisHomeController.salvar);
router.get('/:codigo', locaisHomeController.buscarPorCodigo);
router.put('/:codigo', locaisHomeController.atualizar);
router.delete('/:codigo', locaisHomeController.excluir);

module.exports = router;