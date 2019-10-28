const { Client } = require('../models')
const { Checkout } = require('./checkoutController')

class ClientController{

	async checkout(req, res, next){
		const clientID = req.params.clientID;

		Client.findByPk(clientID).then( (client) => {
	
			try {

				if(!client) throw Error('Client not found');

				return res.json(client)


			} catch (error) {
				console.error(`${error}`)
				return res.status(404).send(`${error}`);
	
			}	
		});
	}
}

module.exports = new ClientController();
