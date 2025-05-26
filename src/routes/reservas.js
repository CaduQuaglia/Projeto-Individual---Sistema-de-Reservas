const express = require('express');
const router = express.Router();
const reservaController = require('../controllers/reservaController');

// GET /reservas
router.get('/', reservaController.listar);

// POST /reservas/adicionar
router.post('/adicionar', reservaController.adicionar);

// POST /reservas/remover/:id
router.post('/remover/:id', reservaController.remover);

module.exports = router;