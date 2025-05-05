const books = [
  { id: 1, title: 'To Kill a Mockingbird', author: 'Harper Lee', available: true },
  { id: 2, title: '1984', author: 'George Orwell', available: true },
  { id: 3, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', available: true },
];

module.exports = books;

const express = require('express');
const app = express();
const port = 3000;
const books = require('./books');

app.use(express.json());

app.get('/books', (req, res) => {
  res.json(books);
});

app.get('/books/:id', (req, res) => {

    const book = books.find((b) => b.id === parseInt(req.params.id));

    if (!book) {
        return res.status(404).json({ message: 'Book not found' });
    }

    res.json(book);
}
);
