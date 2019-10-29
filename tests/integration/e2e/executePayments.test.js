const request = require('supertest')
const app = require('../../../src/app/app')
const executePayments = require('../../../src/app/jobs/executePayments')
const {client, payable} = require('../../../src/app/models')
const transactionPayload = require('../../transaction')
const {CREDIT, DEBIT} = require('../../../src/config/config')

describe('Teste do executor de pagamentos',() => {
  test('Cria uma transação, seta o pagamento para o dia anterior e executa o pagamento', async () => {
		const newerClient = await client.create({ name: 'Jhon Doe'})
		transactionPayload.client_id = newerClient.id 
		transactionPayload.payment_method = CREDIT.CARD

		const response = await request(app)
			.post(`/clients/${newerClient.id}/checkout`)
			.send(transactionPayload)
			.set('Accept', /application\/json/)
			.expect(201)

		const transaction = JSON.parse(response.text)

		let testPayable = await	payable.findOne({
			where: { transaction_id: transaction.id }
		})
		
		const statusPayable = testPayable.status

		date = new Date()

		testPayable.update({ payment_date: date.setDate(date.getDate() - 1) })

		await executePayments.pay()
	
		testPayable = await	payable.findOne({
			where: { transaction_id: transaction.id }
		})
	
		expect(testPayable.status).toBe(DEBIT.PAYMENT_STATUS)

	})
})