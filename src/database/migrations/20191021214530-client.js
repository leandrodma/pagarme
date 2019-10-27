'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.createTable('client', 
      {
        id: {
          type: Sequelize.UUID,
          primaryKey: true,
          allowNull: false
        },
        name: Sequelize.STRING,
        waiting_funds: {
          type: Sequelize.INTEGER.UNSIGNED,
          allowNull: false,
          defaultValue: 0
        },
        available_founds: {
          type: Sequelize.INTEGER.UNSIGNED,
          allowNull: false,
          defaultValue: 0
        },
        created_at: Sequelize.DATE,
        updated_at: Sequelize.DATE
      }

    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('client');
  }
};
