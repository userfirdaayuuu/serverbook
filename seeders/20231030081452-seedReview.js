'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'reviews',
      [
        {
          title: 'Kisah Epik Sukarno',
          description : 'Buku ini membahas tentang kisah Sukarno dari bagaimana beliau melahirkan Pancasila, Garuda, hingga bendera Indonesia, mengenai hubungan beliau dengan Amerika dan Fidel Castro, sampai detik-detik wafatnya, dan potongan kisah hidup lainnya dari sang proklamator.',
          rating: 5,
          bookId: 1,
          userId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
          },
          {
            title: 'Mahatma Gandhi',
            description : 'Buku ini membahas tentang sebuah autobiografi kisah tentang eksperimen-eksperimen saya terhadap kebenaran',
            rating: 5,
            bookId: 2,
            userId: 4,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            title: 'Kupikir Segalanya Akan Beres Saat Aku Dewasa',
            description : 'Buku ini membahas tentang bagaimana pengalaman di masa kecil dapat berpengaruh pada proses kedewasaan.',
            rating: 5,
            bookId: 3,
            userId: 5,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            title: 'Ramai Yang Dulu Kita Bawa Pergi ',
            description : 'Buku ini membahas tentang semua kenangan yang memenuhi rongga kepala. Tentang semua gelak tawa yang menggema di rongga telinga.',
            rating: 5,
            bookId: 4,
            userId: 6,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            title: 'Rudy: Kisah Masa Muda Sang Visioner',
            description : 'Buku ini membahas tentang sejarah mengenai perjalanan beliau sejak kecil hingga tumbuh memberikan kontribusi besar untuk Indonesia.',
            rating: 5,
            bookId: 5,
            userId: 7,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
    ],
  {}
  );
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Reviews', null, {});
  }
};
