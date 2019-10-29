const uuid = require('uuid/v4')
const request = require('supertest')
const app = require('../../../src/app/app')
const {client} = require('../../../src/app/models')

describe('Testes Referente a entidade de cliente',  () => {
	
	test('Cria um cliente', async () => {

		await request(app)
					.post(`/clients`)
					.send({name:'John Doe'})
					.set('Accept', /application\/json/)
					.expect(201)
	})

	test('Verifica saldo do cliente', async () => {
		const newerClient = await client.create({ id: uuid(), name: 'Jane Doe'}) 

		const resultClient  = await request(app)
																.get(`/clients/${newerClient.id}/funds`)
																.set('Accept', /application\/json/)
																.expect(200)

		expect(JSON.parse(resultClient.text))
					.toEqual({
						"available": 0,
						"waiting_funds": 0
					})

	})

})
