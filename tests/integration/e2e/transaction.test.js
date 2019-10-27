const request = require('supertest')
const app = require('../../../src/app/app')
const {Client} = require('../../../src/app/models')

const PayloadTransaction = require('./transaction')

describe('Testes Referente a transação',  () => {
	
	test('Tenta criar uma transação com um cliente inválido', async () => {

		await request(app)
					.post('/clients/fakeID/checkout')
					.send(PayloadTransaction)
					.set('Accept', /application\/json/)
					.expect(404)
	})

	test('Cria uma nova transação', async () => {

		await Client.create({ id: 'fakeID', name: 'Jhon Doe'})
		
		await request(app)
					.post('/clients/fakeID/checkout')
					.send(PayloadTransaction)
					.set('Accept', /application\/json/)
					.expect(201)
	})
})
