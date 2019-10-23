module.exports = (Sequelize, DataTypes) => {
	
	const Client = Sequelize.define('Client',{
		name: DataTypes.STRING,
		waiting_funds: { type: DataTypes.FLOAT, defaultValue: 0 },
		available_founds: { type: DataTypes.FLOAT, defaultValue: 0 }
	});

	return Client
}

