'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Review extends Model {
    static associate(models) {
      Review.belongsTo(models.Book, { 
        foreignKey: "bookId",
        as: "book" 
      });
      Review.belongsTo(models.User, { 
        foreignKey: "userId"
      });
    }
  }
  Review.init({
    title: {
      type: DataTypes.STRING,
      validate:{
        len: [1,255],
        notEmpty: true,
      },
    },
    description: {
      type: DataTypes.TEXT,
      validate:{
        len: [1,255],
        notEmpty: true,
      },
    },
    rating: {
      type: DataTypes.INTEGER,
      validate: {
        min: 0, 
        max: 5, 
        notEmpty: true,
      },
    },
    bookId: {
      type: DataTypes.INTEGER,
      validate:{
        notEmpty: true,
      },
    },
    userId: {
      type: DataTypes.INTEGER,
      validate:{
        notEmpty: true,
      },
    },
  }, {
    sequelize,
    modelName: 'Review',
  });
  return Review;
};