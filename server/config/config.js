const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../../.env") });

console.log("DB_HOST:", process.env.DB_HOST);

module.exports = {
  development: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT || 5432,
    dialect: "postgres",
    logging: console.log,
  },
};
