'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

   return queryInterface.createTable('transaction', 
    {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        allowNull: false,
        defaultValue: Sequelize.UUIDV4
      },
      client_id: {
        type: Sequelize.UUID,
        references: {
          model: 'client', 
          key: 'id',
        },
        onUpdate: 'CASCADE',
      },
      payment_method:{
        type: Sequelize.ENUM('debit_card','credit_card'),
        allowNull: false,
      },
      description:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      card_number:{
        type: Sequelize.STRING,
        size:4,
        allowNull: false,
      },
      card_name:{
        type: Sequelize.STRING,
        allowNull:false,
      },
      card_valid_thru:{
        type: Sequelize.DATEONLY,
        allowNull:false,
      },
      card_cvv: {
        type: Sequelize.INTEGER.UNSIGNED,
        size:3,
        allowNull:false,
      },
      value: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull:false,
      },
      fee: {
        type: Sequelize.INTEGER.UNSIGNED,
        size:2,
        allowNull:false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false
      }
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('transaction');
  }
};
