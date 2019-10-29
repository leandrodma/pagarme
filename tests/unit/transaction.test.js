const payload = require('../transaction')
const {client, transaction} = require('../../src/app/models')

describe('Teste entidade Transaction', () => {
  test('Cria uma nova transação', async () => {
		const newClient = await client.create({ name: 'Joana Doe'})

		payload.client_id = newClient.id

		const newTransaction = await transaction.create(payload)

		expect(newTransaction).not.toBeNull()

	})
})