module.exports = (Sequelize, DataTypes) => {

	const client = Sequelize.define('client', {
		id: {
			type: DataTypes.UUID,
			defaultValue: DataTypes.UUIDV4,
			allowNull: false,
			primaryKey: true
		},
		name: DataTypes.STRING,
		waiting_funds: { 
			type: DataTypes.INTEGER, 
			defaultValue: 0 
		},
		available_funds: { 
			type: DataTypes.INTEGER, 
			defaultValue: 0 
		}
	});

	return client
}

