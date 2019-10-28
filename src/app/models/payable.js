const uuid = require('uuid/v4')

module.exports = (Sequelize, DataTypes) => {
	
	const payable = Sequelize.define('payable',{
		id: {
			type: DataTypes.UUID, 
			primaryKey: true, 
			defaultValue: uuid()
		},
		transaction_id: DataTypes.UUID,
		payment_date: DataTypes.DATE,
		value: DataTypes.INTEGER.UNSIGNED,
		status: DataTypes.ENUM('waiting_funds', 'paid')
	});

	return payable
}

