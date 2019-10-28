const uuid = require('uuid/v4')
const request = require('supertest')
const app = require('../../../src/app/app')
const {Client} = require('../../../src/app/models')

const PayloadTransaction = require('./transaction')

describe('Testes Referente a transação',  () => {
	
	test('Tenta criar uma transação com um cliente inválido', async () => {

		await request(app)
					.post(`/clients/${uuid()}/checkout`)
					.send(PayloadTransaction)
					.set('Accept', /application\/json/)
					.expect(404)
	})

	test('Cria uma nova transação com um cliente válido', async () => {

		const newerClient = await Client.create({ name: 'Jane Doe'}) 

		const transaction = await request(app)
					.post(`/clients/${newerClient.id}/checkout`)
					.send(PayloadTransaction)
					.set('Accept', /application\/json/)
					.expect(201)
	})
})
