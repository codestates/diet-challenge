"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("friends", "user_id", {
      type: Sequelize.DataTypes.INTEGER,
    });
    await queryInterface.addColumn("friends", "fUser_id", {
      type: Sequelize.DataTypes.INTEGER,
    });
    await queryInterface.addConstraint("friends", {
      fields: ["user_id"],
      type: "foreign key",
      name: "friend_user_reference_1",
      references: {
        table: "users",
        field: "id",
      },
    });
    await queryInterface.addConstraint("friends", {
      fields: ["fUser_id"],
      type: "foreign key",
      name: "friend_user_reference_2",
      references: {
        table: "users",
        field: "id",
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeConstraint("friends", "friend_user_reference_1");

    await queryInterface.removeConstraint("friends", "friend_user_reference_2");

    await queryInterface.removeColumn("friends", "user_id");
    await queryInterface.removeColumn("friends", "fUser_id");
  },
};
