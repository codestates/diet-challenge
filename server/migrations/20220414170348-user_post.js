"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("users", "latestPostId", {
      type: Sequelize.DataTypes.INTEGER,
    });

    await queryInterface.addConstraint("users", {
      fields: ["latestPostId"],
      type: "foreign key",
      name: "user_post_reference_1",
      references: {
        table: "posts",
        field: "id",
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeConstraint("users", "user_post_reference_1");

    await queryInterface.removeColumn("users", "latestPostId");
  },
};
