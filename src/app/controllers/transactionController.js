const {
	CREDIT,
	DEBIT
} = require('../../config/config')

const {
	client,
	transaction,
	payable
} = require('../models/')

class TransactionController {

	async create(req, res, next) {

		try {

			const clientTransaction = await client.findByPk(req.params.clientID);

			if (!clientTransaction) throw Error('Client not found')

			req.body.client_id = clientTransaction.id;

			const newTransaction = await transaction.create(req.body)

			const newPayable = await payable.create(TransactionController._makePayablePayload(newTransaction))

			if (newTransaction.payment_method === DEBIT.CARD) {
				await clientTransaction.update({
					available_funds: clientTransaction.available_funds + newPayable.value
				})
			} else {
				await clientTransaction.update({
					waiting_funds: clientTransaction.waiting_funds + newPayable.value
				})
			}

			return res.status(201).json(newTransaction)

		} catch (error) {
			console.log(`${error.message}`)
			return res.status(404).send(`${error.message}`);
		}
	}

	async index(req, res, next) {
		const clientTransaction = await client.findByPk(req.params.clientID);
		if (!clientTransaction) throw Error('Client not found')

		return res.json(await transaction.findAll({
			raw: true,
			where: {
				client_id: clientTransaction.id
			}
		}));
	}
}



TransactionController._calculateFee = function (value, fee) {
	return (value - (value * (fee / 100)))
}

TransactionController._makePayablePayload = function (newTransaction) {
	let valueTransactionDiscounted = 0
	let payableStatus = ''
	let payableDate = ''
	let date = new Date()

	if (newTransaction.payment_method === DEBIT.CARD) {
		date.setDate(date.getDate() + DEBIT.DAYS_TO_PAY);

		valueTransactionDiscounted = this._calculateFee(newTransaction.value, DEBIT.FEE)
		payableStatus = DEBIT.PAYMENT_STATUS
		payableDate = date
	} else {
		date.setDate(date.getDate() + CREDIT.DAYS_TO_PAY);

		valueTransactionDiscounted = TransactionController._calculateFee(newTransaction.value, CREDIT.FEE)
		payableStatus = CREDIT.PAYMENT_STATUS
		payableDate = date
	}

	payableDate = `${payableDate.getFullYear()}-${payableDate.getMonth()}-${payableDate.getDate()}`

	return {
		transaction_id: newTransaction.id,
		payment_date: payableDate,
		value: valueTransactionDiscounted,
		status: payableStatus
	}

}

module.exports = new TransactionController()