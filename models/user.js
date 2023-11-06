'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.hasMany(models.Review, {
        foreignKey: "userId"
      });
    }
  }
  User.init({
    name: {
      type: DataTypes.STRING,
      validate:{
        len: [1,255],
        notEmpty: true,
      },
    },
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.TEXT,
      validate: {
        len: [8,20],
        notEmpty: true,
      },
    },
    isAdmin: {
      type: DataTypes.BOOLEAN,
      validate:{
        notEmpty: true,
      },
    },
    isOwned: {
      type: DataTypes.BOOLEAN,
      validate:{
        notEmpty: true,
      },
    },
    isBuyer: {
      type: DataTypes.BOOLEAN,
      validate:{
        notEmpty: true,
      },
    },
  }, {
    sequelize,
    modelName: 'User',
  });

  // hooks hash password
  User.beforeCreate((user, options) => {
    return bcrypt.hash(user.password, 10)
      .then(hash => {
        user.password = hash;
      })
      .catch(err => {
        throw new Error(err);
      });
  });

  return User;
};