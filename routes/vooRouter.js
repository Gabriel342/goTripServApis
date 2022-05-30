const express = require('express');
const vooController = require('../controllers/vooController');
const router = express.Router();

router.get('/', vooController.listar);
router.post('/', vooController.salvar);
router.get('/:codigo', vooController.buscarPorCodigo);
router.put('/:codigo', vooController.atualizar);
router.delete('/:codigo', vooController.excluir);

module.exports = router;