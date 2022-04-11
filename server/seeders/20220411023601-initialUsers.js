"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("users", [
      {
        userId: "one",
        userNickName: "yoon",
        userPassword: "1111",
      },
      {
        userId: "two",
        userNickName: "choi",
        userPassword: "2222",
      },
      {
        userId: "three",
        userNickName: "hong",
        userPassword: "3333",
      },
      {
        userId: "four",
        userNickName: "kim",
        userPassword: "4444",
      },
      {
        userId: "five",
        userNickName: "do",
        userPassword: "5555",
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkdelete("users", null, {});
  },
};
