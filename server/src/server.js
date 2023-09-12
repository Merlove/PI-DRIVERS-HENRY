const express = require('express');
const cors = require('cors'); // Si necesitas habilitar CORS
const app = express();
const port = process.env.PORT || 5000; // Puerto de escucha

// Middleware para habilitar CORS (si es necesario)
app.use(cors());

// Middleware para parsear JSON
app.use(express.json());

// Importa y utiliza el archivo de rutas principal (index.js)
const routes = require('./routes/index');
app.use('/', routes);

// Ruta de inicio (puede ser una página de bienvenida)
app.get('/', (req, res) => {
  res.send('¡Bienvenido a la API de conductores y equipos!');
});

// Manejador de errores global
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Error interno del servidor' });
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
