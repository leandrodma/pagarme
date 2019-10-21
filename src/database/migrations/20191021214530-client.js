'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.createTable('client', 
      {
        id: Sequelize.INTEGER,
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
        createdAt: Sequelize.DATE,
        updatedAt: Sequelize.DATE
      }

    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('client');
  }
};
