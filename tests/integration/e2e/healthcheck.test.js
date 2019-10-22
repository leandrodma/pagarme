const request = require('supertest')
const app = require('../../../src/app/app');

// fecha as conexões com o servidor, quando terminar os testes

describe('Testes de endpoints da aplicação', () => {
  test('Testa rota de healthCheck', async () => {
      const response = await request(app).get('/healthcheck')
      expect(response.body).toEqual({ status: 'UP' })
    });

    test('Testa rota de checkout', async () => {
      await request(app)
            .post('/clients/1/checkout')
            .expect(200)
    });
});

describe('Testes para o checkout', () => {
  test('Teste de payload no checkout com cliente inválido', () => {
    
  })
})
