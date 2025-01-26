const path = require("path");
const envPath = path.resolve(__dirname, "../.env");

require("dotenv").config({ path: envPath });

const express = require("express");
const app = express();
const { sequelize } = require("sequelize");
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// LISTEN
app.listen(4000, () => {
  console.log("Server is running on port 4000");
});
