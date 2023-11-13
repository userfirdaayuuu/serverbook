const Joi = require("joi");

const addReviewValidate = Joi.object({
    title: Joi.string().required().min(1).max(255),
    description: Joi.string().required().min(1).max(255), 
    rating: Joi.number().integer().max(5).required(),
    bookId: Joi.number().required(),
});

const updateReviewValidate = Joi.object({
    id: Joi.number().positive().required(),
    title: Joi.string().required(),
    rating: Joi.number().integer().required(),
});

const getAllReviewsValidate = Joi.object({
    id: Joi.number().positive().required(),
});

module.exports = {addReviewValidate, updateReviewValidate, getAllReviewsValidate};