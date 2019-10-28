const request = require('supertest')
const app = require('../../../src/app/app');

const {
  Client
} = require('../../../src/app/models')

// fecha as conexões com o servidor, quando terminar os testes

describe('Testes de endpoints da aplicação', () => {
  test('Testa rota de healthCheck', async () => {
    const response = await request(app).get('/healthcheck')
    expect(response.body).toEqual({
      status: 'UP'
    })
  });
});