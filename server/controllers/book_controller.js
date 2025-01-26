const books = require("express").Router();
const db = require("../models");

const { Book } = db;

// GET all books
books.get("/", async (req, res) => {
  try {
    const findAllBooks = await Book.findAll();
    res.json(findAllBooks);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = books;
