const {CREDIT, DEBIT} = require('../../src/config/config')
const {client, transaction, payable} = require('../../src/app/models')
const transactionPayload = require('../transaction')
const payablePayload = require('../payable')

describe('Teste entidade Payable', () => {
  test('Cria uma nova transação e um novo pagamento', async () => {
		const newClient = await client.create({ name: 'Joana Doe'})
		transactionPayload.client_id = newClient.id

		const newTransaction = await transaction.create(transactionPayload)

		payablePayload.transaction_id = newTransaction.id

		const newPayable = payable.create(payablePayload)

		expect(newPayable).not.toBeNull()
	})

})