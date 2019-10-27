const {Client} = require('../../src/app/models')

describe('Teste entidade Cliente', () => {
  test('Cria um cliente novo', async () => {
		Client.create({ name: 'John Doe' })		
	})
})