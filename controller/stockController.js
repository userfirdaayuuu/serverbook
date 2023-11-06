const { Stock } = require("../models")

class stockController {
  static async addStock(req, res) {
    const { title, qty, quality } = req.body;
    try {
      const stock = await Stock.create({ title, qty, quality });
      res.status(201).json(stock);
    } catch (error) {
      next(error);
    }
  }

  static async getAllStock(req, res) {
    try {
      const stock = await Stock.findAll()
      res.status(200).json(stock);
    } catch (error) {
      next(error);
    }
  }

  static async getOneStock(req, res, next) {
    const { id } = req.params;
    try {
      const stock = await Stock.findByPk(id);
      res.json(stock).status(200)
    } catch (error) {
      next(error);
    }
  }

  static async updateStock(req, res, next) {
    const {id} = req.params;
    const { title, qty, quality } = req.body;
    try {
      const stock = await Stock.findByPk(id);

      stock.title = title || stock.title;
      stock.qty = qty || stock.qty;
      stock.quality = quality || stock.quality;
      await stock.save();
      return res.json(stock).status(200);
    } catch (error) {
      next(error);
    }
  }

  static async deleteStock(req, res, next) {
    const { id } = req.params;
    try {
      const stock = await Stock.findByPk(id)
      await stock.destroy()
      return res
        .status(200)
        .json({ message: `buku ${stock.title} telah dihapus` })
    } catch (error) {
      next(error);
    }
  }
}

module.exports = stockController;