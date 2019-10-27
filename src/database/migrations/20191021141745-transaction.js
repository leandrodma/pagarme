'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

   return queryInterface.createTable('transaction', 
    {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
      },
      payment_method:{
        type: Sequelize.ENUM('debit','credit'),
        allowNull: false,
        defaultValue: false
      },
      description:{
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: false
      },
      card_number:{
        type: Sequelize.INTEGER,
        size:4,
        allowNull: false,
        defaultValue: false
      },
      card_name:{
        type: Sequelize.STRING,
        allowNull:false,
        defaultValue:false,
      },
      card_expirate_date:{
        type: Sequelize.DATEONLY,
        allowNull:false,
        defaultValue:false,
      },
      card_cvv: {
        type: Sequelize.INTEGER.UNSIGNED,
        size:3,
        allowNull:false,
        defaultValue: false,
      },
      value: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull:false,
        defaultValue: false,
      },
      fee: {
        type: Sequelize.INTEGER.UNSIGNED,
        size:2,
        allowNull:false,
        defaultValue: false,
      },
      created_at: {
        type: Sequelize.DATE
      },
      updated_at: {
        type: Sequelize.DATE
      }
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('transaction');
  }
};
