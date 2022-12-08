'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Users', [{
      firstName: 'thi',
      lastName: 'nguyen',
      email: 'thi@example.com',
      password:'thiadasd',
      createdAt: new Date(),
      updatedAt: new Date(),
      
    },
    {
      firstName: 'thi2',
      lastName: 'nguyen2',
      email: 'thi@example.com',
      password:'thiadasd',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      firstName: 'thi3',
      lastName: 'nguyen3',
      email: 'thi@example.com',
      password:'thiadasd',
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ,
  {
    firstName: 'thi4',
    lastName: 'nguyen4',
    email: 'thi@example.com',
    password:'thiadasd',
    createdAt: new Date(),
    updatedAt: new Date()
  }]);
  },

  async down (queryInterface, Sequelize) {
    return await queryInterface.bulkDelete('Users', null, {});
  }
};
