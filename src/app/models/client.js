const uuid = require('uuid/v4'); 

module.exports = (Sequelize, DataTypes) => {

	const Client = Sequelize.define('Client', {
		id: {
			type: DataTypes.UUID,
			defaultValue: uuid(),
			allowNull: false,
			primaryKey: true
		},
		name: DataTypes.STRING,
		waiting_funds: { 
			type: DataTypes.INTEGER.UNSIGNED, 
			defaultValue: 0 
		},
		available_founds: { 
			type: DataTypes.INTEGER.UNSIGNED, 
			defaultValue: 0 
		}
	});

	return Client
}

