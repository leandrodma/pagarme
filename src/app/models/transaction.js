module.exports = (Sequelize, DataTypes) => {
	
	const Transaction = Sequelize.define('Transaction',{
		id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
		payment_method: DataTypes.STRING,
		description: DataTypes.STRING,
		card_number: DataTypes.STRING,
		card_name: DataTypes.STRING,
		card_expirate_date: DataTypes.DATEONLY,
		card_cvv: DataTypes.INTEGER,
		value: DataTypes.FLOAT,
		fee: DataTypes.INTEGER
	});

	return Transaction
}

