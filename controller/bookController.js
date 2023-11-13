const { Book, Review } = require("../models")

class bookController {
  static async addBook(req, res, next) {
    const { title, description, genre } = req.body;
    try {
      const book = await Book.create({ title, description, genre });
      res.status(201).json(book);
    } catch (error) {
      next(error);
    }
  }

  static async getAllBook(req, res) {
    try {
      const book = await Book.findAll()
      res.status(200).json(book);
    } catch (error) {
      next(error)
    }
  }

  static async getOneBook(req, res, next) {
    const { id } = req.params;
    try {
      const book = await Book.findByPk(id);
      res.json(book).status(200)
    } catch (error) {
      next(error);
    }
  }

  static async updateBook(req, res, next) {
    const {id} = req.params;
    const { title, description, genre } = req.body;
    try {
      const book = await Book.findByPk(id);

      book.title = title || book.title;
      book.description = description || book.description;
      book.genre = genre || book.genre;
      await book.save();
      return res.json(book).status(200);
    } catch (error) {
      next(error);
    }
  }

  static async deleteBook(req, res, next) {
    const { id } = req.params;
    try {
      const book = await Book.findByPk(id)
      await book.destroy()
      return res
        .status(200)
        .json({ message: `buku ${book.title} telah dihapus` })
    } catch (error) {
      next(error);
    }
  }
}

module.exports = bookController;