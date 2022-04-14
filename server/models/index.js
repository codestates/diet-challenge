"use strict";

const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || "development";
const config = require(__dirname + "/../config/config.js")[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
  );
}

fs.readdirSync(__dirname)
  .filter((file) => {
    return (
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
    );
  })
  .forEach((file) => {
    const model = require(path.join(__dirname, file))(
      sequelize,
      Sequelize.DataTypes
    );
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

// //관계 설정
// const { user, post, friend } = db;
// //post(user_id) -> user(id) = 1: N
// user.hasMany(post, {
//   foreignKey: "user_id",
// });
// post.belongsTo(user);

// //user(latestPostId) -> post(id) = 1: 1
// post.hasOne(user, {
//   foreignKey: "latestPostId",
// });
// user.belongsTo(post);

// //friend(user_id) -> user(id) = N : 1
// user.hasMany(friend, {
//   foreignKey: "user_id",
// });
// friend.belongsTo(user);

// //friend(fUser_id) -> user(id) = N : 1
// user.hasMany(friend, {
//   foreignKey: "fUser_id",
// });
// friend.belongsTo(user);

module.exports = db;
