const Joi = require("joi");

const addAuthorValidate = Joi.object({
    name: Joi.string().required().min(1).max(255),
    description: Joi.string().required().min(1).max(255),
});

const getAllAuthorValidate = Joi.object({
    id: Joi.number().positive().required(),
});

module.exports = { addAuthorValidate, getAllAuthorValidate};