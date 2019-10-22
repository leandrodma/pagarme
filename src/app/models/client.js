module.exports = (Sequelize, DataTypes) => {
	
	const Client = Sequelize.define('Client',{
		id: {type: DataTypes.INTEGER, primaryKey: true},
		name: DataTypes.STRING,
		waiting_funds: { type: DataTypes.FLOAT, defaultValue: 0 },
		available_founds: { type: DataTypes.FLOAT, defaultValue: 0 },
		createdAt: DataTypes.DATE,
		updatedAt: DataTypes.DATE
	});

	return Client
}

