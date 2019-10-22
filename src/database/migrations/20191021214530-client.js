'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.createTable('client', 
      {
        id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true
        },
        name: Sequelize.STRING,
        waiting_funds: {
          type: Sequelize.FLOAT,
          allowNull: false,
          defaultValue: 0
        },
        available_founds: {
          type: Sequelize.FLOAT,
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
