const express = require('express');
const router = express.Router();
const reservaController = require('../controllers/reservaController');

router.get('/', reservaController.listar);
router.post('/adicionar', reservaController.adicionar);
router.post('/remover/:idx', reservaController.remover);

module.exports = router;