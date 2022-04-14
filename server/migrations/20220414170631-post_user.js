"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("posts", "user_id", {
      type: Sequelize.DataTypes.INTEGER,
    });

    await queryInterface.addConstraint("posts", {
      fields: ["user_id"],
      type: "foreign key",
      name: "post_user_reference_1",
      references: {
        table: "users",
        field: "id",
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeConstraint("posts", "post_user_reference_1");

    await queryInterface.removeColumn("posts", "user_id");
  },
};
