const Joi = require("joi");

const registerValidation = Joi.object({
    name: Joi.string().required().min(5).max(50),
    email: Joi.string().email().required().max(100),
    password: Joi.string().required().min(8).max(50)
});

const loginValidation = Joi.object({
    email: Joi.string().email().required().max(100),
    password: Joi.string().required().min(8).max(50)
});

const getAllUserValidation = Joi.string().required().max(100);

module.exports = { registerValidation, loginValidation, getAllUserValidation};