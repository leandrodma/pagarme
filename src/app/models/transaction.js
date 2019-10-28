
const {CREDIT_CARD_FEE, DEBIT_CARD_FEE} = require('../../config/config')
const uuid = require('uuid/v4')

module.exports = (Sequelize, DataTypes) => {
	
	const transaction = Sequelize.define('transaction', {
		id: {
			type: DataTypes.UUID, 
			primaryKey: true, 
			defaultValue: uuid()
		},
		payment_method: {
			type: DataTypes.STRING,
			validate:{ isIn: [['debit_card', 'credit_card']]},
			set(value){
				this.setDataValue('payment_method', value)
				this.setDataValue( 'fee', (value === 'debit_card') ? DEBIT_CARD_FEE : CREDIT_CARD_FEE )
			}
		},
		description: DataTypes.STRING,
		card_number:{ 
			type: DataTypes.STRING,
			isCreditCard: true
		},
		card_name: DataTypes.STRING,
		card_valid_thru: {
			type: DataTypes.DATEONLY,
			set(value){
				const month = value.split('/')[0]
				const year = '20' + value.split('/')[1]
				const date = new Date(year,month, 0)
				const expiration_date = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}` 
				this.setDataValue('card_valid_thru', expiration_date.toString());
			}
		},
		card_cvv: DataTypes.INTEGER(3).ZEROFILL,
		value: DataTypes.INTEGER.UNSIGNED,
		fee: DataTypes.INTEGER(2)
	});

	return transaction
}

