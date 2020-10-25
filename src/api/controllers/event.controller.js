const httpStatus = require('http-status');
const eventService = require('../services/event.service');

//http://localhost:3000/v1/event?sortBy=city&orderBy=asc
exports.get = async (req, res, next) => {
	try {
		const { sortBy, orderBy } = req.query;
		const response = await eventService.get(sortBy, orderBy);
		res.status(httpStatus.OK).json(response);
	} catch (e) {
		next(e);
	}
};
exports.getById = async (req, res, next) => {
	const { id } = req.params;
	try {
		const response = await eventService.getById(id);
		res.status(httpStatus.OK).json(response);
	} catch (e) {
		next(e);
	}
};
exports.getByDateRange = async (req, res, next) => {
	try {
		const { start_date, end_date } = req.params;
		const response = await eventService.getByDateRange(start_date, end_date);
		res.status(httpStatus.OK).json(response);
	} catch (e) {
		next(e);
	}
};
exports.create = async (req, res, next) => {
	try {
		const response = await eventService.create(req.body);
		res.status(httpStatus.CREATED).json(response);
	} catch (e) {
		next(e);
	}
};

exports.update = async (req, res, next) => {
	const { id } = req.params;

	try {
		const response = await eventService.update(id, req.body);
		res.status(httpStatus.OK).json(response);
	} catch (e) {
		next(e);
	}
};

exports.delete = async (req, res, next) => {
	const { id } = req.params;

	try {
		const response = await eventService.delete(id);
		res.status(httpStatus.OK).json(response);
	} catch (e) {
		next(e);
	}
};
