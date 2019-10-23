module.exports = (Sequelize, DataTypes) => {
	
	const Payable = Sequelize.define('Payable',{
		id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
		client_id: DataTypes.INTEGER,
		transaction_id: DataTypes.INTEGER,
		payment_date: DataTypes.DATE,
		value: DataTypes.FLOAT,
		status: DataTypes.STRING,
	});

	return Payable
}

