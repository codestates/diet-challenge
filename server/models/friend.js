"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class friend extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      friend.belongsTo(models.user, {
        foreignKey: "user_id",
      });
      friend.belongsTo(models.user, {
        foreignKey: "fUser_id",
      });
    }
  }
  friend.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      request: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
    },
    {
      sequelize,
      modelName: "friend",
    }
  );
  return friend;
};
