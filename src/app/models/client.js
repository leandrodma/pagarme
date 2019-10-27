module.exports = (Sequelize, DataTypes) => {
	
	const Client = Sequelize.define('Client',{
		name: DataTypes.STRING,
		waiting_funds: { type: DataTypes.INTEGER.UNSIGNED, defaultValue: 0 },
		available_founds: { type: DataTypes.INTEGER.UNSIGNED, defaultValue: 0 }
	},
	{
    classMethods: {
      associate: function(models) {
				console.log('===>',models)
        Client.hasMany(models.Payable);
			}
		}
	});

	return Client
}

