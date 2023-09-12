const request = require('supertest');
const app = require('../App'); 

describe('Pruebas de las rutas de equipos', () => {
  it('Debería obtener todos los equipos', async () => {
    const response = await request(app).get('/api/teams');
    expect(response.statusCode).toBe(200);

  });

});