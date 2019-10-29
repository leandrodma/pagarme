const {
	client
} = require('../models')
class ClientController {

	async create(req, res, next) {
		try {
			const newerClient = await client.create(req.body)
			return res.status(201).json(newerClient)
		} catch (error) {
			return res.status(500).send(`${error.message}`);
		}
	}

	async funds(req, res, next) {
		try {
			const consultClient = await client.findByPk(req.params.clientID)

			if (!consultClient) throw Error('client not found')

			return res.status(200).json({
				available: consultClient.available_funds,
				waiting_funds: consultClient.waiting_funds,
			})

		} catch (error) {
			return res.status(404).send(`${error.message}`);
		}
	}

}

module.exports = new ClientController();