"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("roles", [
      { id: 1, description: "Admin" },
      { id: 2, description: "Registered" },
      { id: 3, description: "Guess" },
    ]);

    await queryInterface.bulkInsert("users", [
      {
        id: 1,
        name: "henry admin",
        email: "admin@admin.com",
        password: "_1234",
        phone_Number: 123, //1 admin, 2: registrados, 3:invitados
        location_id: 2,
        roleId: 1,
        available: true,
      },
      {
        id: 2,
        name: "angel",
        email: "angel@ecommerce.com",
        password: "1234",
        phone_Number: 456,
        location_id: 1,
        roleId: 2,
        available: true,
      },
      {
        id: 3,
        name: "santi",
        email: "santi@ecommerce.com",
        password: "1234",
        phone_Number: 789,
        location_id: 3,
        roleId: 2,
        available: true,
      },
      {
        id: 4,
        name: "dario",
        email: "dario@ecommerce.com",
        password: "1234",
        phone_Number: 100,
        location_id: 5,
        roleId: 2,
        available: true,
      },
      {
        id: 5,
        name: "lucia",
        email: "lucia@ecommerce.com",
        password: "1234",
        phone_Number: 101,
        location_id: 3,
        roleId: 2,
        available: true,
      },
      {
        id: 6,
        name: "eze",
        email: "eze@ecommerce.com",
        password: "1234",
        phone_Number: 102,
        location_id: 3,
        roleId: 2,
        available: true,
      },
      {
        id: 7,
        name: "leandro",
        email: "leandro@ecommerce.com",
        password: "1234",
        phone_Number: 103,
        location_id: 3,
        roleId: 2,
        available: true,
      },
      {
        id: 8,
        name: "cristian",
        email: "cristian@ecommerce.com",
        password: "1234",
        phone_Number: 104,
        location_id: 3,
        roleId: 2,
        available: true,
      },
      {
        id: 9,
        name: "lenin",
        email: "lenin@ecommerce.com",
        password: "1234",
        phone_Number: 105,
        location_id: 9,
        roleId: 2,
        available: true,
      },
      {
        id: 10,
        name: "nahuel",
        email: "nahuel@ecommerce.com",
        password: "1234",
        phone_Number: 106,
        location_id: 8,
        roleId: 2,
        available: true,
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("roles", null, {});
    await queryInterface.bulkDelete("users", null, {});
  },
};
