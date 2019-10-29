
const {DEBIT, CREDIT} = require('../../config/config')

module.exports = (Sequelize, DataTypes) => {
	
	const transaction = Sequelize.define('transaction', {
		id: {
			type: DataTypes.UUID, 
			primaryKey: true, 
			defaultValue: DataTypes.UUIDV4
		},
		client_id: DataTypes.UUID,
		payment_method: {
			type: DataTypes.STRING,
			set(value){
				this.setDataValue('payment_method', value)
				this.setDataValue( 'fee', (value === DEBIT.CARD) ? DEBIT.FEE : CREDIT.FEE )
			}
		},
		description: DataTypes.STRING,
		card_number:{ 
			type: DataTypes.STRING,
			isCreditCard: true,
			set(value){
				this.setDataValue('card_number', value.substr(-4));
			}
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
		card_cvv: {type: DataTypes.INTEGER, size: 3},
		value: DataTypes.INTEGER,
		fee: {type: DataTypes.INTEGER, size:2}
	});

	return transaction
}

