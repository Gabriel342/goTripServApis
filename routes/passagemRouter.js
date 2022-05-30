const express = require('express');
const passagemController = require('../controllers/passagemController');
const router = express.Router();

router.get('/', passagemController.listar);
router.post('/', passagemController.salvar);
router.get('/:codigo', passagemController.buscarPorCodigo);
router.put('/:codigo', passagemController.atualizar);
router.delete('/:codigo', passagemController.excluir);

module.exports = router;