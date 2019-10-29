const uuid = require('uuid/v4')
const request = require('supertest')
const app = require('../../../src/app/app')
const {
	client,
	transaction
} = require('../../../src/app/models')

const PayloadTransaction = require('../../transaction')

describe('Testes Referente a transação', () => {

	test('Tenta criar uma transação com um cliente inválido', async () => {

		await request(app)
			.post(`/clients/${uuid()}/checkout`)
			.send(PayloadTransaction)
			.set('Accept', /application\/json/)
			.expect(404)
	})

	test('Cria uma nova transação com um cliente válido', async () => {

		const newerClient = await client.create({
			name: 'Jane Doe'
		})

		await request(app)
			.post(`/clients/${newerClient.id}/checkout`)
			.send(PayloadTransaction)
			.set('Accept', /application\/json/)
			.expect(201)
	})

	test('Cria uma nova transação com um cliente válido', async () => {

		const newerClient = await client.create({
			name: 'Jane Doe'
		})

		await request(app)
			.post(`/clients/${newerClient.id}/checkout`)
			.send(PayloadTransaction)
			.set('Accept', /application\/json/)
			.expect(201)

		const countTransactions = await transaction.count({
			where: {
				client_id: newerClient.id
			}
		})

		expect(countTransactions).toBeGreaterThan(0)

	})

	
	test('Lista transações de um cliente', async () => {

		const newerClient = await client.create({ name: 'James Doe'})

		await request(app)
			.post(`/clients/${newerClient.id}/checkout`)
			.send(PayloadTransaction)
			.send(PayloadTransaction)
			.set('Accept', /application\/json/)
			.expect(201)

		const trans = 	await request(app)
			.get(`/clients/${newerClient.id}/transactions`)
			.set('Accept', /application\/json/)
			.expect(200)

	})


})