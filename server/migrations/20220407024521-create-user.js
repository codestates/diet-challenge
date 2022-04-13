"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("users", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      userId: {
        type: Sequelize.STRING,
      },
      userNickName: {
        type: Sequelize.STRING,
      },
      userPassword: {
        type: Sequelize.STRING,
      },
      nowGoal: {
        type: Sequelize.STRING,
      },
      latestPostId: {
        type: Sequelize.INTEGER,
      },
      authorization: {
        type: Sequelize.BOOLEAN,
        defaultValue: false, //기본값 설정
      },
      createdAt: {
        allowNull: false,
        type: "TIMESTAMP",
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"), //그때 그때 찍히게 설정
      },
      updatedAt: {
        allowNull: false,
        type: "TIMESTAMP",
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("users");
  },
};
