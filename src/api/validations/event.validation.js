const Joi = require('@hapi/joi');
const validate = require('../utils/validateRequest');

exports.create = function (req, res, next) {
	validate(
		req,
		next,
		Joi.object({
			city: Joi.string().required(),
			start_date: Joi.string().required(),
			end_date: Joi.string().required(),
			price: Joi.string().required(),
			status: Joi.string().required(),
			color: Joi.string().required(),
		})
	);
};
