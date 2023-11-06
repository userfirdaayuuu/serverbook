'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'stocks',
      [
        {
          title: 'Kisah Epik Sukarno',
          qty: 4,
          quality: 'good',
          bookId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
          },
          {
            title: 'Mahatma Gandhi',
            qty: 7,
            quality: 'good',
            bookId: 2,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            title: 'Kupikir Segalanya Akan Beres Saat Aku Dewasa',
            qty: 8,
            quality: 'good',
            bookId: 3,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            title: 'Ramai Yang Dulu Kita Bawa Pergi ',
            qty: 9,
            quality: 'good',
            bookId: 4,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            title: 'Rudy: Kisah Masa Muda Sang Visioner',
            qty: 10,
            quality: 'good',
            bookId: 5,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
      ],
    {}
    );
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Stocks', null, {});
  }
};
