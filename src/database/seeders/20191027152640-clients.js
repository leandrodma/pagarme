'use strict';

const uuid = require('uuid/v4')

module.exports = {
  up: (queryInterface, Sequelize) => {
 
      return queryInterface.bulkInsert('client', [{
        id: uuid(),
        name: 'John Doe',
        created_at: Sequelize.fn('NOW'),
        updated_at: Sequelize.fn('NOW')
      }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('client', null, {});
  }
};
