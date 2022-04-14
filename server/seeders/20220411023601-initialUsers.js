"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("users", [
      {
        userId: "one",
        userNickName: "yoon",
        userPassword: "11111111",
      },
      {
        userId: "two",
        userNickName: "choi",
        userPassword: "22222222",
      },
      {
        userId: "three",
        userNickName: "hong",
        userPassword: "33333333",
      },
      {
        userId: "four",
        userNickName: "kim",
        userPassword: "44444444",
      },
      {
        userId: "five",
        userNickName: "do",
        userPassword: "55555555",
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("users", null, {});
  },
};
