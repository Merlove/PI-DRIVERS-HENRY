const express = require('express');
const router = express.Router();

// Importa y utiliza las rutas de drivers y teams aquí
const driversRouter = require('./drivers');
const teamsRouter = require('./teams');

router.use('/drivers', driversRouter);
router.use('/teams', teamsRouter);

module.exports = router;