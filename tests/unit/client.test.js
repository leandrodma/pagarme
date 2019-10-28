const {client} = require('../../src/app/models')

describe('Teste entidade Cliente', () => {
  test('Cria um cliente novo', async () => {
		await client.create({ name: 'Jhon Doe'})
	})
})