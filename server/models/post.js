"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      post.belongsTo(models.user, {
        foreignKey: "user_id",
      });
      post.hasOne(models.user, {
        foreignKey: "latestPostId",
      });
    }
  }
  post.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      goal: DataTypes.STRING,
      photo: DataTypes.STRING,
      content: DataTypes.STRING(1234),
    },
    {
      sequelize,
      modelName: "post",
    }
  );
  return post;
};
