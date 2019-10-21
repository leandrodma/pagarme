'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('payable', 
    { 
      id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      client_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: false
      },
      transaction_id:{
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: false
      },
      payment_date: Sequelize.DATE,
      value: {
        type: Sequelize.FLOAT,
        allowNull: false,
        defaultValue: false
      },
      status:{
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: false
      },
      createdAt: {
        type: Sequelize.DATE
      },
      updatedAt: {
        type: Sequelize.DATE
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('payable');
  }
};
