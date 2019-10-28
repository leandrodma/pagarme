const payload = require('../transaction')
const {client, transaction, payable} = require('../../src/app/models')

describe('Teste entidade Payable', () => {
  test('Cria uma nova e verifica se o pagamento foi incluido ', async () => {
		const newClient = await client.create({ name: 'Joana Doe'})

		payload.client_id = newClient.id
		const newTransaction = await transaction.create(payload)

		const countPayable = await payable.findOne({where: {transaction_id: newTransaction.id}})

		expect(countPayable).not.toBeNull()

	})
})