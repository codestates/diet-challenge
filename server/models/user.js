"use strict";
const { Model } = require("sequelize");
const post = require("./post");
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      user.belongsTo(models.post, {
        foreignKey: "latestPostId",
      });
      user.hasMany(models.post, {
        foreignKey: "user_id",
      });
      user.hasMany(models.friend, {
        foreignKey: "user_id",
      });
      user.hasMany(models.friend, {
        foreignKey: "fUser_id",
      });
    }
  }
  user.init(
    {
      //id 프로퍼티 추가
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      userId: DataTypes.STRING,
      userNickName: DataTypes.STRING,
      userPassword: DataTypes.STRING,
      nowGoal: DataTypes.STRING,
      authorization: {
        type: DataTypes.BOOLEAN,
        defaultValue: false, //기본값 설정
      },
      salt: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "user",
    }
  );
  return user;
};
