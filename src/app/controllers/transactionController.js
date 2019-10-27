const { Client } = require('../models')

class TransactionController{

	async create(req, res, next){

		try {
			const client = await Client.findByPk(req.params.ClientID);

			console.log('status da transacao',client);
	
			if(false == true) return res.sendStatus(201)
	
		} catch (error) {
			console.error(`${error}`)
			return res.status(400).send(`${error}`);
		}
	}
}

module.exports = new TransactionController()