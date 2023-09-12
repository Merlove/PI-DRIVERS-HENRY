const request = require('supertest');
const app = require('../App');

describe('Pruebas de las rutas de conductores', () => {
  it('Debería obtener todos los conductores', async () => {
    const response = await request(app).get('/api/drivers');
    expect(response.statusCode).toBe(200);
 
  });

});