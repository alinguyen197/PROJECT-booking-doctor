"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    return queryInterface.bulkInsert("Users", [
      {
        email: "alinguyen@gmial.com",
        password: "1234", // convert to hash password
        firstName: "Nguyen",
        lastName: "Ali",
        address: "219 Bui Quang La, P.24 , Quan Binh Thanh",
        gender: 0, // save 0  or 1 into db
        roleId: "R1",
        positionId: "Doctor",
        image: "",
        phoneNumber: "012345689",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
