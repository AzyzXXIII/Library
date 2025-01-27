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
app.use(express.static(path.join(__dirname, "../build")));

//CONTROLLERS
const booksController = require("./controllers/book_controller");

app.use("/api/books", booksController);

// LISTEN
app.listen(4000, () => {
  console.log("Server is running on port 4000");
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../build/index.html"));
});
