const express = require('express');
const router = express.Router();
const Book = require('../models/Book');

// Route pour ajouter un livre
router.post('/add', async (req, res) => {
  try {
    const newBook = new Book(req.body);
    const savedBook = await newBook.save();
    res.json(savedBook);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Route pour récupérer tous les livres
router.get('/', async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Route pour modifier un livre par son ID
router.put('/update/:id', async (req, res) => {
  try {
    const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedBook);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
