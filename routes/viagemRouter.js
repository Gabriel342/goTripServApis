const express = require('express');
const viagemController = require('../controllers/viagemController');
const router = express.Router();

router.get('/', viagemController.listar);
router.post('/', viagemController.salvar);
router.get('/:codigo', viagemController.buscarPorCodigo);
router.put('/:codigo', viagemController.atualizar);
router.delete('/:codigo', viagemController.excluir);

module.exports = router;