"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Books", [
      {
        name: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        year_published: 1925,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "To Kill a Mockingbird",
        author: "Harper Lee",
        year_published: 1960,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "1984",
        author: "George Orwell",
        year_published: 1949,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Books", null, {});
  },
};
