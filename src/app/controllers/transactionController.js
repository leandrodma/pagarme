const {client, transaction} = require('../models/')

class TransactionController{

	async create(req, res, next){

		try {

			const clientTransaction = await client.findByPk(req.params.clientID);

			if(!clientTransaction) throw Error('Client not found')
			
			req.body.client_id = client.id;

			const newTransaction = await transaction.create( req.body );
			
			return res.status(201).json(newTransaction)

		} catch (error) {	
			return res.status(404).send(`${error.message}`);
		}
	}
}

module.exports = new TransactionController()