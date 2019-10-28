const request = require('supertest')
const app = require('../../../src/app/app');

describe('Testes de endpoints da aplicação', () => {
  test('Testa rota de healthCheck', async () => {
    const response = await request(app).get('/healthcheck')
    expect(response.body).toEqual({
      status: 'UP'
    })
  });
});