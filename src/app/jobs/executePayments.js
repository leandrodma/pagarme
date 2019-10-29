const {payable, client} = require('../models')
const Sequelize = require('sequelize');
const op = Sequelize.Op;

const {DEBIT, CREDIT} = require('../../config/config')

class executePayments{
	async pay(){
		
		const payables =  await payable.findAll({
			where: {
				status: CREDIT.PAYMENT_STATUS,
				payment_date: {
					[op.lte]: new Date(),
				}
			},
			include: [
					{model: client}
			]
		}).then((payments) => {
			try {
				payments.forEach(function(payment) {
					payment.client.update({
						waiting_funds: payment.client.waiting_funds - payment.value, 
						available_funds: payment.client.available_funds + payment.value, 
					})
					payment.update({
						status: DEBIT.PAYMENT_STATUS,
					})
				});
				
			} catch (error) {
				console.log(`${error.message}`)
			}
		})

		return payables;
	}
}


module.exports = new executePayments()