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
          bornDate: new Date ("1987-08-01"), 
          domicile: 'Yogyakarta',
          contact: '0812-3456-7890',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Mohandas Karamchand Gandhi',
          description: 'seorang pemimpin spiritual dan politikus dari India',
          bornDate: new Date ("1869-10-02"),
          domicile: 'India',
          contact: '0812-7890-3456',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Kim Hae Nam',
          description: 'seorang psikiater profesional yang dicintai banyak masyarakat Korea',
          bornDate: new Date ("1959-01-01"),
          domicile: 'Korea Selatan',
          contact: '0857-7890-3156',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Suci Berliana',
          description: 'seorang mahasiswa lulusan ekonomi dan penulis buku',
          bornDate: new Date ("2002-09-01"),
          domicile: 'Jakarta',
          contact: '0812-7340-8956',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Gina S. Noer',
          description: 'seorang pembuat film mencakup penulis skenario, produser, dan sutradara',
          bornDate: new Date ("1985-08-01"),
          domicile: 'Balikpapan',
          contact: '0857-1890-3426',
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
