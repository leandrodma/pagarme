const {transaction} = require('../models')

module.exports = (Sequelize, DataTypes) => {
	
	const payable = Sequelize.define('payable',{
		id: {
			type: DataTypes.UUID, 
			primaryKey: true, 
			defaultValue: DataTypes.UUIDV4
		},
		transaction_id: DataTypes.UUID,
		client_id: DataTypes.UUID,
		payment_date: DataTypes.DATEONLY,
		value: DataTypes.INTEGER,
		status: DataTypes.ENUM('waiting_funds', 'paid')
	});

	payable.associate = function(models) {
    payable.belongsTo(models.client)
  };
	return payable
}

