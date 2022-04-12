require("dotenv").config();
// const env = process.env;

module.exports = {
  development: {
    username: "admin",
    password: "ccbj5555",
    database: "diet_challenge",
    host: "diet-challenge-deploy.ccwj70jnseyi.ap-northeast-2.rds.amazonaws.com",
    port: "3306",
    dialect: "mysql",
  },
  test: {
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    host: process.env.DATABASE_HOST,
    port: process.env.DB_PORT,
    dialect: "mysql",
  },
  production: {
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    host: process.env.DATABASE_HOST,
    port: process.env.DB_PORT,
    dialect: "mysql",
  },
};
