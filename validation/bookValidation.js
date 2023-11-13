const Joi = require("joi");

const addBookValidate = Joi.object({
    title: Joi.string().required(),
    description: Joi.string().required(),
    genre: Joi.string().required(),
    authorId: Joi.number().positive().required()
});

const updateBookValidate = Joi.object({
    id: Joi.number().positive().required(),
    title: Joi.string().required(),
});

const getAllBookValidate = Joi.object({
    id: Joi.number().positive().required(),
});

module.exports = { addBookValidate, updateBookValidate, getAllBookValidate}