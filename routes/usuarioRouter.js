const express = require('express');
const usuarioController = require('../controllers/usuarioController');
const router = express.Router();

router.get('/', usuarioController.listar);
router.post('/', usuarioController.salvar);
router.get('/:codigo', usuarioController.buscarPorCodigo);
router.put('/:codigo', usuarioController.atualizar);
router.delete('/:codigo', usuarioController.excluir);

module.exports = router;