'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'users',
      [
        {
          name: 'admin',
          email: 'admin@email.com',
          password: 'qwvcertyui', 
          isAdmin: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'firda',
          email: 'firda@email.com',
          password: 'vbnhjklmui', 
          isOwned: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'giena',
          email: 'giena@email.com',
          password: 'aedrftgyoi', 
          isBuyer: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'tedja',
          email: 'tedja@email.com',
          password: 'ioyutrfghjk', 
          isBuyer: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'bieta',
          email: 'bieta@email.com',
          password: 'opkljhbvcz', 
          isBuyer: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'shaka',
          email: 'shaka@email.com',
          password: 'oinhgsadew', 
          isBuyer: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'meera',
          email: 'meera@email.com',
          password: 'oinbgtrmkl', 
          isBuyer: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
