const request = require('supertest')
const app = require('../../../src/app/app');

const PayloadTransaction = require('./transaction')

describe('Testes Referente a transação',  () => {
	
	test('Cria uma nova transação', (done) => {
    //Client.create({ id: 'fakeID', name: 'Jhon Doe'})
		console.log('trace 1')
		return request(app)
					.post('/clients/fakeID/checkout')
					.send(PayloadTransaction)
					.set('Accept', /application\/json/)
					.expect(201, done)
	})
})

jest.setTimeout(30000)
