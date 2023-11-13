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
      validate: {
        len: [1, 255],
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
      type: DataTypes.STRING,
      validate: {
        len: [8, 20],
        notEmpty: true,
      },
    },
  }, {
    sequelize,
    modelName: 'User',
  });

  // hooks hash password

  User.beforeCreate(async (user, options) => {
    const hashedPassword = await bcrypt.hash(user.password, 10);
    user.password = hashPassword;
  });

  return User;
};