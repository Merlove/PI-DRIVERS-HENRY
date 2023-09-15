const express = require('express');
const router = express.Router();

const driversRouter = require('../routes/drivers');
const teamsRouter = require('../routes/teams');

router.use('/drivers', driversRouter);
router.use('/teams', teamsRouter);

module.exports = router;