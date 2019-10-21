'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    queryInterface.createTable('transactions', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        defaultValue: false
      },
      payment_method:{
        type: Sequelize.STRING,
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
        type: Sequelize.DATE,
        allowNull:false,
        defaultValue:false,
      },
      card_cvv: {
        type: Sequelize.INTEGER,
        size:3,
        allowNull:false,
        defaultValue: false,
      },
      value: {
        type: Sequelize.FLOAT,
        allowNull:false,
        defaultValue: false,
      },
      fee: {
        type: Sequelize.INTEGER,
        size:2,
        allowNull:false,
        defaultValue: false,
      },
      createdAt: {
        type: Sequelize.DATE
      },
      updatedAt: {
        type: Sequelize.DATE
      }
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('transactions');
  }
};
