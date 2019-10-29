const executePayments = require('../jobs/executePayments')

class PayableController{
	async pay(req, res, next){
		try {
			 await executePayments.pay()
			 res.sendStatus(200).json({message: 'Processed'})
		} catch (error) {
			console.log(`${error.message}`)
			res.sendStatus(500).json({message: error.message})
		}
	}
}

module.exports = new PayableController()