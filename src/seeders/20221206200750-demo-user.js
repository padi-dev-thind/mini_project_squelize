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
      updatedAt: new Date()
    }]);
  },

  async down (queryInterface, Sequelize) {
  
    await queryInterface.bulkDelete('User', null, {});
    
  }
};
