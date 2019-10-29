'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('payable', 
    { 
      id:{
        type: Sequelize.UUID,
        primaryKey: true,
        allowNull: false,
        defaultValue: Sequelize.UUIDV4
      },
      transaction_id:{
        type: Sequelize.UUID,
        references: {
          model: 'transaction', 
          key: 'id',
        },
        onUpdate: 'CASCADE',
      },
      payment_date: Sequelize.DATE,
      value: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false,
      },
      status:{
        type: Sequelize.ENUM('waiting_funds', 'paid'),
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE
      },
      updated_at: {
        type: Sequelize.DATE
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('payable');
  }
};
