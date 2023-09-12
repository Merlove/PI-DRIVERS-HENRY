const Driver = require('../models/Driver'); 

router.get('/', async (req, res) => {
  try {
    const drivers = await Driver.findAll(); 
    drivers.forEach((driver) => {
      if (!driver.image) {
        driver.image = 'imagen_por_defecto.jpg';
      }
    });

    res.json(drivers);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener conductores' });
  }
});