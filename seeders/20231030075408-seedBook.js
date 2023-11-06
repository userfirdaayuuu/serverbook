'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'books',
      [
        {
          title: 'Kisah Epik Sukarno',
          description : 'Buku ini membahas tentang kisah Sukarno dari bagaimana beliau melahirkan Pancasila, Garuda, hingga bendera Indonesia, mengenai hubungan beliau dengan Amerika dan Fidel Castro, sampai detik-detik wafatnya, dan potongan kisah hidup lainnya dari sang proklamator.',
          genre: 'biografi',
          authorId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
          },
          {
            title: 'Mahatma Gandhi',
            description : 'Buku ini membahas tentang sebuah autobiografi kisah tentang eksperimen-eksperimen saya terhadap kebenaran',
            genre: 'autobiografi',
            authorId: 2,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            title: 'Kupikir Segalanya Akan Beres Saat Aku Dewasa',
            description : 'Buku ini membahas tentang bagaimana pengalaman di masa kecil dapat berpengaruh pada proses kedewasaan.',
            genre: 'motivasi',
            authorId: 3,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            title: 'Ramai Yang Dulu Kita Bawa Pergi',
            description : 'Buku ini membahas tentang semua kenangan yang memenuhi rongga kepala. Tentang semua gelak tawa yang menggema di rongga telinga.',
            genre: 'literatur',
            authorId: 4,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            title: 'Rudy: Kisah Masa Muda Sang Visioner',
            description : 'Buku ini membahas tentang sejarah mengenai perjalanan beliau sejak kecil hingga tumbuh memberikan kontribusi besar untuk Indonesia.',
            genre: 'biografi',
            authorId: 5,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
      ],
    {}
  );
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Books', null, {});
  }
};
