'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Stocks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        allowNull: false,
        type: Sequelize.STRING
      },
      qty: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      quality: {
        allowNull: false,
        type: Sequelize.ENUM,
        values: ['good', 'defective'],
      },
      bookId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references:{
          model: "Books",
          key: "id",
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Stocks');
  }
};