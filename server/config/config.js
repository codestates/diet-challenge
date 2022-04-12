// require("dotenv").config();
// const env = process.env;

module.exports = {
  development: {
    username: DATABASE_USERNAME,
    password: DATABASE_PASSWORD,
    database: DATABASE_NAME,
    host: DATABASE_HOST,
    port: DB_PORT,
    dialect: "mysql",
  },
  test: {
    username: env.DATABASE_USERNAME,
    password: env.DATABASE_PASSWORD,
    database: env.DATABASE_NAME,
    host: env.DATABASE_HOST,
    port: env.DB_PORT,
    dialect: "mysql",
  },
  production: {
    username: env.DATABASE_USERNAME,
    password: env.DATABASE_PASSWORD,
    database: env.DATABASE_NAME,
    host: env.DATABASE_HOST,
    port: env.DB_PORT,
    dialect: "mysql",
  },
};
