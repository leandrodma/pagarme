const request = require('supertest')
const app = require('../../../src/app/app')

describe('Testes Referente a entidade de cliente',  () => {
	
	test('Cria um cliente', async () => {

		await request(app)
					.post(`/clients/`)
					.send({name:'John Doe'})
					.set('Accept', /application\/json/)
					.expect(201)
	})

})
