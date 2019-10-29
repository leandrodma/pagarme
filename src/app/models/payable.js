module.exports = (Sequelize, DataTypes) => {
	
	const payable = Sequelize.define('payable',{
		id: {
			type: DataTypes.UUID, 
			primaryKey: true, 
			defaultValue: DataTypes.UUIDV4
		},
		transaction_id: DataTypes.UUID,
		payment_date: DataTypes.DATE,
		value: DataTypes.INTEGER,
		status: DataTypes.ENUM('waiting_funds', 'paid')
	});

	return payable
}

