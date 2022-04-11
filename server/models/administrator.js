'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class administrator extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  administrator.init({
    code: DataTypes.STRING,
    admin: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'administrator',
  });
  return administrator;
};