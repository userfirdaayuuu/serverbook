const { Author } = require("../models/author")

class authorController {
  static async addAuthor(req, res) {
    const { name, description, bornDate, domicile, contact } = req.body;
    try {
      const author = await Author.create({ name, description, bornDate, domicile, contact });
      res.status(201).json(author);
    } catch (error) {
      next(error);
    }
  }

  static async getAllAuthor(req, res) {
    try {
      const author = await Author.findAll()
      res.status(200).json(author);
    } catch (error) {
      next(error);
    }
  }

  static async getOneAuthor(req, res, next) {
    const { id } = req.params;
    try {
      const author = await Author.findByPk(id);
      res.json(author).status(200)
    } catch (error) {
      next(error);
    }
  }

  static async updateAuthor(req, res, next) {
    const {id} = req.params;
    const { name, description, bornDate, domicile, contact } = req.body;
    try {
      const author = await Author.findByPk(id);

      author.name = name || author.name;
      author.description = description || author.description;
      author.bornDate = bornDate || author.bornDate;
      author.domicile = domicile || author.domicile;
      author.contact = contact || author.contact;
      await author.save();
      return res.json(author).status(200);
    } catch (error) {
      next(error);
    }
  }

  static async deleteAuthor(req, res, next) {
    const { id } = req.params;
    try {
      const author = await Author.findByPk(id)
      await author.destroy()
      return res
        .status(200)
        .json({ message: `author ${author.name} telah dihapus` })
    } catch (error) {
      next(error);
    }
  }
}

module.exports = authorController;