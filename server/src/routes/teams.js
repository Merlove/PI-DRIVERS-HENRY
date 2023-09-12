const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const teams = await Team.findAll();

   
    res.json(teams);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener equipos' });
  }
});

module.exports = router;
