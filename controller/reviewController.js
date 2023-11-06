const { Review, Book } = require("../models")

class reviewController {
  static async addReview(req, res, next) {
    const { title, description, rating, bookId } = req.body;
    const user = req.user;
    try {
      const book = await Book.findByPk(bookId)
      const review = await Review.create({
        title,
        description,
        rating,
        bookld: book.id,
        userId: user.id
      });
      Review.reload({
        include: [
          {
            model: Book,
            as: "book",
          },
        ],
      });
      return res.status(201).json(review);
    } catch (error) {
      next(error);
    }
  }

  static async getAllReviews(req, res, next) {
    try {
      const review = await Review.findAll()
      res.status(200).json(review);
    } catch (error) {
      next(error);
    }
  }

  static async updateReview(req, res, next) {
    const { id } = req.params.id;
    const { title, description, rating } = req.body;
    try {
      const review = await Review.findByPk( id )

      review.title = title || review.title;
      review.description = description || review.description;
      review.rating = rating || review.rating;
      await review.save();
      return res.status(200).json({
        title: review.title,
        description: review.description,
        rating: review.rating,
        createdAt: review.createdAt,
        updatedAt: review.updatedAt,
      });
    } catch (error) {
      next(error);
    }
  }

  static async deleteReview(req, res) {
    const { id } = req.params;
    try {
      const review = await Review.findOne(id);
      await Review.destroy()
      return res
        .status(200)
        .json({ message: `Review ${review.id} telah dihapus` });
    } catch (error) {
      next(error);
    };
  };
}

module.exports = reviewController;