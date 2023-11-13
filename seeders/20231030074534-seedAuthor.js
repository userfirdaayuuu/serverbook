'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'authors',
      [
        {
          name: 'Abraham Panumbangan',
          description: 'Seorang penulis yang telah menerbitkan kurang lebih 5 karya',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Mohandas Karamchand Gandhi',
          description: 'seorang pemimpin spiritual dan politikus dari India',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Kim Hae Nam',
          description: 'seorang psikiater profesional yang dicintai banyak masyarakat Korea',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Suci Berliana',
          description: 'seorang mahasiswa lulusan ekonomi dan penulis buku',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Gina S. Noer',
          description: 'seorang pembuat film mencakup penulis skenario, produser, dan sutradara',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ]
    )
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Authors', null, {});
  }
};
