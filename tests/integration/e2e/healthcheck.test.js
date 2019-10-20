const request = require('supertest')
const app = require('../../../src/app');

// fecha as conexões com o servidor, quando terminar os testes

describe('inicio dos testes inerentes a aplicação', () => {
  test('Testa rota de healthCheck', async () => {
      const response = await request(app).get('/healthcheck')
      expect(response.body).toEqual({ status: 'UP' })
    });
});
