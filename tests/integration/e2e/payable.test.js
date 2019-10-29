const uuid = require('uuid/v4')
const request = require('supertest')
const app = require('../../../src/app/app')
const {client} = require('../../../src/app/models')
const payablePayload = require('../../payable')
const transactionPayload = require('../../transaction')

describe('Testes Referente a transação',  () => {
	
	test('Tenta criar uma transação com um cliente inválido', async () => {

		await request(app)
					.post(`/clients/${uuid()}/checkout`)
					.send(transactionPayload)
					.set('Accept', /application\/json/)
					.expect(404)
	})

	test('Cria uma nova transação com um cliente válido', async () => {

		const newerClient = await client.create({ id: uuid(), name: 'Jane Doe'}) 

		const transaction = await request(app)
					.post(`/clients/${newerClient.id}/checkout`)
					.send(transactionPayload)
					.set('Accept', /application\/json/)
					.expect(201)
	})
})
