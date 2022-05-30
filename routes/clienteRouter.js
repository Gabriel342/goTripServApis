const express = require('express');
const clienteController = require('../controllers/clienteController');
const router = express.Router();

router.get('/', clienteController.listar);
router.post('/', clienteController.salvar);
router.get('/:codigo', clienteController.buscarPorCodigo);
router.put('/:codigo', clienteController.atualizar);
router.delete('/:codigo', clienteController.excluir);

module.exports = router;
