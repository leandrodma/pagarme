const { Client, Transaction } = require('../models')
class TransactionController{

	async create(req, res, next){

		try {
			const client = await Client.findByPk(req.params.clientID);

			if(!client) throw Error('Client not found')
	
			const transaction = await Transaction.create( req.body );

			return res.status(201).json(transaction)

		} catch (error) {	
			return res.status(404).send(`${error.message}`);
		}
	}
}

module.exports = new TransactionController()