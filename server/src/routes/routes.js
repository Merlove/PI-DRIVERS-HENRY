const express = require('express');
const router = express.Router();
const { Driver, Team } = require('../models'); 
const { Op } = require('sequelize'); 


router.get('/drivers', async (req, res) => {
  try {
    const drivers = await Driver.findAll({
      include: Team, 
    });

    
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


router.get('/drivers/:idDriver', async (req, res) => {
  const { idDriver } = req.params;

  try {
    const driver = await Driver.findByPk(idDriver, {
      include: Team, 
    });

    if (!driver) {
      return res.status(404).json({ error: 'Conductor no encontrado' });
    }

   
    if (!driver.image) {
      driver.image = 'imagen_por_defecto.jpg'; 
    }

    res.json(driver);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener el detalle del conductor' });
  }
});


router.get('/drivers/name', async (req, res) => {
  const { name } = req.query;

  try {
    const drivers = await Driver.findAll({
      where: {
        name: { [Op.iLike]: `%${name}%` }, 
      },
      limit: 15, 
      include: Team, 
    });

    if (drivers.length === 0) {
      return res.status(404).json({ message: 'No se encontraron conductores' });
    }

 
    drivers.forEach((driver) => {
      if (!driver.image) {
        driver.image = 'imagen_por_defecto.jpg'; 
      }
    });

    res.json(drivers);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al buscar conductores por nombre' });
  }
});


router.post('/drivers', async (req, res) => {
  const { name, lastName, description, image, nationality, birthDate, teams } = req.body;

  try {

    const newDriver = await Driver.create({
      name,
      lastName,
      description,
      image,
      nationality,
      birthDate,
    });

   
    if (teams && teams.length > 0) {
      await newDriver.addTeams(teams);
    }

    res.status(201).json(newDriver);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al crear el conductor' });
  }
});


module.exports = router;
