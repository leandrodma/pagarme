
module.exports = (Sequelize, DataTypes) => {
	
	const Payable = Sequelize.define('Payable',{
		id: {type: DataTypes.INTEGER.UNSIGNED, primaryKey: true, autoIncrement: true},
		transaction_id: DataTypes.INTEGER.UNSIGNED,
		payment_date: DataTypes.DATE,
		value: DataTypes.FLOAT,
		status: DataTypes.STRING,
	});

	return Payable
}

