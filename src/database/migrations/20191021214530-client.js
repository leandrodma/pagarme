'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('client', 
      {id: Sequelize.INTEGER},
      {name: Sequelize.STRING},
      {createdAt: Sequelize.DATE},
      {updatedAt: Sequelize.DATE}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('client');
  }
};
