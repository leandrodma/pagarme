const Payable = require('./payable')

module.exports = (Sequelize, DataTypes) => {
	
	const Transaction = Sequelize.define('Transaction', {
		id: {
			type: DataTypes.INTEGER.UNSIGNED, 
			primaryKey: true, 
			autoIncrement: true
		},
		client_id: DataTypes.INTEGER.UNSIGNED,
		payment_method: DataTypes.STRING,
		description: DataTypes.STRING,
		card_number: DataTypes.STRING,
		card_name: DataTypes.STRING,
		card_expirate_date: DataTypes.DATEONLY,
		card_cvv: DataTypes.INTEGER(3).ZEROFILL,
		value: DataTypes.INTEGER.UNSIGNED,
		fee: DataTypes.INTEGER(2)
	});

	return Transaction
}

