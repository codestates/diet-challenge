"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
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
      latestPostId: DataTypes.INTEGER, //포린키
      authorization: {
        type: DataTypes.BOOLEAN,
        defaultValue: false, //기본값 설정
      },
    },
    {
      sequelize,
      modelName: "user",
    }
  );
  return user;
};
